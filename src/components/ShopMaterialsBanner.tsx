import { ArrowRight } from "lucide-react";

interface Props {
  onOpen: () => void;
}

const ShopMaterialsBanner = ({ onOpen }: Props) => (
  <button
    type="button"
    onClick={onOpen}
    className="fixed top-0 left-0 right-0 z-[60] w-full bg-cta-gold text-primary-foreground hover:opacity-95 transition-opacity h-9 flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-wider shadow-sm"
    aria-label="Shop Metal Materials — request a Cut and Drop quote"
  >
    <span>Shop Metal Materials</span>
    <ArrowRight className="w-4 h-4" />
  </button>
);

export default ShopMaterialsBanner;
