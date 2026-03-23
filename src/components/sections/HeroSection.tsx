import { Shield, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeIndustrial } from "@/components/ui/badge-industrial";
import smartLabel from "@/assets/smart-label.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <BadgeIndustrial variant="primary" className="mb-4">
                <Shield className="w-3 h-3 mr-1.5" />
                Infraestructura de Evidencia Operativa
              </BadgeIndustrial>
              
              <h1 className="h1 text-secondary-foreground">
                Si no puede demostrar qué ocurrió,{" "}
                <span className="text-primary">usted es responsable.</span>
              </h1>
              
              <p className="text-xl text-secondary-foreground/70 leading-relaxed max-w-xl">
                IntiWatt Secure es la infraestructura que convierte datos operativos 
                en evidencia técnica válida. Monitoreo activo, registro continuo, 
                trazabilidad inalterada.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="industrial" size="xl">
                Solicitar auditoría de cumplimiento
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Warning notice */}
            <div className="flex items-start gap-3 p-4 rounded-sm bg-destructive/10 border border-destructive/30">
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-secondary-foreground/80">
                <span className="text-destructive font-medium">Disposición ANMAT 3752/25:</span>{" "}
                La normativa exige trazabilidad activa. El incumplimiento no requiere mala fe: 
                solo falta de evidencia.
              </p>
            </div>
          </div>
          
          {/* Right - Device image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/15 rounded-full transform scale-75" />
              
              <div className="relative pulse-glow rounded-lg p-2">
                <img 
                  src={smartLabel}
                  alt="Dispositivo de monitoreo industrial IntiWatt Secure"
                  className="w-full max-w-md lg:max-w-lg rounded shadow-lg"
                />
              </div>
              
              {/* Status indicators */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-secondary/90 backdrop-blur-sm border border-secondary-foreground/10 rounded-sm px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-compliance-green animate-pulse" />
                  <span className="text-xs font-mono text-secondary-foreground/70">ACTIVO</span>
                </div>
                <div className="w-px h-4 bg-secondary-foreground/20" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-secondary-foreground/70">REGISTRO CONTINUO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
