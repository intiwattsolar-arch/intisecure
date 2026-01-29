import { Shield, MapPin, Mail, Globe, Phone } from "lucide-react";

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
          
          {/* Contacto */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">Córdoba, Argentina</span>
              </li>
              <li>
                <a 
                  href="mailto:info@intiwatt.com" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  info@intiwatt.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.intiwatt.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="w-4 h-4 text-primary shrink-0" />
                  www.intiwatt.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5493518670464" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +54 9 3518 67-0464
                </a>
              </li>
            </ul>
          </div>
          
          {/* Industrias */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Industrias</p>
            <ul className="space-y-2">
              <li>
                <a href="#industrias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Salud & Pharma
                </a>
              </li>
              <li>
                <a href="#industrias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Minería
                </a>
              </li>
              <li>
                <a href="#industrias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Oil & Gas
                </a>
              </li>
              <li>
                <a href="#industrias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
