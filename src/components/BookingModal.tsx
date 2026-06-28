import React, { useState, useRef, useEffect } from 'react';
import { X, MapPin, Home, Wrench, ClipboardList, ArrowRight, ArrowLeft, Phone, Send, Loader2, CheckCircle2, Pencil, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase, ROOFINGFRIEND_TENANT_ID } from '@/integrations/supabase/client';
import { companyConfig } from '@/config/company';
import { GooglePlacesAutocomplete } from '@/components/ui/google-places-autocomplete';

// Material images
import imgMetal from '@/assets/shingles/metal-roof.jpg';
import imgShingles from '@/assets/shingles/shingles-roof.jpg';
import imgTile from '@/assets/shingles/concrete-tile.jpg';
import imgTpo from '@/assets/shingles/tpo-roof.jpg';
import imgTorchDown from '@/assets/shingles/torch-down-roof.jpg';
import imgCoating from '@/assets/shingles/coating-roof.jpg';

const isCaliforniaZip = (zip: string): boolean => {
  const num = parseInt(zip, 10);
  return zip.length === 5 && !isNaN(num) && num >= 90001 && num <= 96162;
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Page = 'zip' | 'questions' | 'contact' | 'details' | 'success';

// Material options per slope (existing/current roof)
const MATERIALS_BY_SLOPE: Record<string, { key: string; label: string }[]> = {
  flat:    [{ key: 'tpo', label: 'TPO' }, { key: 'torch_down', label: 'Torch Down' }, { key: 'coating', label: 'Coating' }],
  shallow: [{ key: 'metal', label: 'Metal' }, { key: 'torch_down', label: 'Torch Down' }, { key: 'tpo', label: 'TPO' }],
  medium:  [{ key: 'shingles', label: 'Shingles' }, { key: 'metal', label: 'Metal' }],
  steep:   [{ key: 'shingles', label: 'Shingles' }, { key: 'metal', label: 'Metal' }],
};

// Wanted roof options
const WANTED_MATERIALS: { key: string; label: string }[] = [
  { key: 'shingles', label: 'Shingles' },
  { key: 'metal', label: 'Metal' },
  { key: 'tile', label: 'Tile' },
  { key: 'tpo', label: 'TPO' },
  { key: 'torch_down', label: 'Torch Down' },
  { key: 'coating', label: 'Coating' },
  { key: 'not_sure', label: "Not Sure" },
];

// Material key → real photo (null = use icon fallback)
const MATERIAL_IMAGES: Record<string, string | null> = {
  shingles: imgShingles,
  metal: imgMetal,
  tile: imgTile,
  tpo: imgTpo,
  torch_down: imgTorchDown,
  coating: imgCoating,
  not_sure: null,
};

// Gutter style options
const GUTTER_STYLES: { key: string; label: string }[] = [
  { key: 'k_style', label: 'K-Style' },
  { key: 'half_round', label: 'Half-Round' },
  { key: 'box', label: 'Box' },
  { key: 'fascia', label: 'Fascia' },
  { key: 'not_sure', label: "Not Sure" },
];

// Gutter color options
const GUTTER_COLORS: { key: string; label: string; hex: string }[] = [
  { key: 'white', label: 'White', hex: '#FFFFFF' },
  { key: 'brown', label: 'Brown', hex: '#6B4226' },
  { key: 'black', label: 'Black', hex: '#1a1a1a' },
  { key: 'almond', label: 'Almond', hex: '#EFDECD' },
  { key: 'gray', label: 'Gray', hex: '#808080' },
  { key: 'copper', label: 'Copper', hex: '#B87333' },
  { key: 'not_sure', label: "Not Sure", hex: '' },
];

// SVG roof icons matching the reference design exactly
// Flat: rectangular building, flat overhang line, 2×2 window grid
// Shallow: low-pitch gable roof, wide house, 3 windows
// Medium: moderate gable roof, 3 windows
// Steep: steep A-frame, 3 windows in narrow body
const SlopeIcon: React.FC<{ slope: string; active?: boolean; size?: number }> = ({ slope, active, size = 48 }) => {
  const stroke = active ? '#1e4a6e' : '#9ca3af';
  const fill = active ? '#1e4a6e' : '#9ca3af';
  const sw = '1.8'; // stroke width
  switch (slope) {
    case 'flat':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Flat overhang */}
          <line x1="7" y1="18" x2="41" y2="18" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          {/* Building body */}
          <rect x="9" y="18" width="30" height="20" rx="1" stroke={stroke} strokeWidth={sw} fill="none" />
          {/* 2×2 windows */}
          <rect x="14" y="23" width="7" height="5" rx="1" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="27" y="23" width="7" height="5" rx="1" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="14" y="32" width="7" height="5" rx="1" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="27" y="32" width="7" height="5" rx="1" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
        </svg>
      );
    case 'shallow':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shallow gable roof */}
          <path d="M5 26 L24 17 L43 26" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* House body */}
          <rect x="9" y="26" width="30" height="14" rx="1" stroke={stroke} strokeWidth={sw} fill="none" />
          {/* 3 windows */}
          <rect x="13" y="30" width="5" height="4" rx="0.5" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="21.5" y="30" width="5" height="4" rx="0.5" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="30" y="30" width="5" height="4" rx="0.5" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
        </svg>
      );
    case 'medium':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Medium gable roof */}
          <path d="M6 28 L24 14 L42 28" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* House body */}
          <rect x="10" y="28" width="28" height="12" rx="1" stroke={stroke} strokeWidth={sw} fill="none" />
          {/* 3 windows */}
          <rect x="14" y="31" width="5" height="4" rx="0.5" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="21.5" y="31" width="5" height="4" rx="0.5" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="29" y="31" width="5" height="4" rx="0.5" stroke={stroke} strokeWidth={sw} fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
        </svg>
      );
    case 'steep':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Steep A-frame roof */}
          <path d="M8 34 L24 10 L40 34" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Narrow body */}
          <rect x="12" y="34" width="24" height="6" rx="1" stroke={stroke} strokeWidth={sw} fill="none" />
          {/* 3 small windows in body */}
          <rect x="15" y="35" width="4" height="3.5" rx="0.5" stroke={stroke} strokeWidth="1.4" fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="22" y="35" width="4" height="3.5" rx="0.5" stroke={stroke} strokeWidth="1.4" fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
          <rect x="29" y="35" width="4" height="3.5" rx="0.5" stroke={stroke} strokeWidth="1.4" fill={active ? fill : 'none'} fillOpacity={active ? 0.15 : 0} />
        </svg>
      );
    default:
      return null;
  }
};

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [page, setPage] = useState<Page>('zip');
  const [zip, setZip] = useState('');
  const [zipError, setZipError] = useState('');

  // Question answers — selecting one reveals the next question below
  const [service, setService] = useState('');
  const [roofSlope, setRoofSlope] = useState('');
  const [roofMaterial, setRoofMaterial] = useState('');
  const [wantedRoof, setWantedRoof] = useState('');
  const [replaceGutters, setReplaceGutters] = useState('');
  const [rottedDeck, setRottedDeck] = useState('');
  const [numFloors, setNumFloors] = useState('');

  // Gutter-specific state
  const [gutterStyle, setGutterStyle] = useState('');
  const [gutterColor, setGutterColor] = useState('');

  // Contact / details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new questions appear
  useEffect(() => {
    if (page === 'questions' && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [service, roofSlope, roofMaterial, wantedRoof, replaceGutters, rottedDeck, numFloors, gutterStyle, gutterColor, page]);

  const reset = () => {
    setPage('zip'); setZip(''); setZipError(''); setCity(''); setService('');
    setRoofSlope(''); setRoofMaterial('');
    setWantedRoof(''); setReplaceGutters(''); setRottedDeck(''); setNumFloors('');
    setGutterStyle(''); setGutterColor('');
    setName(''); setPhone(''); setEmail(''); setAddress(''); setDescription('');
  };

  const handleClose = () => { onClose(); setTimeout(reset, 300); };

  const handleZipContinue = async () => {
    if (!zip.trim()) { setZipError('Please enter your zip code'); return; }
    if (!isCaliforniaZip(zip.trim())) { setZipError('Sorry, we currently only service California'); return; }
    setZipError('');
    // Resolve city from zip using free Zippopotam API (no key needed)
    try {
      const res = await fetch(`https://api.zippopotam.us/us/${zip.trim()}`);
      if (res.ok) {
        const data = await res.json();
        const placeName = data.places?.[0]?.['place name'];
        if (placeName) setCity(placeName.toUpperCase());
      }
    } catch { /* ignore — we'll just show zip */ }
    setPage('questions');
  };

  const handleContactNext = () => {
    if (!name.trim()) { toast({ title: 'Please enter your name', variant: 'destructive' }); return; }
    if (!phone.trim() && !email.trim()) { toast({ title: 'Please enter a phone number or email', variant: 'destructive' }); return; }
    setPage('details');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).replace(/_/g, ' ');
      const serviceDesc = [
        service === 'roof_replacement' ? 'Roof Replacement' : service === 'repair_leak' ? 'Repair/Leak' : service === 'gutters' ? 'Gutters & Downspouts' : 'Estimates & Assessments',
        roofSlope ? `(${cap(roofSlope)} slope` + (roofMaterial ? `, ${cap(roofMaterial)})` : ')') : '',
      ].filter(Boolean).join(' ');

      // Mirror src/components/BookingModal.tsx: send structured answers so
      // LeadDrawer's "Capture details" card is pre-populated instead of
      // showing 0/1 captured. Keys must match website-booking-flow.ts.
      const qualificationData: Record<string, string> = {};
      if (service)        qualificationData.service = service;
      if (roofSlope)      qualificationData.slope = roofSlope;
      if (roofMaterial)   qualificationData.material = roofMaterial;
      if (wantedRoof)     qualificationData.wanted = wantedRoof;
      if (replaceGutters) qualificationData.replace_gutters = replaceGutters;
      if (rottedDeck)     qualificationData.rotted_deck = rottedDeck;
      if (numFloors)      qualificationData.floors = numFloors;
      if (gutterStyle)    qualificationData.gutter_style = gutterStyle;
      if (gutterColor)    qualificationData.gutter_color = gutterColor;
      qualificationData._source = 'website_booking';

      await supabase.functions.invoke('create-crm-lead', {
        headers: { 'x-tenant-id': ROOFINGFRIEND_TENANT_ID },
        body: {
          tenantId: ROOFINGFRIEND_TENANT_ID,
          name: name.trim(), email: email.trim(), phone: phone.trim(),
          service: serviceDesc,
          preferredContact: phone.trim() ? 'phone' : 'email',
          propertyAddress: [address.trim(), city, 'CA', zip.trim()].filter(Boolean).join(', '),
          projectDescription: [
            description.trim(),
            roofSlope ? `Roof slope: ${cap(roofSlope)}` : '',
            roofMaterial ? `Current roof: ${cap(roofMaterial)}` : '',
            wantedRoof ? `Wanted roof: ${cap(wantedRoof)}` : '',
            replaceGutters ? `Replace gutters & downspouts: ${replaceGutters === 'idk' ? "I don't know" : cap(replaceGutters)}` : '',
            rottedDeck ? `Rotted roof deck: ${rottedDeck === 'idk' ? "I don't know" : cap(rottedDeck)}` : '',
            numFloors ? `Floors: ${numFloors}` : '',
            gutterStyle ? `Gutter style: ${cap(gutterStyle)}` : '',
            gutterColor ? `Gutter color: ${cap(gutterColor)}` : '',
          ].filter(Boolean).join('. '),
          zipCode: zip.trim(),
          referralSource: 'website_booking',
          qualificationData,
        },
      });

      setPage('success');
    } catch {
      toast({ title: 'Something went wrong', description: `Please call us directly at ${companyConfig.phone}`, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const services = [
    { key: 'roof_replacement', label: 'Roof Replacement', icon: Home },
    { key: 'repair_leak', label: 'Repair / Leak', icon: Wrench },
    { key: 'gutters', label: 'Gutters & Downspouts', icon: Droplets },
    { key: 'estimates', label: 'Estimates & Assessments', icon: ClipboardList },
  ];

  const slopes = [
    { key: 'flat', label: 'Flat' },
    { key: 'shallow', label: 'Shallow' },
    { key: 'medium', label: 'Medium' },
    { key: 'steep', label: 'Steep' },
  ];

  const cap = (s: string) => s.charAt(0).toUpperCase() + s.replace(/_/g, ' ').slice(1);

  const inputClass = "w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-500";

  // Check if all questions are answered per service
  const isRoofComplete = service === 'roof_replacement' && roofSlope && roofMaterial && wantedRoof && replaceGutters && rottedDeck && numFloors;
  const isRepairComplete = service === 'repair_leak' && roofSlope && roofMaterial;
  const isGuttersComplete = service === 'gutters' && gutterStyle && gutterColor && numFloors;
  const isEstimatesComplete = service === 'estimates';
  const allQuestionsComplete = isRoofComplete || isRepairComplete || isGuttersComplete || isEstimatesComplete;

  // Summary tags for the card
  const summaryTags: string[] = [];
  if (roofSlope) summaryTags.push(cap(roofSlope));
  if (roofMaterial) summaryTags.push(cap(roofMaterial));
  if (wantedRoof) summaryTags.push(cap(wantedRoof));
  if (replaceGutters) summaryTags.push(replaceGutters === 'yes' ? 'Gutters: Yes' : replaceGutters === 'no' ? 'Gutters: No' : "Gutters: IDK");
  if (rottedDeck) summaryTags.push(rottedDeck === 'yes' ? 'Rotted: Yes' : rottedDeck === 'no' ? 'Rotted: No' : "Rotted: IDK");
  if (numFloors) summaryTags.push(`${numFloors} Floor${numFloors !== '1' ? 's' : ''}`);
  if (gutterStyle) summaryTags.push(cap(gutterStyle));
  if (gutterColor) summaryTags.push(cap(gutterColor));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={handleClose} />

      <div className="relative bg-white rounded-3xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden" style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] flex-shrink-0">
          <h2 className="text-lg font-semibold text-white tracking-tight">Book a Service</h2>
          <button onClick={handleClose} className="p-1.5 rounded-full hover:bg-white/15 transition-colors">
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="px-7 py-8 overflow-y-auto flex-1">
          {/* ── ZIP ── */}
          {page === 'zip' && (
            <div className="text-center space-y-7">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center ring-1 ring-primary/10">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Where are you located?</h3>
                <p className="text-sm text-gray-600 mt-2">We'll check if we service your area</p>
              </div>
              <input
                type="text" inputMode="numeric" maxLength={5} value={zip}
                onChange={(e) => { setZip(e.target.value.replace(/\D/g, '').slice(0, 5)); setZipError(''); }}
                onKeyDown={(e) => e.key === 'Enter' && handleZipContinue()}
                placeholder="Enter zip code"
                className="w-full px-5 py-4 text-center text-xl font-medium text-gray-900 bg-gray-50/80 border border-gray-200 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all placeholder:text-gray-500 placeholder:font-normal"
                autoFocus
              />
              {zipError && <p className="text-sm text-red-500 font-medium">{zipError}</p>}
              <Button onClick={handleZipContinue} className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-4 rounded-2xl text-base h-14 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25">
                Continue
              </Button>
              <a href={`tel:${companyConfig.phoneRaw}`} className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> Or call us directly
              </a>
            </div>
          )}

          {/* ── QUESTIONS (single scrollable page) ── */}
          {page === 'questions' && (
            <div className="space-y-7">
              {/* Location bar */}
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-3.5 border border-gray-100">
                <div className="flex items-center gap-2.5 text-sm">
                  <MapPin className="w-4 h-4 text-primary/70" />
                  <span className="font-semibold text-gray-800 tracking-tight">{city ? `${city}, CA ${zip}` : `CALIFORNIA, ${zip}`}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <button onClick={() => setPage('zip')} className="text-sm font-medium text-primary/70 hover:text-primary transition-colors">Change</button>
              </div>

              <hr className="border-gray-100" />

              {/* Q1: Service type */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">What do you need help with?</h3>
                <div className="grid grid-cols-4 gap-2">
                  {services.map((svc) => {
                    const selected = service === svc.key;
                    return (
                      <button key={svc.key} onClick={() => {
                        setService(svc.key);
                        // Reset downstream when changing service
                        setRoofSlope(''); setRoofMaterial(''); setWantedRoof('');
                        setReplaceGutters(''); setRottedDeck(''); setNumFloors('');
                        setGutterStyle(''); setGutterColor('');
                      }}
                        className={`relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all ${
                          selected ? 'border-amber-300 bg-amber-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                        }`}>
                        {selected && <CheckCircle2 className="w-5 h-5 text-amber-500 absolute -top-2 -right-2 bg-white rounded-full shadow-sm" />}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selected ? 'bg-gradient-to-br from-amber-200 to-amber-100' : 'bg-gray-100'}`}>
                          <svc.icon className={`w-6 h-6 ${selected ? 'text-primary' : 'text-gray-400'}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-900 text-center leading-tight">{svc.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Q2: Roof slope — for roof_replacement AND repair_leak */}
              {(service === 'roof_replacement' || service === 'repair_leak') && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">What's your roof slope?</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {slopes.map((s) => {
                      const selected = roofSlope === s.key;
                      return (
                        <button key={s.key} onClick={() => {
                          setRoofSlope(s.key);
                          setRoofMaterial(''); setWantedRoof('');
                          setReplaceGutters(''); setRottedDeck(''); setNumFloors('');
                          setGutterStyle(''); setGutterColor('');
                        }}
                          className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {selected && <CheckCircle2 className="w-4 h-4 text-amber-500 absolute -top-1.5 -right-1.5 bg-white rounded-full shadow-sm" />}
                          <SlopeIcon slope={s.key} active={selected} />
                          <span className="text-sm font-medium text-gray-900">{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Q3: Current roof material — for roof_replacement AND repair_leak */}
              {(service === 'roof_replacement' || service === 'repair_leak') && roofSlope && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">What material do you currently have?</h3>
                  <div className={`grid gap-3 ${(MATERIALS_BY_SLOPE[roofSlope]?.length || 0) <= 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {(MATERIALS_BY_SLOPE[roofSlope] || []).map((mat) => {
                      const selected = roofMaterial === mat.key;
                      const img = MATERIAL_IMAGES[mat.key];
                      return (
                        <button key={mat.key} onClick={() => {
                          setRoofMaterial(mat.key);
                          setWantedRoof(''); setReplaceGutters(''); setRottedDeck(''); setNumFloors('');
                        }}
                          className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {selected && <CheckCircle2 className="w-5 h-5 text-amber-500 absolute -top-2 -right-2 bg-white rounded-full shadow-sm" />}
                          {img ? (
                            <img src={img} alt={mat.label} className="w-12 h-12 rounded-xl object-cover" />
                          ) : (
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selected ? 'bg-gradient-to-br from-amber-200 to-amber-100' : 'bg-gray-100'}`}>
                              <Home className={`w-6 h-6 ${selected ? 'text-primary' : 'text-gray-400'}`} />
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-900 text-center leading-tight">{mat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Q4: Wanted roof type — same options as current material */}
              {service === 'roof_replacement' && roofSlope && roofMaterial && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">What type of roof do you want?</h3>
                  <div className={`grid gap-3 ${(MATERIALS_BY_SLOPE[roofSlope]?.length || 0) <= 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {(MATERIALS_BY_SLOPE[roofSlope] || []).map((mat) => {
                      const selected = wantedRoof === mat.key;
                      const img = MATERIAL_IMAGES[mat.key];
                      return (
                        <button key={mat.key} onClick={() => {
                          setWantedRoof(mat.key);
                          setReplaceGutters(''); setRottedDeck(''); setNumFloors('');
                        }}
                          className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {selected && <CheckCircle2 className="w-5 h-5 text-amber-500 absolute -top-2 -right-2 bg-white rounded-full shadow-sm" />}
                          {img ? (
                            <img src={img} alt={mat.label} className="w-12 h-12 rounded-xl object-cover" />
                          ) : (
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selected ? 'bg-gradient-to-br from-amber-200 to-amber-100' : 'bg-gray-100'}`}>
                              <Home className={`w-6 h-6 ${selected ? 'text-primary' : 'text-gray-400'}`} />
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-900 text-center leading-tight">{mat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Q5: Gutters & downspouts */}
              {service === 'roof_replacement' && roofSlope && roofMaterial && wantedRoof && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">Do you also want gutters and downspouts to be replaced?</h3>
                  <div className="flex flex-wrap gap-2">
                    {([['yes', 'Yes'], ['no', 'No'], ['idk', "I don't know"]] as const).map(([val, label]) => {
                      const selected = replaceGutters === val;
                      return (
                        <button key={val} onClick={() => { setReplaceGutters(val); setRottedDeck(''); setNumFloors(''); }}
                          className={`rounded-2xl border-2 px-5 py-3 text-sm font-medium transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 text-gray-900 shadow-sm' : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Q6: Rotted roof deck */}
              {service === 'roof_replacement' && roofSlope && roofMaterial && wantedRoof && replaceGutters && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">Have you noticed any rotted roof deck?</h3>
                  <div className="flex flex-wrap gap-2">
                    {([['yes', 'Yes'], ['no', 'No'], ['idk', "I don't know"]] as const).map(([val, label]) => {
                      const selected = rottedDeck === val;
                      return (
                        <button key={val} onClick={() => { setRottedDeck(val); setNumFloors(''); }}
                          className={`rounded-2xl border-2 px-5 py-3 text-sm font-medium transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 text-gray-900 shadow-sm' : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Q7: Number of floors */}
              {service === 'roof_replacement' && roofSlope && roofMaterial && wantedRoof && replaceGutters && rottedDeck && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">How many floors does your house have?</h3>
                  <div className="flex flex-wrap gap-2">
                    {([['1', '1 Floor'], ['2', '2 Floors'], ['3', '3 Floors']] as const).map(([val, label]) => {
                      const selected = numFloors === val;
                      return (
                        <button key={val} onClick={() => setNumFloors(val)}
                          className={`rounded-2xl border-2 px-5 py-3 text-sm font-medium transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 text-gray-900 shadow-sm' : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── GUTTERS & DOWNSPOUTS FLOW ── */}

              {/* Gutter Q1: Style */}
              {service === 'gutters' && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">What style of gutters do you want?</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {GUTTER_STYLES.map((style) => {
                      const selected = gutterStyle === style.key;
                      return (
                        <button key={style.key} onClick={() => { setGutterStyle(style.key); setGutterColor(''); setNumFloors(''); }}
                          className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {selected && <CheckCircle2 className="w-5 h-5 text-amber-500 absolute -top-2 -right-2 bg-white rounded-full shadow-sm" />}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selected ? 'bg-gradient-to-br from-amber-200 to-amber-100' : 'bg-gray-100'}`}>
                            <Droplets className={`w-6 h-6 ${selected ? 'text-primary' : 'text-gray-400'}`} />
                          </div>
                          <span className="text-sm font-medium text-gray-900 text-center leading-tight">{style.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Gutter Q2: Color */}
              {service === 'gutters' && gutterStyle && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">What color do you prefer?</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {GUTTER_COLORS.map((color) => {
                      const selected = gutterColor === color.key;
                      return (
                        <button key={color.key} onClick={() => { setGutterColor(color.key); setNumFloors(''); }}
                          className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {selected && <CheckCircle2 className="w-4 h-4 text-amber-500 absolute -top-1.5 -right-1.5 bg-white rounded-full shadow-sm" />}
                          {color.hex ? (
                            <div className="w-10 h-10 rounded-full border-2 border-gray-200" style={{ backgroundColor: color.hex }} />
                          ) : (
                            <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <span className="text-gray-400 text-xs font-medium">?</span>
                            </div>
                          )}
                          <span className="text-xs font-medium text-gray-900 text-center leading-tight">{color.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Gutter Q3: Number of floors (1 or 2) */}
              {service === 'gutters' && gutterStyle && gutterColor && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">How many floors does your house have?</h3>
                  <div className="flex flex-wrap gap-2">
                    {([['1', '1 Floor'], ['2', '2 Floors']] as const).map(([val, label]) => {
                      const selected = numFloors === val;
                      return (
                        <button key={val} onClick={() => setNumFloors(val)}
                          className={`rounded-2xl border-2 px-5 py-3 text-sm font-medium transition-all ${
                            selected ? 'border-amber-300 bg-amber-50/60 text-gray-900 shadow-sm' : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
                          }`}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Summary card — shown when all questions answered */}
              {allQuestionsComplete && (
                <>
                  <hr className="border-gray-100" />
                  <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Summary</span>
                      <button onClick={() => {
                        // Reset to let them re-pick
                        if (service === 'roof_replacement' || service === 'repair_leak') {
                          setRoofSlope(''); setRoofMaterial(''); setWantedRoof('');
                          setReplaceGutters(''); setRottedDeck(''); setNumFloors('');
                        } else if (service === 'gutters') {
                          setGutterStyle(''); setGutterColor(''); setNumFloors('');
                        } else {
                          setService('');
                        }
                      }} className="text-gray-400 hover:text-gray-600">
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-gray-900">
                      {services.find(s => s.key === service)?.label || service}
                    </p>
                    {summaryTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {summaryTags.map((tag, i) => (
                          <span key={i} className="inline-block border border-gray-200 bg-white rounded-lg px-2.5 py-1 text-xs font-medium text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{city ? `${city}, CA ${zip}` : `California, ${zip}`}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── CONTACT ── */}
          {page === 'contact' && (
            <div className="space-y-5">
              {/* Summary card at top */}
              <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Summary</span>
                  <button onClick={() => setPage('questions')} className="text-gray-400 hover:text-gray-600">
                    <Pencil className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-base font-bold text-gray-900">
                  {services.find(s => s.key === service)?.label || service}
                </p>
                {summaryTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {summaryTags.map((tag, i) => (
                      <span key={i} className="inline-block border border-gray-300 rounded-lg px-2.5 py-1 text-xs font-medium text-gray-700">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <hr className="border-gray-200" />

              <h3 className="text-lg font-bold text-gray-900 tracking-tight">How can we reach you?</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={inputClass} autoFocus />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={inputClass} />
                </div>
              </div>
              <Button onClick={handleContactNext} className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-3 rounded-2xl text-base h-12 shadow-lg shadow-primary/20">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button onClick={() => setPage('questions')} className="w-full text-center text-sm text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-3.5 h-3.5 inline mr-1" /> Back
              </button>
            </div>
          )}

          {/* ── DETAILS ── */}
          {page === 'details' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>{name}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Almost done!</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                  <GooglePlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    placeholder="123 Main St, City, CA"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us what you need</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="e.g. My roof is leaking and I need help..." className={`${inputClass} resize-none`} />
                </div>
              </div>
              <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-3 rounded-2xl text-base h-14 shadow-lg shadow-primary/20">
                {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</> : <><Send className="w-5 h-5 mr-2" /> Get My Free Quote</>}
              </Button>
              <button onClick={() => setPage('contact')} className="w-full text-center text-sm text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-3.5 h-3.5 inline mr-1" /> Back
              </button>
            </div>
          )}

          {/* ── SUCCESS ── */}
          {page === 'success' && (
            <div className="text-center space-y-5 py-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">We'll contact you shortly!</h3>
              <p className="text-sm text-gray-500">{phone ? 'Check your phone — we just sent you a text.' : 'Check your email — we just sent you a message.'}</p>
              <Button onClick={handleClose} variant="outline" className="rounded-xl">Close</Button>
            </div>
          )}
        </div>

        {/* Sticky Continue button — only on questions page when all answered */}
        {page === 'questions' && allQuestionsComplete && (
          <div className="px-7 pb-6 pt-3 border-t border-gray-100 flex-shrink-0 bg-white">
            <Button onClick={() => setPage('contact')} className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-3 rounded-2xl text-base h-14 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25">
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="flex items-center justify-center gap-4 mt-3">
              <a href={`tel:${companyConfig.phoneRaw}`} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> Call to speak to a live person
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
