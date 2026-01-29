import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemaRegulatorioSection from "@/components/sections/ProblemaRegulatorioSection";
import SolucionSection from "@/components/sections/SolucionSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import IndustriasSection from "@/components/sections/IndustriasSection";
import ModeloOperativoSection from "@/components/sections/ModeloOperativoSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div id="problema">
          <ProblemaRegulatorioSection />
        </div>
        
        <div id="solucion">
          <SolucionSection />
        </div>
        
        <div id="compliance">
          <ComplianceSection />
        </div>
        
        <div id="industrias">
          <IndustriasSection />
        </div>
        
        <ModeloOperativoSection />
        
        <div id="contacto">
          <CTASection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
