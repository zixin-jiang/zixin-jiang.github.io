import { Button } from "@/components/ui/button";
import { Mail, GraduationCap } from "lucide-react";
import professorImage from "@/assets/professor-headshot-2.jpg";

const SimpleHero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={professorImage}
                alt="Professional headshot"
                className="w-80 h-96 object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light text-foreground leading-tight">
                Zixin Jiang<span className="font-chinese-serif">（江紫新）</span>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Welcome to my webpage! 
                  </p>
                <p>
                  I am a Ph.D. candidate in Finance at the <a href="https://belkcollege.charlotte.edu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">Belk College of Business</a>, <a href="https://www.charlotte.edu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-80 transition-opacity">University of North Carolina at Charlotte (UNC Charlotte)</a>.
                </p>
                <p>
                  My research interests are <span className="font-medium text-foreground">empirical corporate finance</span>, <span className="font-medium text-foreground">real estate finance</span>, <span className="font-medium text-foreground">climate finance</span>, and <span className="font-medium text-foreground">financial intermediation</span>.
                  I am currently on the academic job market and seeking a faculty position beginning in Fall 2026.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-foreground" />
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Ph.D. in Finance, <span className="font-medium">UNC Charlotte</span> 2026 (expected), Chair: <a href="https://sites.google.com/site/yongqiangchu/" target="_blank" rel="noopener noreferrer" className="hover:underline">Dr. Yongqiang Chu</a>
                </p>
                <p>
                  M.A. in Economics, <span className="font-medium">Kent State University</span> 2021
                </p>
                <p>
                  B.A. in Economics (Financial Engineering), <span className="font-medium">Wuhan University</span> 2018
                </p>
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
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;