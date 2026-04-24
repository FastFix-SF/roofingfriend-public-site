import { Home, TrendingUp, AlertTriangle, Loader2 } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import React, { useMemo, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useBooking } from "@/hooks/useBooking";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Metal roof adoption rate by state (0–1). Highest in storm-prone, rural & mountain states.
const stateDensity: Record<string, number> = {
  "Florida": 0.85, "Texas": 0.75, "Colorado": 0.7, "North Carolina": 0.7,
  "South Carolina": 0.68, "Tennessee": 0.65, "Georgia": 0.6, "Alabama": 0.62,
  "Mississippi": 0.6, "Louisiana": 0.65, "Arkansas": 0.6, "Oklahoma": 0.6,
  "Kansas": 0.58, "Missouri": 0.55, "Kentucky": 0.6, "West Virginia": 0.62,
  "Virginia": 0.5, "Maryland": 0.35, "Pennsylvania": 0.3, "Ohio": 0.4,
  "Indiana": 0.45, "Illinois": 0.35, "Michigan": 0.4, "Wisconsin": 0.45,
  "Minnesota": 0.5, "Iowa": 0.5, "Nebraska": 0.55, "South Dakota": 0.6,
  "North Dakota": 0.58, "Montana": 0.7, "Wyoming": 0.7, "Idaho": 0.68,
  "Utah": 0.62, "Nevada": 0.5, "Arizona": 0.55, "New Mexico": 0.6,
  "California": 0.55, "Oregon": 0.55, "Washington": 0.5, "Alaska": 0.75,
  "Hawaii": 0.4, "Maine": 0.55, "Vermont": 0.6, "New Hampshire": 0.5,
  "Massachusetts": 0.25, "Rhode Island": 0.2, "Connecticut": 0.25,
  "New York": 0.25, "New Jersey": 0.22, "Delaware": 0.3,
  "District of Columbia": 0.15,
};

// Approximate geographic centroid [lng, lat] of every US state — used for client-side reverse-geocoding.
const stateCentroids: Record<string, [number, number]> = {
  "Alabama": [-86.8, 32.8], "Alaska": [-152.4, 64.2], "Arizona": [-111.7, 34.3],
  "Arkansas": [-92.4, 34.9], "California": [-119.4, 36.8], "Colorado": [-105.5, 39.0],
  "Connecticut": [-72.7, 41.6], "Delaware": [-75.5, 39.0], "District of Columbia": [-77.0, 38.9],
  "Florida": [-81.7, 27.8], "Georgia": [-83.4, 32.9], "Hawaii": [-156.5, 20.6],
  "Idaho": [-114.5, 44.4], "Illinois": [-89.2, 40.0], "Indiana": [-86.3, 39.9],
  "Iowa": [-93.2, 42.0], "Kansas": [-98.4, 38.5], "Kentucky": [-84.9, 37.7],
  "Louisiana": [-91.9, 31.0], "Maine": [-69.4, 45.4], "Maryland": [-76.8, 39.0],
  "Massachusetts": [-71.8, 42.2], "Michigan": [-84.7, 44.3], "Minnesota": [-94.3, 46.3],
  "Mississippi": [-89.7, 32.7], "Missouri": [-92.5, 38.5], "Montana": [-110.4, 47.0],
  "Nebraska": [-99.8, 41.5], "Nevada": [-117.0, 39.3], "New Hampshire": [-71.6, 43.7],
  "New Jersey": [-74.5, 40.2], "New Mexico": [-106.1, 34.4], "New York": [-75.5, 42.9],
  "North Carolina": [-79.8, 35.6], "North Dakota": [-100.5, 47.5], "Ohio": [-82.8, 40.3],
  "Oklahoma": [-97.5, 35.6], "Oregon": [-120.5, 44.0], "Pennsylvania": [-77.7, 40.9],
  "Rhode Island": [-71.5, 41.7], "South Carolina": [-80.9, 33.8], "South Dakota": [-99.4, 44.4],
  "Tennessee": [-86.7, 35.7], "Texas": [-99.0, 31.5], "Utah": [-111.9, 39.3],
  "Vermont": [-72.7, 44.0], "Virginia": [-78.2, 37.5], "Washington": [-120.5, 47.4],
  "West Virginia": [-80.6, 38.6], "Wisconsin": [-89.6, 44.3], "Wyoming": [-107.5, 43.0],
};

