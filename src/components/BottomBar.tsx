import { useState } from "react";
import { Search, Wrench } from "lucide-react";
import SearchDialog from "./SearchDialog";
import { useBooking } from "@/hooks/useBooking";

const BottomBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-3 max-w-lg mx-auto">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-2.5 rounded font-medium border border-border text-foreground hover:bg-accent transition-colors text-[10px] md:text-xs"
          >
            <Search size={14} strokeWidth={1.5} />
            Find Something
          </button>
          <button
            onClick={openBooking}
            className="flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-2.5 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all text-[10px] md:text-xs whitespace-nowrap"
          >
            <Wrench size={14} strokeWidth={1.5} />
            Schedule an Inspection Today
          </button>
        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default BottomBar;
