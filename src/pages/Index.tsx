import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Teaching from "@/components/Teaching";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Research />
      <Publications />
      <Teaching />
      <Contact />
    </div>
  );
};

export default Index;