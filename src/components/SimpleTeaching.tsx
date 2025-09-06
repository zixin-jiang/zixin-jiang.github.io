const SimpleTeaching = () => {
  const courses = [
    {
      title: "FINN 3120 Financial Management",
      level: "Undergraduate",
      institution: "UNC Charlotte",
      years: "Fall 2024"
    },
    {
      title: "FINN3120 Financial Management",
      level: "Undergraduate",
      institution: "UNC Charlotte",
      years: "Summer 2024"
    },
    {
      title: "FINN3120 Financial Management",
      level: "Undergraduate",
      institution: "UNC Charlotte",
      years: "Spring 2024"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTeaching;