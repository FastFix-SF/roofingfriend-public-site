import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { searchItems, type SearchItem } from "@/lib/search-data";

const quickLinks = [
  { label: "Trenchless", href: "/trenchless" },
  { label: "Water Heater", href: "/water-heater" },
  { label: "Plumbing", href: "/plumbing" },
  { label: "Hydro Jetting", href: "/hydro-jetting" },
  { label: "Rebates", href: "/rebates" },
  { label: "Warranty", href: "/warranty" },
  { label: "Referral", href: "/referral" },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const filtered = searchItems(query);
    setResults(filtered);
    setSelectedIndex(-1);
  }, [query]);

  // Cmd/Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  const goTo = useCallback(
    (href: string) => {
      onOpenChange(false);
      navigate(href);
    },
    [navigate, onOpenChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0 && results[selectedIndex]) {
      goTo(results[selectedIndex].href);
    }
  };

  // Group results by category
  const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  let flatIndex = -1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] p-0 gap-0 rounded-2xl overflow-hidden border-border/50 [&>button]:hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2">
            <Search size={18} className="text-muted-foreground" />
            <span className="font-semibold text-base text-foreground">Search West Peak</span>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-1.5 hover:bg-accent transition-colors"
          >
            <X size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Search input */}
        <div className="px-5 pb-4">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services, pages, FAQs..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-secondary/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
            />
          </div>
        </div>

        {/* Content area */}
        <div className="max-h-[360px] overflow-y-auto px-5 pb-4">
          {query.trim() === "" ? (
            /* Empty state */
            <div className="flex flex-col items-center py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Search size={22} className="text-muted-foreground" />
              </div>
              <p className="font-medium text-foreground mb-1">Find anything on our site</p>
              <p className="text-sm text-muted-foreground mb-6">
                Search for services, pages, rebates, warranty info, and more
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => goTo(link.href)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-foreground hover:bg-accent transition-colors border border-border/50"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            /* No results */
            <div className="flex flex-col items-center py-8 text-center">
              <p className="font-medium text-foreground mb-1">No results found</p>
              <p className="text-sm text-muted-foreground">
                Try searching for "trenchless", "water heater", or "rebates"
              </p>
            </div>
          ) : (
            /* Results grouped by category */
            <div className="space-y-4">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    {category}
                  </p>
                  <div className="space-y-0.5">
                    {items.map((item) => {
                      flatIndex++;
                      const idx = flatIndex;
                      return (
                        <button
                          key={`${item.href}-${item.title}`}
                          onClick={() => goTo(item.href)}
                          className={`w-full text-left flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                            idx === selectedIndex
                              ? "bg-accent"
                              : "hover:bg-accent/60"
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight size={14} className="shrink-0 text-muted-foreground" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — AI placeholder */}
        <div className="border-t border-border px-5 py-3 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Sparkles size={14} />
            <span>Ask AI a question instead</span>
          </button>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded border border-border/50 font-mono">
            ⌘K
          </kbd>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