// Estimated metal-roof homes per state (population × adoption rate).
const statePipeCount: Record<string, number> = {
  "California": 600000, "Texas": 1100000, "Florida": 850000, "New York": 180000,
  "Pennsylvania": 220000, "Illinois": 200000, "Ohio": 280000, "Georgia": 320000,
  "North Carolina": 480000, "Michigan": 230000, "New Jersey": 110000,
  "Virginia": 270000, "Washington": 200000, "Arizona": 240000, "Massachusetts": 95000,
  "Tennessee": 350000, "Indiana": 220000, "Missouri": 210000, "Maryland": 110000,
  "Wisconsin": 200000, "Colorado": 320000, "Minnesota": 240000, "South Carolina": 290000,
  "Alabama": 240000, "Louisiana": 230000, "Kentucky": 220000, "Oregon": 170000,
  "Oklahoma": 220000, "Connecticut": 70000, "Utah": 180000, "Iowa": 150000,
  "Nevada": 140000, "Arkansas": 160000, "Mississippi": 150000, "Kansas": 140000,
  "New Mexico": 110000, "Nebraska": 100000, "West Virginia": 100000, "Idaho": 120000,
  "Hawaii": 50000, "New Hampshire": 60000, "Maine": 65000, "Montana": 90000,
  "Rhode Island": 18000, "Delaware": 28000, "South Dakota": 50000, "North Dakota": 45000,
  "Alaska": 55000, "Vermont": 40000, "Wyoming": 40000, "District of Columbia": 10000,
};

const getDensityColor = (density: number) => {
  if (density > 0.8) return "hsl(0, 70%, 45%)";
  if (density > 0.6) return "hsl(20, 80%, 50%)";
  if (density > 0.4) return "hsl(40, 90%, 55%)";
  if (density > 0.2) return "hsl(50, 85%, 60%)";
  return "hsl(60, 70%, 70%)";
};

