import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary opacity-50 pixel-pulse" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary opacity-40 pixel-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-accent opacity-30 pixel-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary opacity-40 pixel-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Pixel Avatar Placeholder */}
        <div className="inline-block mb-6 slide-in-pixel">
          <div className="w-32 h-32 mx-auto bg-gradient-arcade rounded-lg pixel-corners shadow-pixel relative">
            <div className="absolute inset-2 bg-card rounded-lg flex items-center justify-center">
              <span className="text-5xl">👾</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 slide-in-pixel" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel leading-relaxed text-foreground">
            Desenvolvedora
            <span className="block mt-2 text-primary dark:neon-glow">
              Fullstack JavaScript
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-pixel text-muted-foreground mt-4">
            Potencializada por IA 🤖
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-muted-foreground font-body leading-relaxed slide-in-pixel" style={{ animationDelay: "0.4s" }}>
          Transformo ideias em código com React, Node.js e ferramentas de IA.
          Focada em entregar valor rapidamente e resolver problemas com criatividade.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center pt-6 slide-in-pixel" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="btn-arcade pixel-corners bg-primary hover:bg-primary-glow text-primary-foreground font-pixel text-sm px-8 py-6 border-2 border-primary"
          >
            Ver Projetos
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="flex gap-3">
            <Button
              size="icon"
              variant="outline"
              className="btn-arcade pixel-corners border-2 h-12 w-12"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="btn-arcade pixel-corners border-2 h-12 w-12"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="btn-arcade pixel-corners border-2 h-12 w-12"
              asChild
            >
              <a href="mailto:seu.email@exemplo.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 slide-in-pixel" style={{ animationDelay: "0.8s" }}>
          <div className="inline-block animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
