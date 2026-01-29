import { ArrowRight, Lock, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const CTASection = () => {
  return (
    <Section className="bg-card border-t border-border">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - CTA */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="h2 text-foreground">
              El cumplimiento normativo no admite suposiciones.
            </h2>
            <p className="text-lg text-muted-foreground">
              Solicite una evaluación técnica de su operación. Identificamos vulnerabilidades 
              de trazabilidad y proponemos arquitectura de evidencia.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
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
        
        {/* Right - Contact info */}
        <div className="lg:pl-12 lg:border-l border-border">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Información de contacto
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Córdoba, Argentina</span>
              </div>
              
              <a 
                href="mailto:info@intiwatt.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  info@intiwatt.com
                </span>
              </a>
              
              <a 
                href="https://wa.me/5493518670464"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  +54 9 3518 67-0464
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
