import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, MapPin } from "lucide-react";
import professorImage from "@/assets/professor-headshot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Dr. [Your Name]
              </h1>
              <p className="text-xl text-academic-blue font-medium">
                Assistant Professor of Finance
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>[Your Institution]</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Finance researcher specializing in corporate finance, asset pricing, and financial markets. 
              Currently seeking tenure-track positions for the 2024-2025 academic job market.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-academic hover:bg-academic-blue-dark text-white shadow-elegant"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-academic-blue text-academic-blue hover:bg-academic-blue-light"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-6 bg-card shadow-card-academic border-0">
              <div className="relative">
                <img 
                  src={professorImage}
                  alt="Professional headshot"
                  className="w-80 h-80 object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;