import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Resume Generator",
      description: "A web application that helps users create professional resumes with ease. It features multiple templates, allowing users to design resumes tailored to their needs. The platform includes user authentication and login functionality for a personalized experience.",
      image: "📄",
      technologies: ["HTML", "CSS", "JS", "PHP", "Mysql", "Bootstrap"],
      liveUrl: "https://resumegenerator.42web.io/?i=1",
      githubUrl: ""
    },
    {
      title: "Quiz App",
      description: "A simple JavaScript application that allows users to take quizzes on HTML topics. The app presents multiple-choice questions, tracks user answers, and displays the final score at the end.",
      image: "❓",
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "https://sayein.github.io/quiz-app/",
      githubUrl: "https://github.com/Sayein/quiz-app"
    },
    {
      title: "Weather App",
      description: "A JavaScript application that fetches real-time weather data from the OpenWeather API. Users can enter a city name to view current weather conditions such as temperature, humidity, and wind speed.",
      image: "🌦️",
      technologies: ["HTML", "CSS", "JS", "API"],
      liveUrl: "https://sayein.github.io/weatherapp/",
      githubUrl: "https://github.com/Sayein/weatherapp"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-moonlight text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of code, creativity, and craft.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-moonlight/20 hover:border-primary/50 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="text-6xl mb-6 text-center wave-animation group-hover:scale-110 transition-transform" style={{ animationDelay: `${index * 1}s` }}>
                  {project.image}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-moonlight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="glass-card border-accent/30 text-accent"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="flex-1 glass-card bg-primary hover:bg-primary/80 text-primary-foreground"
                    >
                      Live Demo
                    </Button>
                  </a>

                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 glass-card border-moonlight text-moonlight hover:bg-moonlight hover:text-background"
                      >
                        View Code
                      </Button>
                    </a>
                  ) : null
                  }

                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="glass-card border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6"
          >
            View All Projects
          </Button>
        </div> */}

      </div>
    </section>
  );
};

export default Projects;