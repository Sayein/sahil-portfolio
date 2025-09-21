import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-moonlight text-glow">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about clean code, modern design, and real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-card border-primary/30 float-animation">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I started my journey in tech with curiosity and a desire to create. Over time, I built projects ranging from simple JavaScript applications to full-fledged web apps using modern frameworks. Along the way, I explored frontend development with HTML, CSS, JavaScript, and React, and also worked with backend technologies like PHP, Laravel, and Node.js.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-accent/30 float-animation" style={{ animationDelay: '1s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every project is like building a lighthouse – it should be both
                  functional and inspiring, guiding users through their digital journey
                  with clarity and elegance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="glass-card p-8 border-moonlight/20">
              <h3 className="text-2xl font-semibold mb-6 text-primary">What I Do</h3>
              <div className="space-y-4">
                {[
                  "Frontend Development",
                  "Backend Development",
                  "API Design & Integration",
                  "Performance Optimization"
                ].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center">
              <p className="text-lg text-muted-foreground italic">
                "Code is poetry written in logic"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;