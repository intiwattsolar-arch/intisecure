import { Pill, Pickaxe, Fuel, Zap, Truck } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { BadgeIndustrial } from "@/components/ui/badge-industrial";

const industries = [
  {
    icon: Pill,
    name: "Salud & Pharma",
    risk: "Pérdida de licencias, responsabilidad penal por cadena de frío",
    control: "Trazabilidad activa conforme Disposición ANMAT 3752/25. Reportes auditables.",
    badge: "Compliance crítico",
  },
  {
    icon: Pickaxe,
    name: "Minería",
    risk: "Pérdida de repuestos de alto valor, robos en rutas remotas, impactos",
    control: "Monitoreo de activos en tránsito. Geofencing. Detección de manipulación.",
    badge: "Activos remotos",
  },
  {
    icon: Fuel,
    name: "Oil & Gas",
    risk: "Herramientas críticas en rental, control de inventario distribuido",
    control: "Trazabilidad de herramientas. Control de ciclos. Evidencia de uso.",
    badge: "Rental tracking",
  },
  {
    icon: Zap,
    name: "Energía & Utilities",
    risk: "Equipos sensibles, cumplimiento de mantenimiento, auditorías regulatorias",
    control: "Registro de condiciones operativas. Documentación de inspecciones.",
    badge: "Infraestructura crítica",
  },
  {
    icon: Truck,
    name: "Logística de alto valor",
    risk: "Disputas entre actores, reclamos de seguro, pérdida de mercadería",
    control: "Evidencia objetiva de condiciones de transporte. Resolución de conflictos.",
    badge: "Cadena de custodia",
  },
];

const IndustriasSection = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Industrias aplicables</SectionTitle>
        <SectionDescription>
          La misma arquitectura de evidencia operativa se aplica a toda industria 
          donde el incumplimiento tiene consecuencias regulatorias, legales o financieras.
        </SectionDescription>
      </SectionHeader>
      
      <div className="space-y-4">
        {industries.map((industry, index) => (
          <div 
            key={index}
            className="overflow-hidden rounded-sm border border-border hover:border-primary/40 transition-colors"
          >
            <div className="grid lg:grid-cols-[280px_1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="p-6 flex items-center gap-4 bg-muted/40">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{industry.name}</h3>
                  <BadgeIndustrial variant="outline" className="mt-1 text-[10px]">
                    {industry.badge}
                  </BadgeIndustrial>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-xs font-medium text-destructive uppercase tracking-wide mb-2">Riesgo</p>
                <p className="text-sm text-muted-foreground">{industry.risk}</p>
              </div>
              
              <div className="p-6">
                <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">Control</p>
                <p className="text-sm text-muted-foreground">{industry.control}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default IndustriasSection;
