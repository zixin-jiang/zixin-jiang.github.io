import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import professorImage from "@/assets/professor-headshot.jpg";

const SimpleHero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
                Zixin Jiang（江紫新）
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Welcome to my webpage! 
                  I'm a Ph.D. candidate in the Department of Finance, University of North Carolina at Charlotte (UNC Charlotte).
                </p>
                <p>
                  My research interests are <strong>corporate finance</strong> and <strong>asset pricing</strong>. 
                  Specifically, I am interested in capital structure, governance, and equity market anomalies. 
                  I use machine learning, causal inference, and structural models for my research.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email: your.email@university.edu
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                CV
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={professorImage}
                alt="Professional headshot"
                className="w-80 h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;