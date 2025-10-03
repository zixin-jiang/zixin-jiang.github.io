import { Button } from "@/components/ui/button";
import { Mail, GraduationCap } from "lucide-react";
import professorImage from "@/assets/professor-headshot-2.jpg";

const SimpleHero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light text-foreground leading-tight">
                Zixin Jiang（江紫新）
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Welcome to my webpage! 
                  </p>
                <p>
                  I am a Ph.D. candidate in Finance at the <a href="https://belkcollege.charlotte.edu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">Belk College of Business</a>, <a href="https://www.charlotte.edu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">University of North Carolina at Charlotte (UNC Charlotte)</a>.
                </p>
                <p>
                  My research interests are <strong>corporate finance</strong>, <strong>real estate </strong>, and <strong> banking </strong>.  
                  I am currently on the academic job market and seeking a faculty position beginning in Fall 2026.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-foreground" />
                <h2 className="text-2xl font-light text-foreground">Education</h2>
              </div>
              <div className="space-y-3 text-muted-foreground pl-9">
                <div>
                  <p className="font-medium text-foreground">Ph.D. in Finance</p>
                  <p>University of North Carolina at Charlotte</p>
                  <p className="text-sm">Expected 2026</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 pt-4">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                asChild
              >
                <a href="mailto:zjiang5@charlotte.edu">
                  <Mail className="w-4 h-4 mr-2" />
                  Email: zjiang5@charlotte.edu
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-3 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                asChild
              >
                <a href="/CV_Zixin_Jiang_10012025.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
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