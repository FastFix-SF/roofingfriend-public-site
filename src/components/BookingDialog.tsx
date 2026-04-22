import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Loader2, ExternalLink } from "lucide-react";
import { BOOKING_URL, BOOKING_EVENT } from "@/lib/booking";

const LOAD_TIMEOUT_MS = 6000;

const BookingDialog = () => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const handler = () => {
      setLoaded(false);
      setBlocked(false);
      setOpen(true);
    };
    window.addEventListener(BOOKING_EVENT, handler);
    return () => window.removeEventListener(BOOKING_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open || loaded) return;
    const t = setTimeout(() => {
      if (!loaded) setBlocked(true);
    }, LOAD_TIMEOUT_MS);
    return () => clearTimeout(t);
  }, [open, loaded]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl w-[95vw] h-[85vh] p-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">Book an Inspection</DialogTitle>
        <DialogDescription className="sr-only">
          Schedule your free roof inspection with The Roofing Friend.
        </DialogDescription>

        <div className="relative flex-1 bg-background">
          {!loaded && !blocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background z-10">
              <Loader2 className="w-8 h-8 animate-spin text-cta-gold" />
              <p className="text-sm text-muted-foreground">Loading booking form…</p>
            </div>
          )}

          {blocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background z-20 px-6 text-center">
              <p className="text-base font-medium text-foreground">
                The booking form is taking longer than expected to load.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm"
              >
                Open Booking in New Tab <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {open && (
            <iframe
              src={BOOKING_URL}
              title="Book an Inspection"
              className="w-full h-full border-0"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