// Approximate bounding boxes for major metro areas [lng, lat, radius_lng, radius_lat, state_density]
// Each dot = ~10 aging pipes. We generate dots proportional to aging pipe count.
const metroRegions: { lng: number; lat: number; rLng: number; rLat: number; density: number; count: number }[] = [
  // California
  { lng: -118.3, lat: 34.0, rLng: 1.5, rLat: 0.8, density: 0.9, count: 45 },
  { lng: -122.4, lat: 37.7, rLng: 1.0, rLat: 0.6, density: 0.9, count: 35 },
  { lng: -121.5, lat: 38.6, rLng: 0.8, rLat: 0.5, density: 0.85, count: 15 },
  { lng: -117.2, lat: 32.7, rLng: 0.6, rLat: 0.4, density: 0.88, count: 12 },
  // Texas
  { lng: -95.4, lat: 29.8, rLng: 1.2, rLat: 0.8, density: 0.85, count: 35 },
  { lng: -96.8, lat: 32.8, rLng: 1.0, rLat: 0.6, density: 0.85, count: 30 },
  { lng: -98.5, lat: 29.4, rLng: 0.7, rLat: 0.5, density: 0.82, count: 18 },
  { lng: -97.7, lat: 30.3, rLng: 0.6, rLat: 0.4, density: 0.8, count: 12 },
  // New York
  { lng: -74.0, lat: 40.7, rLng: 0.8, rLat: 0.5, density: 0.95, count: 50 },
  { lng: -73.8, lat: 42.7, rLng: 0.6, rLat: 0.4, density: 0.9, count: 12 },
  { lng: -75.2, lat: 43.0, rLng: 0.5, rLat: 0.3, density: 0.88, count: 8 },
  // Florida
  { lng: -80.2, lat: 25.8, rLng: 0.8, rLat: 0.5, density: 0.8, count: 25 },
  { lng: -81.4, lat: 28.5, rLng: 0.8, rLat: 0.6, density: 0.78, count: 20 },
  { lng: -82.5, lat: 28.0, rLng: 0.6, rLat: 0.5, density: 0.75, count: 15 },
  { lng: -82.0, lat: 30.3, rLng: 0.5, rLat: 0.4, density: 0.7, count: 10 },
  // Illinois
  { lng: -87.7, lat: 41.9, rLng: 0.8, rLat: 0.5, density: 0.75, count: 30 },
  { lng: -89.6, lat: 39.8, rLng: 0.6, rLat: 0.5, density: 0.7, count: 10 },
  // Pennsylvania
  { lng: -75.2, lat: 40.0, rLng: 0.7, rLat: 0.4, density: 0.88, count: 25 },
  { lng: -80.0, lat: 40.4, rLng: 0.6, rLat: 0.4, density: 0.88, count: 20 },
  // Ohio
  { lng: -81.7, lat: 41.5, rLng: 0.7, rLat: 0.5, density: 0.82, count: 20 },
  { lng: -84.5, lat: 39.1, rLng: 0.6, rLat: 0.4, density: 0.82, count: 15 },
  { lng: -83.0, lat: 40.0, rLng: 0.5, rLat: 0.4, density: 0.78, count: 10 },
  // Michigan
  { lng: -83.0, lat: 42.3, rLng: 0.8, rLat: 0.5, density: 0.78, count: 20 },
  { lng: -85.7, lat: 43.0, rLng: 0.6, rLat: 0.4, density: 0.72, count: 10 },
  // NJ / CT / MA
  { lng: -74.2, lat: 40.7, rLng: 0.5, rLat: 0.3, density: 0.92, count: 20 },
  { lng: -72.7, lat: 41.8, rLng: 0.5, rLat: 0.3, density: 0.85, count: 12 },
  { lng: -71.1, lat: 42.4, rLng: 0.6, rLat: 0.4, density: 0.87, count: 18 },
  // Georgia
  { lng: -84.4, lat: 33.7, rLng: 0.8, rLat: 0.5, density: 0.6, count: 15 },
  // Virginia / DC / Maryland
  { lng: -77.0, lat: 38.9, rLng: 0.7, rLat: 0.4, density: 0.72, count: 18 },
  { lng: -76.6, lat: 39.3, rLng: 0.5, rLat: 0.3, density: 0.72, count: 12 },
  // North Carolina
  { lng: -80.8, lat: 35.2, rLng: 0.7, rLat: 0.4, density: 0.55, count: 12 },
  { lng: -78.6, lat: 35.8, rLng: 0.6, rLat: 0.4, density: 0.55, count: 10 },
  // Washington
  { lng: -122.3, lat: 47.6, rLng: 0.7, rLat: 0.4, density: 0.5, count: 12 },
  // Arizona
  { lng: -112.1, lat: 33.4, rLng: 0.8, rLat: 0.5, density: 0.45, count: 10 },
  // Indiana
  { lng: -86.2, lat: 39.8, rLng: 0.6, rLat: 0.4, density: 0.7, count: 12 },
  // Tennessee
  { lng: -87.0, lat: 36.2, rLng: 0.7, rLat: 0.3, density: 0.6, count: 10 },
  { lng: -83.9, lat: 35.1, rLng: 0.5, rLat: 0.3, density: 0.58, count: 8 },
  // Missouri
  { lng: -90.2, lat: 38.6, rLng: 0.6, rLat: 0.4, density: 0.65, count: 12 },
  { lng: -94.6, lat: 39.1, rLng: 0.5, rLat: 0.3, density: 0.65, count: 8 },
  // Wisconsin / Minnesota
  { lng: -88.0, lat: 43.0, rLng: 0.6, rLat: 0.5, density: 0.68, count: 10 },
  { lng: -93.3, lat: 45.0, rLng: 0.7, rLat: 0.5, density: 0.58, count: 10 },
  // Colorado
  { lng: -105.0, lat: 39.7, rLng: 0.7, rLat: 0.5, density: 0.4, count: 8 },
  // Louisiana
  { lng: -90.1, lat: 30.0, rLng: 0.6, rLat: 0.4, density: 0.7, count: 10 },
  // Alabama / Mississippi
  { lng: -86.8, lat: 33.5, rLng: 0.6, rLat: 0.4, density: 0.55, count: 8 },
  { lng: -89.6, lat: 32.3, rLng: 0.5, rLat: 0.4, density: 0.58, count: 6 },
  // Kentucky
  { lng: -85.8, lat: 38.3, rLng: 0.6, rLat: 0.3, density: 0.62, count: 8 },
  // Oregon
  { lng: -122.7, lat: 45.5, rLng: 0.6, rLat: 0.4, density: 0.48, count: 8 },
  // Oklahoma / Kansas / Iowa / Arkansas / Nebraska
  { lng: -97.5, lat: 35.5, rLng: 0.7, rLat: 0.4, density: 0.52, count: 8 },
  { lng: -97.3, lat: 37.7, rLng: 0.6, rLat: 0.4, density: 0.45, count: 6 },
  { lng: -93.6, lat: 41.6, rLng: 0.6, rLat: 0.4, density: 0.5, count: 6 },
  { lng: -92.3, lat: 34.7, rLng: 0.5, rLat: 0.3, density: 0.5, count: 5 },
  { lng: -96.7, lat: 40.8, rLng: 0.5, rLat: 0.3, density: 0.4, count: 4 },
  // Utah / Nevada / New Mexico
  { lng: -111.9, lat: 40.8, rLng: 0.5, rLat: 0.4, density: 0.35, count: 4 },
  { lng: -115.1, lat: 36.2, rLng: 0.5, rLat: 0.3, density: 0.38, count: 4 },
  { lng: -106.7, lat: 35.1, rLng: 0.5, rLat: 0.3, density: 0.42, count: 4 },
  // West Virginia / Maine / Vermont / New Hampshire
  { lng: -80.6, lat: 38.3, rLng: 0.5, rLat: 0.3, density: 0.75, count: 6 },
  { lng: -69.8, lat: 44.3, rLng: 0.5, rLat: 0.4, density: 0.65, count: 4 },
  { lng: -72.6, lat: 44.0, rLng: 0.3, rLat: 0.3, density: 0.62, count: 3 },
  { lng: -71.5, lat: 43.2, rLng: 0.3, rLat: 0.3, density: 0.6, count: 3 },
  // South Carolina / Delaware / Rhode Island
  { lng: -81.0, lat: 34.0, rLng: 0.6, rLat: 0.4, density: 0.5, count: 6 },
  { lng: -75.5, lat: 39.0, rLng: 0.2, rLat: 0.2, density: 0.8, count: 4 },
  { lng: -71.4, lat: 41.8, rLng: 0.2, rLat: 0.2, density: 0.88, count: 4 },
  // Idaho / Montana / Wyoming / Dakotas
  { lng: -116.2, lat: 43.6, rLng: 0.6, rLat: 0.5, density: 0.3, count: 3 },
  { lng: -109.5, lat: 46.9, rLng: 0.8, rLat: 0.5, density: 0.28, count: 2 },
  { lng: -107.6, lat: 43.0, rLng: 0.6, rLat: 0.4, density: 0.22, count: 2 },
  { lng: -100.3, lat: 44.4, rLng: 0.5, rLat: 0.3, density: 0.3, count: 2 },
  { lng: -100.8, lat: 46.8, rLng: 0.5, rLat: 0.3, density: 0.25, count: 2 },
];

// Seeded pseudo-random number generator for deterministic dot placement
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generateDots() {
  const dots: { lng: number; lat: number; density: number }[] = [];
  const rand = seededRandom(42);
  for (const region of metroRegions) {
    for (let i = 0; i < region.count; i++) {
      dots.push({
        lng: region.lng + (rand() - 0.5) * 2 * region.rLng,
        lat: region.lat + (rand() - 0.5) * 2 * region.rLat,
        density: region.density * (0.7 + rand() * 0.3), // slight variation
      });
    }
  }
  return dots;
}

const legendItems = [
  { color: "hsl(0, 70%, 45%)", label: "60%+" },
  { color: "hsl(20, 80%, 50%)", label: "45–60%" },
  { color: "hsl(40, 90%, 55%)", label: "30–45%" },
  { color: "hsl(50, 85%, 60%)", label: "15–30%" },
  { color: "hsl(60, 70%, 70%)", label: "Under 15%" },
];

const ChargingSection = () => {
  const { openBooking } = useBooking();
  const isMobile = useIsMobile();
  const dots = useMemo(() => generateDots(), []);
  const [tooltip, setTooltip] = useState<{ name: string; density: number; pipes: number; x: number; y: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationResult, setLocationResult] = useState<{ adoptionPct: number; momentum: string; region: string } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleFindMe = useCallback(() => {
    setLocating(true);
    setLocationResult(null);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      setLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Find nearest metro region to estimate pipe age
        let minDist = Infinity;
        let nearestRegion = metroRegions[0];
        for (const region of metroRegions) {
          const dist = Math.sqrt((region.lat - latitude) ** 2 + (region.lng - longitude) ** 2);
          if (dist < minDist) {
            minDist = dist;
            nearestRegion = region;
          }
        }
        const variance = Math.round((seededRandom(Math.round(latitude * 1000))() - 0.5) * 10);

        // Resolve actual US state from user's lat/lng using nearest state centroid.
        let region = "your area";
        let minStateDist = Infinity;
        for (const [state, [lng, lat]] of Object.entries(stateCentroids)) {
          const d = Math.sqrt((lat - latitude) ** 2 + (lng - longitude) ** 2);
          if (d < minStateDist) {
            minStateDist = d;
            region = state;
          }
        }

        // Drive adoption % from the resolved state's own density.
        const stateDens = stateDensity[region] ?? 0.3;
        const basePct = Math.round(20 + stateDens * 65);
        const adoptionPct = Math.max(5, Math.min(95, basePct + variance));
        const momentum = adoptionPct > 50
          ? "Hot market — lock in your quote before prices rise"
          : adoptionPct > 25
          ? "Smart timing — early adopters get the best installer slots"
          : "First-mover advantage — stand out and add resale value";

        // nearestRegion retained for future use (variance seeding context).
        void nearestRegion;

        setLocationResult({ adoptionPct, momentum, region });
        setLocating(false);
      },
      (error) => {
        setLocationError(
          error.code === 1
            ? "Location access was denied. Please allow location access and try again."
            : "Unable to determine your location. Please try again."
        );
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  }, []);

  return (
    <section className="bg-background flex flex-col overflow-hidden" style={{ height: "100vh", maxHeight: "100vh" }}>
      {/* Map */}
      <div
        className="relative flex-1 min-h-[200px] bg-[hsl(210,20%,95%)] overflow-hidden"
        onMouseLeave={() => setTooltip(null)}
      >
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: isMobile ? 500 : 1000 }}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                const density = stateDensity[name] ?? 0.3;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getDensityColor(density)}
                    stroke="hsl(0,0%,100%)"
                    strokeWidth={0.5}
                    onMouseEnter={(e) => {
                      const rect = (e.target as SVGElement).closest("svg")?.getBoundingClientRect();
                      if (rect) {
                        setTooltip({
                          name,
                          density,
                          pipes: statePipeCount[name] ?? 0,
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                        });
                      }
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      default: { outline: "none", cursor: "pointer" },
                      hover: { outline: "none", opacity: 0.85 },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {dots.map((dot, i) => (
            <Marker key={i} coordinates={[dot.lng, dot.lat]}>
              <circle r={1.8} fill={getDensityColor(dot.density)} opacity={0.75} stroke="hsl(0,0%,100%)" strokeWidth={0.3} />
            </Marker>
          ))}
        </ComposableMap>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute pointer-events-none z-20 bg-background border border-border rounded-lg shadow-lg px-3 py-2 text-xs"
            style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
          >
            <p className="font-semibold text-foreground">{tooltip.name}</p>
            <p className="text-muted-foreground">
              {Math.round(tooltip.density * 100)}% of homes already upgraded to metal
            </p>
            <p className="text-muted-foreground">
              ~{tooltip.pipes.toLocaleString()} neighbors made the switch
            </p>
          </div>
        )}

        {/* Legend */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-2 py-1.5 md:px-3 md:py-2 z-10">
          <p className="text-[10px] font-semibold text-foreground mb-1.5">% of homes with metal roofs</p>
          <p className="text-[9px] text-muted-foreground mb-1">Each dot = 10,000 homes that already switched</p>
          <div className="flex flex-col gap-1">
            {legendItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleFindMe}
          disabled={locating}
          className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border text-sm font-medium text-foreground shadow-sm hover:bg-accent transition-colors disabled:opacity-60"
        >
          {locating ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4m10-10h-4M6 12H2"/></svg>
          )}
          {locating ? "Locating…" : "Find Me"}
        </button>

        {/* Location Result Popup */}
        {(locationResult || locationError) && (
          <div className="absolute bottom-16 left-4 z-20 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4 max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => { setLocationResult(null); setLocationError(null); }}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs"
            >
              ✕
            </button>
            {locationError ? (
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{locationError}</p>
              </div>
            ) : locationResult && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">Your area: {locationResult.region}</p>
                <p className="text-2xl font-semibold text-foreground">{locationResult.adoptionPct}%</p>
                <p className="text-xs text-muted-foreground mt-0.5">of your neighbors already switched to metal</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    locationResult.adoptionPct > 50 ? "bg-[hsl(120,50%,45%)]" : locationResult.adoptionPct > 25 ? "bg-[hsl(40,90%,55%)]" : "bg-cta-gold"
                  }`} />
                  <span className="text-xs font-medium text-foreground">{locationResult.momentum}</span>
                </div>
                <button onClick={openBooking} className="mt-3 inline-block px-4 py-1.5 rounded text-xs font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity">
                  Claim My Free Quote →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info bar */}
      <div className="px-4 md:px-12 lg:px-20 py-6 md:py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-cta-gold/10 text-cta-gold border border-cta-gold/30 rounded-full px-3 py-1 text-xs font-semibold mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            🔥 Steel prices rising 8% in Q2 — lock today's quote
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">Your shingle roof is costing you $2,400 a year. Metal pays for itself.</h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-lg">
            8.4 million homeowners already switched. They cut cooling bills 25%, skip a $15,000 reroof every 15 years, and sleep through hurricanes that shred shingles. Quote prices lock for 30 days — yours is free.
          </p>
          <div className="flex gap-3 mt-4">
            <button onClick={openBooking} className="px-4 md:px-6 py-2 md:py-2.5 rounded text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity">Lock My Free Quote (30 sec)</button>
            <a href="/warranty" className="px-4 md:px-6 py-2 md:py-2.5 rounded text-sm font-medium border border-foreground text-foreground hover:bg-accent transition-colors">See Lifetime Warranty →</a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:flex md:gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">50+ yrs</span>
              <Home className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">Lifespan vs. 15–20 for asphalt shingles</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">25%</span>
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-cta-gold" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">Lower cooling bills, every month</span>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">140 mph</span>
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-cta-gold" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">Wind rating — survives Cat 4 hurricanes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ChargingSection);
