import { Server, RotateCcw, Scale, CheckCircle } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";

const features = [
  {
    icon: Server,
    label: "Servicio gestionado",
    description: "Infraestructura bajo control IntiWatt Secure. Sin compra de activos.",
  },
  {
    icon: Scale,
    label: "Escalable",
    description: "Crece con su operación. Sin inversión inicial en hardware.",
  },
  {
    icon: RotateCcw,
    label: "Recuperable",
    description: "Dispositivos retornables. Logística inversa integrada.",
  },
  {
    icon: CheckCircle,
    label: "Audit-ready",
    description: "Documentación siempre disponible para inspecciones.",
  },
];

const ModeloOperativoSection = () => {
  return (
    <Section className="bg-gradient-to-b from-card/50 to-background">
      <SectionHeader className="text-center max-w-3xl mx-auto">
        <SectionTitle>Modelo operativo</SectionTitle>
        <SectionDescription className="mx-auto">
          Visibilidad como servicio. El cliente no compra activos, alquila control. 
          IntiWatt Secure gestiona la infraestructura completa.
        </SectionDescription>
      </SectionHeader>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-sm bg-gradient-to-br from-primary/15 to-transparent border border-primary/20 flex items-center justify-center">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">{feature.label}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Operational note */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-muted border border-border">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">
            VaaS: Visibility as a Service
          </span>
        </div>
      </div>
    </Section>
  );
};

export default ModeloOperativoSection;
