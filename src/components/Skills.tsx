import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🖼️",
      skills: ["React", "Bootstrap", "JS", "CSS", "HTML", "GSAP", "Jquey", "Ajax"],
      color: "primary"
    },
    {
      title: "Backend", 
      icon: "⚙️",
      skills: ["Node.js", "Mysql", "Laravel", "PHP", "Express", "REST Api"],
      color: "accent"
    },
    {
      title: "Tools & Cloud",
      icon: "🚀",
      skills: ["Git", "Figma", "Asana", "Cpanel"],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 ocean-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-moonlight text-glow">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies I've mastered while navigating the digital landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card border-moonlight/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 wave-animation" style={{ animationDelay: `${index * 1}s` }}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-moonlight">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`glass-card border-${category.color}/30 text-${category.color} hover:bg-${category.color}/20 transition-colors duration-300`}
                    >
                      {skill}
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

export default Skills;