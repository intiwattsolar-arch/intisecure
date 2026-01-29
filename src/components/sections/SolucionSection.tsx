import { Thermometer, MapPin, Activity, Lock, Wifi, Database } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { IndustrialCard, IndustrialCardContent } from "@/components/ui/industrial-card";
import { BadgeIndustrial } from "@/components/ui/badge-industrial";

const capabilities = [
  {
    icon: Thermometer,
    label: "Temperatura",
    description: "Registro continuo con precisión GDP. Rango operativo -30°C a +60°C.",
  },
  {
    icon: Activity,
    label: "Impactos",
    description: "Detección triaxial de G-Force. Identificación de eventos de riesgo.",
  },
  {
    icon: Lock,
    label: "Aperturas",
    description: "Detección de luz para identificar aperturas no autorizadas de embalaje.",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    description: "Posicionamiento continuo. Geofencing configurable por zona operativa.",
  },
  {
    icon: Wifi,
    label: "Conectividad resiliente",
    description: "Almacenamiento local ante pérdida de señal. Sincronización automática al recuperar cobertura.",
  },
  {
    icon: Database,
    label: "Evidencia inalterada",
    description: "Registro no editable. Cadena de custodia digital desde el origen del dato.",
  },
];

const SolucionSection = () => {
  return (
    <Section>
      <SectionHeader>
        <BadgeIndustrial variant="primary" className="mb-4">
          Arquitectura IntiWatt Secure
        </BadgeIndustrial>
        <SectionTitle>La solución: Infraestructura de evidencia operativa</SectionTitle>
        <SectionDescription>
          Monitoreo activo por unidad logística. Registro continuo. Sincronización automática. 
          Evidencia técnica no editable que resiste auditorías, inspecciones y litigios.
        </SectionDescription>
      </SectionHeader>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <IndustrialCard 
            key={index} 
            variant="elevated"
            className="group hover:border-primary/30 transition-all"
          >
            <IndustrialCardContent className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">{capability.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </IndustrialCardContent>
          </IndustrialCard>
        ))}
      </div>
      
      {/* Technical note */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          El sistema registra incluso cuando nadie mira. La responsabilidad no se delega.
        </p>
      </div>
    </Section>
  );
};

export default SolucionSection;
