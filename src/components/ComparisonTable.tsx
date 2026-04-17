import { Check, X } from "lucide-react";
import { comparisonData } from "@/lib/trenchless-data";

const ComparisonTable = () => (
  <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Trenchless vs. Traditional Plumbing</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-4 pr-4 text-sm font-semibold text-foreground w-1/3"></th>
              <th className="py-4 px-4 text-sm font-semibold text-destructive w-1/3">Traditional (Dig & Replace)</th>
              <th className="py-4 pl-4 text-sm font-semibold text-cta-blue w-1/3">Trenchless (West Peak)</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-4 pr-4 text-sm font-medium text-foreground">{row.feature}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <X size={16} className="text-destructive shrink-0 mt-0.5" />
                    {row.traditional}
                  </span>
                </td>
                <td className="py-4 pl-4 text-sm text-foreground">
                  <span className="flex items-start gap-2">
                    <Check size={16} className="text-cta-blue shrink-0 mt-0.5" />
                    {row.trenchless}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
