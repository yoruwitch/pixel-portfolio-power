import { Code2, Sparkles, Zap } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-pixel text-center mb-12 text-foreground">
          Sobre Mim
        </h2>

        <div className="space-y-8">
          {/* Main Story */}
          <div className="bg-card border-2 border-border pixel-corners p-6 sm:p-8 shadow-pixel">
            <p className="text-base sm:text-lg leading-relaxed text-card-foreground font-body">
              Olá! Sou uma desenvolvedora fullstack apaixonada por criar soluções que fazem diferença.
              Com uma base sólida em JavaScript e ferramentas modernas como React e Node.js,
              transformo problemas complexos em aplicações elegantes e funcionais.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border-2 border-primary/30 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
              <Code2 className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-pixel text-xs mb-2 text-foreground">Clean Code</h3>
              <p className="text-sm text-muted-foreground font-body">
                Código limpo e manutenível
              </p>
            </div>

            <div className="bg-card border-2 border-secondary/30 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
              <Sparkles className="h-10 w-10 mx-auto mb-3 text-secondary" />
              <h3 className="font-pixel text-xs mb-2 text-foreground">AI-Enhanced</h3>
              <p className="text-sm text-muted-foreground font-body">
                Produtividade com IA
              </p>
            </div>

            <div className="bg-card border-2 border-accent/30 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
              <Zap className="h-10 w-10 mx-auto mb-3 text-accent" />
              <h3 className="font-pixel text-xs mb-2 text-foreground">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground font-body">
                Entregas rápidas e eficazes
              </p>
            </div>
          </div>

          {/* Additional Context */}
          <div className="bg-card border-2 border-border pixel-corners p-6 sm:p-8 shadow-pixel">
            <p className="text-base sm:text-lg leading-relaxed text-card-foreground font-body">
              Minha jornada na tecnologia é impulsionada pela curiosidade e pelo desejo de aprender constantemente.
              Utilizo ferramentas de IA como ChatGPT e GitHub Copilot para acelerar o desenvolvimento,
              permitindo que eu foque no que realmente importa: resolver problemas e criar valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
