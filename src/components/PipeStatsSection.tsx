import { Clock, AlertTriangle, Droplets, Skull } from "lucide-react";
import { pipeStats } from "@/lib/pipes-data";

const iconMap = {
  clock: Clock,
  alert: AlertTriangle,
  droplet: Droplets,
  skull: Skull,
};

const PipeStatsSection = () => (
  <section className="py-16 md:py-24 px-6 lg:px-12 bg-foreground text-background">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        The Numbers Are Disgusting
      </h2>
      <p className="text-center text-background/70 max-w-2xl mx-auto mb-12 text-base">
        America's plumbing infrastructure is crumbling. That brown tint in your water isn't minerals — it's rust from pipes installed before your parents were born.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pipeStats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={i}
              className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-6 text-center flex flex-col items-center gap-3"
            >
              <Icon className="w-8 h-8 text-cta-gold" />
              <div>
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                {stat.unit && <p className="text-sm text-background/60 uppercase tracking-wide">{stat.unit}</p>}
              </div>
              <p className="text-sm text-background/70 leading-relaxed">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PipeStatsSection;
