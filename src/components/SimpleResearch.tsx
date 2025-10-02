const SimpleResearch = () => {
  const workingPapers = [
    {
      title: "Political Affiliation and the Pricing of Climate Risk in Mortgages",
      coauthors: [],
      isJobMarketPaper: true,
      status:
        "AFA PhD Student Poster Session (2026); FMA (2025); Ba Li Tai Young Finance Scholar Forum (Nankai University, 2025); UNC Charlotte Finance Seminar (2025)",
      link: "#",
    },
    {
      title: "Bank Mergers and Loan Officer Reallocation",
      coauthors: [],
      status:
        "FMA (2025); SFA (2025); AREUEA National Conference (2025); UNC Charlotte Finance Seminar (2024)",
      link: "#",
    },
  ];

  const workInProgress = [
    {
      title: "Labor Covenants in Loan Contracting",
      coauthors: ["Yongqiang Chu", "Hanzhong Shi", "Liang Tan"],
      status: "",
      link: "#",
    },
    {
      title: "Corporate Relocations and Insider Housing Transactions",
      coauthors: ["Yongqiang Chu", "Hanzhong Shi"],
      status: "",
      link: "#",
    },
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
                  <div className="flex items-start gap-1">
                    <span className="text-lg text-foreground">
                      <a
                        href={paper.link}
                        className="hover:underline decoration-1 underline-offset-2"
                      >
                        {paper.title}
                      </a>
                      {paper.coauthors?.length > 0
                        ? `, with ${paper.coauthors.join(", ")}`
                        : paper.isJobMarketPaper
                        ? " (Solo-authored; Job Market Paper)"
                        : " (Solo-authored)"}
                    </span>
                  </div>
                  <p className="text-muted-foreground italic">{paper.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work in Progress */}
          <div>
            <h3 className="text-2xl font-light text-foreground mb-8">
              Work in Progress
            </h3>
            <div className="space-y-8">
              {workInProgress.map((paper, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-1">
                    <span className="text-lg text-foreground">
                      <a
                        href={paper.link}
                        className="hover:underline decoration-1 underline-offset-2"
                      >
                        {paper.title}
                      </a>
                      {paper.coauthors?.length > 0
                        ? `, with ${paper.coauthors.join(", ")}`
                        : " (Solo-authored)"}
                    </span>
                  </div>
                  {paper.status && (
                    <p className="text-muted-foreground italic">{paper.status}</p>
                  )}
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
