import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 ocean-gradient">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-moonlight text-glow">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Open to opportunities, collaborations, and conversations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <Card className="glass-card border-primary/30 float-animation">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <div className="space-y-4">
                  <a href="http://linkedin.com/in/sahilshah10/" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-4 pb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <div>
                        <p className="text-moonlight font-medium">LinkedIn</p>
                        <p className="text-muted-foreground">Sahil Shah</p>
                      </div>
                    </div>
                  </a>

                  <a href="https://github.com/Sayein" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💻</span>
                      </div>
                      <div>
                        <p className="text-moonlight font-medium">GitHub</p>
                        <p className="text-muted-foreground">Sahil shah</p>
                      </div>
                    </div>
                  </a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/30 float-animation" style={{ animationDelay: '1s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently available for freelance projects and full-time opportunities.
                <br></br>
                Response time: Usually within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;