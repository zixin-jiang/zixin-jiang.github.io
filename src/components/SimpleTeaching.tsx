interface Course {
  title: string;
  level: string;
  institution: string;
  years: string;
  evaluation: string;
  evaluationLink?: string;
}

const SimpleTeaching = () => {
  const courses: Course[] = [
    {
      title: "FINN 3120 Financial Management",
      level: "Undergraduate",
      institution: "UNC Charlotte",
      years: "Fall 2024",
      evaluation: "Evaluation: 4.45/5.00, Response: 74/90 students",
      evaluationLink: "/Evaluation_Fall_2024.pdf"
    },
    {
      title: "FINN 3120 Financial Management",
      level: "Undergraduate",
      institution: "UNC Charlotte",
      years: "Summer 2024",
      evaluation: "Evaluation: 4.32/5.00, Response: 25/28 students"
    },
    {
      title: "FINN 3120 Financial Management",
      level: "Undergraduate",
      institution: "UNC Charlotte",
      years: "Spring 2024",
      evaluation: "Evaluation: 3.57/5.00, Response: 61/77 students"
    }
  ];

  return (
    <section className="py-20 px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-20">
          <h2 className="text-4xl font-light text-foreground mb-16 text-center">
            Teaching
          </h2>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-wrap items-start gap-2">
                  <span className="text-lg text-foreground">
                    {course.title}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    ({course.level})
                  </span>
                </div>
                <p className="text-muted-foreground italic">
                  {course.institution}, {course.years}
                </p>
                {course.evaluation && (
                  <p className="text-muted-foreground">
                    {course.evaluationLink ? (
                      <a 
                        href={course.evaluationLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[hsl(var(--link))] hover:text-[hsl(var(--link-hover))] transition-colors"
                      >
                        {course.evaluation}
                      </a>
                    ) : (
                      course.evaluation
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTeaching;
