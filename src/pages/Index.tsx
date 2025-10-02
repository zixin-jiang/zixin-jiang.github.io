import Navigation from "@/components/Navigation";
import SimpleHero from "@/components/SimpleHero";
import SimpleResearch from "@/components/SimpleResearch";
import SimpleTeaching from "@/components/SimpleTeaching";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="home" className="pt-12">
        <SimpleHero />
      </div>
      <div id="research">
        <SimpleResearch />
      </div>
      <div id="teaching">
        <SimpleTeaching />
      </div>
    </div>
  );
};

export default Index;