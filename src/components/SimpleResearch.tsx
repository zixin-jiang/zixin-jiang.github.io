const SimpleResearch = () => {
  const workingPapers = [
    {
      title: "Political Affiliation and the Pricing of Climate Risk in Mortgage Lending"
      coauthors: ["solo-authored"],
      status: "Major Revision at Journal of Corporate Finance.",
      link: "#"
    },
    {
      title: "Volatility Spillovers in International Equity Markets",
      coauthors: ["Alice Johnson"],
      status: "Under Review at Review of Financial Studies.",
      link: "#"
    },
    {
      title: "The Role of Institutional Investors in Price Discovery",
      coauthors: [],
      status: "Under Review at Journal of Financial Economics.",
      link: "#"
    }
  ];


  return (
    <section className="py-20 px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Research Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-foreground mb-16 text-center">
            Research
          </h2>
          
          {/* Working Papers */}
          <div className="mb-16">
            <h3 className="text-2xl font-light text-foreground mb-8">
              Working Papers
            </h3>
            <div className="space-y-8">
              {workingPapers.map((paper, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex flex-wrap items-start gap-2">
                    <a 
                      href={paper.link}
                      className="text-lg text-foreground hover:underline decoration-1 underline-offset-2"
                    >
                      {paper.title}
                    </a>
                    {paper.coauthors.length > 0 && (
                      <span className="text-lg text-foreground">
                        , with {paper.coauthors.join(", ")}.
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground italic">
                    {paper.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SimpleResearch;