import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award } from "lucide-react";

const Teaching = () => {
  const courses = [
    {
      title: "Corporate Finance",
      level: "Undergraduate",
      code: "FIN 301",
      description: "Fundamental principles of corporate financial management, including capital budgeting, capital structure, and dividend policy.",
      rating: "4.8/5.0",
      enrollment: 85
    },
    {
      title: "Investment Analysis",
      level: "Graduate",
      code: "FIN 602",
      description: "Advanced portfolio theory, asset pricing models, and empirical methods in investment analysis.",
      rating: "4.9/5.0",
      enrollment: 32
    },
    {
      title: "Financial Markets & Institutions",
      level: "Undergraduate",
      code: "FIN 205",
      description: "Structure and function of financial markets, regulatory environment, and role of financial institutions.",
      rating: "4.7/5.0",
      enrollment: 120
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excellence in Teaching Award",
      year: "2023",
      description: "University-wide recognition for outstanding undergraduate instruction"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Student Mentorship",
      year: "Ongoing",
      description: "Supervising 8 undergraduate research projects and 3 PhD dissertations"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Curriculum Development",
      year: "2022-2024",
      description: "Led redesign of MBA core finance curriculum with focus on ESG integration"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Teaching & Mentorship
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Committed to excellence in financial education through innovative pedagogy 
            and personalized student mentorship.
          </p>
        </div>

        {/* Teaching Experience */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
            Courses Taught
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-card-academic border-0 hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant="secondary"
                      className="bg-academic-blue-light text-academic-blue-dark border-0"
                    >
                      {course.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{course.code}</span>
                  </div>
                  <CardTitle className="font-serif text-lg text-foreground">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-academic-blue" />
                      <span className="text-muted-foreground">{course.enrollment} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-academic-blue" />
                      <span className="font-medium text-academic-blue">{course.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Achievements */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
            Teaching Recognition
          </h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card-academic border-0">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-academic-blue-light rounded-lg text-academic-blue flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <span className="text-sm text-muted-foreground">{achievement.year}</span>
                      </div>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
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

export default Teaching;