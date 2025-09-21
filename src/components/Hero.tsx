import { Button } from "@/components/ui/button";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-wave-foam rounded-full animate-float opacity-70"></div>
      <div className="absolute top-50 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-70"></div>
      <div className="absolute top-80 right-20 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70"></div>
      <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-wave-foam rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-wave-foam rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-moonlight text-glow">
            Hello, This Is Sahil Shah
            <span className="block text-primary">Full Stack Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Building Products That Provides Value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="glass-card bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg font-semibold"
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
              className="glass-card border-moonlight text-moonlight hover:bg-moonlight hover:text-background px-8 py-6 text-lg"
            >
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;