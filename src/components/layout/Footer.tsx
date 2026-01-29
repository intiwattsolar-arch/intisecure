import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground tracking-tight">IntiWatt</span>
                <span className="text-[10px] font-medium text-primary uppercase tracking-widest">Secure</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Infraestructura digital de trazabilidad activa, monitoreo y evidencia operativa 
              para entornos regulados.
            </p>
          </div>
          
          {/* Solución */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Solución</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Monitoreo Activo
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Evidencia Operativa
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Reportes de Auditoría
                </a>
              </li>
            </ul>
          </div>
          
          {/* Industrias */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Industrias</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Salud & Pharma
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Minería
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Oil & Gas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Energía
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Legal</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 IntiWatt Secure. Grupo IntiWatt. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Infraestructura propietaria. Arquitectura certificada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
