import { FileCheck, Search, Scale, ShieldCheck } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { IndustrialCard, IndustrialCardContent } from "@/components/ui/industrial-card";

const complianceFeatures = [
  {
    icon: FileCheck,
    title: "Reportes de auditoría técnica",
    description: "Documentación estructurada para inspecciones regulatorias. Formato compatible con ANMAT, ISO y estándares sectoriales.",
  },
  {
    icon: Search,
    title: "Reconstrucción forense de eventos",
    description: "Línea temporal completa de cada activo. Qué ocurrió, cuándo, dónde, bajo qué condiciones.",
  },
  {
    icon: Scale,
    title: "Reducción de disputas logísticas",
    description: "Evidencia objetiva para resolver conflictos entre actores de la cadena. El dato no admite interpretación.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo ante litigios",
    description: "Información técnica válida como prueba pericial. Trazabilidad que resiste escrutinio judicial.",
  },
];

const ComplianceSection = () => {
  return (
    <Section className="bg-card/30">
      <SectionHeader className="text-center max-w-3xl mx-auto">
        <SectionTitle>Compliance y evidencia legal</SectionTitle>
        <SectionDescription className="mx-auto">
          IntiWatt Secure genera la documentación técnica que el regulador exige y que 
          su departamento legal necesita. No vendemos tranquilidad: vendemos evidencia.
        </SectionDescription>
      </SectionHeader>
      
      <div className="grid md:grid-cols-2 gap-8">
        {complianceFeatures.map((feature, index) => (
          <IndustrialCard 
            key={index}
            variant="glow"
            className="group"
          >
            <IndustrialCardContent className="flex gap-5">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </IndustrialCardContent>
          </IndustrialCard>
        ))}
      </div>
      
      {/* Legal notice */}
      <div className="mt-16 p-8 rounded-sm bg-background border border-border">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg text-foreground font-medium">
            El dato manual no es evidencia.
          </p>
          <p className="text-muted-foreground">
            Los registros declarativos, planillas de control y certificados posteriores al hecho 
            no constituyen prueba técnica ante el regulador. IntiWatt Secure genera evidencia 
            desde el origen del dato, sin intervención humana, sin posibilidad de alteración.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ComplianceSection;
