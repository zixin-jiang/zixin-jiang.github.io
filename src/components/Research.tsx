import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, BarChart } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Corporate Finance",
      description: "Capital structure decisions, dividend policy, and corporate governance in emerging markets.",
      keywords: ["Capital Structure", "Governance", "Emerging Markets"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Asset Pricing",
      description: "Risk factors in equity returns, volatility modeling, and cross-sectional asset pricing anomalies.",
      keywords: ["Risk Factors", "Volatility", "Anomalies"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Behavioral Finance",
      description: "Investor sentiment, market microstructure, and the role of institutional investors.",
      keywords: ["Investor Sentiment", "Microstructure", "Institutions"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Research Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My research focuses on understanding financial markets, corporate decision-making, 
            and investor behavior through rigorous empirical analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="shadow-card-academic border-0 hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-academic-blue-light rounded-lg text-academic-blue">
                    {area.icon}
                  </div>
                  <CardTitle className="font-serif text-xl text-foreground">
                    {area.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map((keyword, keyIndex) => (
                    <Badge 
                      key={keyIndex} 
                      variant="secondary"
                      className="bg-academic-blue-light text-academic-blue-dark border-0"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;