import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const CTASection = () => {
  return (
    <Section className="bg-card border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="h2 text-foreground">
            El cumplimiento normativo no admite suposiciones.
          </h2>
          <p className="text-lg text-muted-foreground">
            Solicite una evaluación técnica de su operación. Identificamos vulnerabilidades 
            de trazabilidad y proponemos arquitectura de evidencia.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="industrial" size="xl">
            Solicitar auditoría técnica
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="industrialOutline" size="xl">
            <Lock className="w-4 h-4" />
            Evaluación bajo NDA
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
          Acceso limitado a implementación piloto. Evaluación previa requerida.
        </p>
      </div>
    </Section>
  );
};

export default CTASection;
