import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground tracking-tight">IntiWatt</span>
              <span className="text-[10px] font-medium text-primary uppercase tracking-widest">Secure</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problema
            </a>
            <a href="#solucion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solución
            </a>
            <a href="#compliance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Compliance
            </a>
            <a href="#industrias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Industrias
            </a>
          </nav>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="#contacto" 
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-wide"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
