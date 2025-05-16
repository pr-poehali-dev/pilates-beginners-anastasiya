import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PilatesMovements from "@/components/PilatesMovements";
import TrainerSection from "@/components/TrainerSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <BenefitsSection />
        <Separator className="my-16 max-w-5xl mx-auto" />
        <PilatesMovements />
        <Separator className="my-16 max-w-5xl mx-auto" />
        <TrainerSection />
        <Separator className="my-16 max-w-5xl mx-auto" />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
