import { Radio, Activity, ShieldCheck, Wifi, FileCheck } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";

const modules = [
  {
    icon: Radio,
    title: "Captura autónoma",
    description:
      "El sistema registra condiciones reales —temperatura, impacto, apertura, posición— sin intervención humana. El dato no se declara, se genera.",
  },
  {
    icon: Activity,
    title: "Monitoreo continuo",
    description:
      "No hay fotografía puntual. Hay registro ininterrumpido: una película completa del evento, segundo a segundo, sin vacíos.",
  },
  {
    icon: ShieldCheck,
    title: "Registro protegido",
    description:
      "Cada dato se almacena con integridad garantizada. No puede ser editado, reconstruido ni alterado después del hecho.",
  },
  {
    icon: Wifi,
    title: "Sincronización inteligente",
    description:
      "Ante pérdida de conectividad, el sistema almacena localmente y sincroniza automáticamente al recuperar señal. La continuidad no se interrumpe.",
  },
  {
    icon: FileCheck,
    title: "Evidencia operativa",
    description:
      "Los datos crudos se transforman en reportes técnicos válidos para auditorías, inspecciones y litigios. Prueba, no declaración.",
  },
];

const ComoFuncionaSection = () => {
  return (
    <Section>
      <SectionHeader className="text-center max-w-3xl mx-auto">
        <SectionTitle>Cómo funciona</SectionTitle>
        <SectionDescription className="mx-auto">
          Cada evento físico se convierte en evidencia verificable. Sin intervención manual, sin zonas grises.
        </SectionDescription>
      </SectionHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, index) => (
          <div
            key={index}
            className="p-6 rounded-sm border border-border bg-muted/40 space-y-4 hover:border-primary/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
              <mod.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{mod.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {mod.description}
            </p>
          </div>
        ))}
      </div>

      {/* Cierre contundente */}
      <div className="mt-16 max-w-3xl mx-auto text-center space-y-2">
        <p className="text-foreground font-medium text-lg">
          Lo que no se mide, no se puede defender.
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          El sistema elimina zonas grises y reduce pérdidas antes de que ocurran. Sin evidencia, hay responsabilidad.
        </p>
      </div>
    </Section>
  );
};

export default ComoFuncionaSection;
