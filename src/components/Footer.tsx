const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-moonlight text-glow">
            Sahil.shah
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
           Building Products That Provides Value.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[{title: "GitHub", link: "https://github.com/Sayein"},{title: "LinkedIn", link: "https://www.linkedin.com/in/sahilshah10"}].map((social, links) => (
              <a
                key={links}
                href={social.link}
                className="text-muted-foreground hover:text-primary transition-colors duration-300" target="blank">
                {social.title}
              </a>
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Sahil.shah.</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-float"></div>
            <span>Made with passion and ❤</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;