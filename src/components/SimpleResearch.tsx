const SimpleResearch = () => {
  const workingPapers = [
    {
      title: "Political Affiliation and the Pricing of Climate Risk in Mortgages",
      coauthors: [],
      status: "AFA PhD Student Poster Session(2026); FMA (2025); Nankai Univeristy (2025); UNC Charlotte Finance Seminar (2025) ",
      link: "#"
    },
    {
      title: "Bank Mergers and Loan Officer Reallocation",
      coauthors: [],
      status: "FMA (2025); SFA (2025); AREUEA National Conference (2025); UNC Charlotte Finance Seminar (2024)",
      link: "#"
    },
    {
      title: "Labor Covenants in Loan Contracting",
      coauthors: ["Yongqiang Chu", "Hanzhong Shi", and "Liang Tan"],
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
                    {paper.coauthors?.length > 0 && (
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