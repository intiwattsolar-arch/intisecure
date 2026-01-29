import { XCircle, AlertTriangle, FileWarning, ShieldX } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { IndustrialCard, IndustrialCardContent } from "@/components/ui/industrial-card";

const problems = [
  {
    icon: XCircle,
    title: "La trazabilidad pasiva no cumple",
    description: "El GPS en camión no demuestra qué ocurrió dentro del envío. La ubicación no es evidencia de integridad.",
  },
  {
    icon: FileWarning,
    title: "El dato manual es manipulable",
    description: "Registros en papel, planillas Excel, declaraciones del operador. Todo puede alterarse después del hecho.",
  },
  {
    icon: AlertTriangle,
    title: "La cadena de frío 'declarada' no es evidencia",
    description: "Un certificado de temperatura sin registro continuo no resiste una auditoría técnica ni un litigio.",
  },
  {
    icon: ShieldX,
    title: "El riesgo legal no se transfiere",
    description: "Contratos y seguros no eliminan la responsabilidad ante el regulador. El incumplimiento es personal.",
  },
];

const ProblemaRegulatorioSection = () => {
  return (
    <Section className="bg-gradient-to-b from-background to-card/50">
      <SectionHeader>
        <SectionTitle>El problema regulatorio</SectionTitle>
        <SectionDescription>
          La normativa exige trazabilidad activa. El incumplimiento no requiere mala fe: 
          solo falta de evidencia. El sistema regulatorio no admite suposiciones.
        </SectionDescription>
      </SectionHeader>
      
      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((problem, index) => (
          <IndustrialCard 
            key={index} 
            variant="outlined" 
            className="group hover:border-destructive/50 transition-colors"
          >
            <IndustrialCardContent className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-sm bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </IndustrialCardContent>
          </IndustrialCard>
        ))}
      </div>
      
      {/* ANMAT callout */}
      <div className="mt-12 p-6 rounded-sm bg-card border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-1 h-full min-h-[80px] bg-primary rounded-full" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary uppercase tracking-wide">
              Caso ejemplar: ANMAT / Sector Salud
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El sector salud expone de forma extrema un problema común a todas las industrias reguladas: 
              la imposibilidad de demostrar qué ocurrió. La Disposición ANMAT 3752/25 obliga a monitorización 
              activa y reporte al Sistema Nacional de Trazabilidad. El 90% de los laboratorios usa sistemas 
              que el usuario puede manipular.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemaRegulatorioSection;
