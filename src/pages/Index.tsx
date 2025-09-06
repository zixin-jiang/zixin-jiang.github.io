import SimpleHero from "@/components/SimpleHero";
import SimpleResearch from "@/components/SimpleResearch";
import SimpleTeaching from "@/components/SimpleTeaching";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleHero />
      <SimpleResearch />
      <SimpleTeaching />
    </div>
  );
};

export default Index;