import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Corporate Governance and Firm Performance in Emerging Markets",
      journal: "Journal of Corporate Finance",
      year: "2024",
      status: "Published",
      coauthors: ["John Smith", "Jane Doe"],
      abstract: "This paper examines the relationship between corporate governance mechanisms and firm performance using a comprehensive dataset from emerging market economies.",
      keywords: ["Corporate Governance", "Emerging Markets", "Performance"]
    },
    {
      title: "Volatility Spillovers in International Equity Markets",
      journal: "Review of Financial Studies",
      year: "2024",
      status: "Revise & Resubmit",
      coauthors: ["Alice Johnson"],
      abstract: "We investigate volatility transmission mechanisms across major international equity markets during periods of financial stress.",
      keywords: ["Volatility", "International Markets", "Spillovers"]
    },
    {
      title: "The Role of Institutional Investors in Price Discovery",
      journal: "Journal of Financial Economics",
      year: "2023",
      status: "Under Review",
      coauthors: [],
      abstract: "This study analyzes how institutional investor trading contributes to market efficiency and price discovery in equity markets.",
      keywords: ["Institutional Investors", "Price Discovery", "Market Efficiency"]
    }
  ];

  const workingPapers = [
    {
      title: "ESG Investing and Stock Returns: A Cross-Country Analysis",
      year: "2024",
      abstract: "This paper investigates the relationship between ESG scores and stock returns across different regulatory environments.",
      keywords: ["ESG", "Sustainable Investing", "Cross-Country"]
    },
    {
      title: "Dividend Policy and Market Valuation in Family Firms",
      year: "2023",
      abstract: "We examine how family ownership affects dividend policy decisions and their impact on firm valuation.",
      keywords: ["Dividend Policy", "Family Firms", "Valuation"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Revise & Resubmit":
        return "bg-yellow-100 text-yellow-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 px-4 bg-academic-gray-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Published work and ongoing research projects in leading finance journals.
          </p>
        </div>

        {/* Published & Under Review */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
            Publications & Submissions
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-card-academic border-0">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg text-foreground mb-2">
                        {pub.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-medium text-academic-blue">
                          {pub.journal}
                        </span>
                        <span className="text-muted-foreground">({pub.year})</span>
                        <Badge className={getStatusColor(pub.status)}>
                          {pub.status}
                        </Badge>
                      </div>
                      {pub.coauthors.length > 0 && (
                        <p className="text-sm text-muted-foreground">
                          with {pub.coauthors.join(", ")}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DOI
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, keyIndex) => (
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

        {/* Working Papers */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
            Working Papers
          </h3>
          <div className="space-y-6">
            {workingPapers.map((paper, index) => (
              <Card key={index} className="shadow-card-academic border-0">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg text-foreground mb-2">
                        {paper.title}
                      </CardTitle>
                      <span className="text-muted-foreground">({paper.year})</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Draft
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, keyIndex) => (
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
      </div>
    </section>
  );
};

export default Publications;