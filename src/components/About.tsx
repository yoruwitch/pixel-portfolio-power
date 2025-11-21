import {
  Code2,
  Sparkles,
  Zap,
  BookOpen,
  Gamepad2,
  Zap as TechIcon,
  Heart,
} from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-pixel text-center mb-12 text-foreground">
          Quem Sou Eu
        </h2>

        <div className="space-y-8">
          {/* Main Bio Card */}
          <div className="bg-card border-2 border-border pixel-corners p-6 sm:p-8 shadow-pixel">
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-card-foreground font-body">
                Oi! 👋 Meu nome é Evelyn Fernandes, tenho 26 anos e sou natural
                de Natividade, RJ. Sou formada em Engenharia de Software pela
                Universidade Estácio de Sá com forte base técnica em
                desenvolvimento web, bancos de dados e metodologias ágeis.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-card-foreground font-body">
                Passei 4 anos como professora particular desenvolvendo
                habilidades de comunicação, didática e resolução de problemas
                complexos. Agora estou focada em minha transição para o
                desenvolvimento profissional como Junior Developer, trazendo uma
                perspectiva única de educadora e determinação para aprender
                continuamente.
              </p>
            </div>
          </div>

          {/* Professional Highlights */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border-2 border-primary/30 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
              <Code2 className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-pixel text-xs mb-2 text-foreground">
                Full Stack Developer
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                JavaScript, React, Node.js, PostgreSQL e MongoDB. Construo
                aplicações modernas e escaláveis.
              </p>
            </div>

            <div className="bg-card border-2 border-secondary/30 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
              <Sparkles className="h-10 w-10 mx-auto mb-3 text-secondary" />
              <h3 className="font-pixel text-xs mb-2 text-foreground">
                Problem Solver
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                4 anos ensinando soluções complexas de forma clara. Comunicação
                e criatividade são meus pilares.
              </p>
            </div>

            <div className="bg-card border-2 border-accent/30 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
              <Zap className="h-10 w-10 mx-auto mb-3 text-accent" />
              <h3 className="font-pixel text-xs mb-2 text-foreground">
                Tech Enthusiast
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Sempre aprendendo. GitHub Copilot e IA para aumentar
                produtividade e qualidade de código.
              </p>
            </div>
          </div>

          {/* Personal Interests Section */}
          <div className="bg-gradient-arcade p-[2px] pixel-corners">
            <div className="bg-card p-6 sm:p-8 pixel-corners">
              <h3 className="text-2xl font-pixel mb-8 text-foreground text-center">
                Meus Interesses & Hobbies
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Comics */}
                <div className="bg-card border-2 border-primary/40 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
                  <BookOpen className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h4 className="font-pixel text-sm mb-2 text-foreground">
                    Quadrinhos
                  </h4>
                  <p className="text-xs text-muted-foreground font-body">
                    Apaixonada por Batman e histórias em quadrinhos em geral
                  </p>
                </div>

                {/* Tech News */}
                <div className="bg-card border-2 border-secondary/40 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
                  <TechIcon className="h-12 w-12 mx-auto mb-3 text-secondary" />
                  <h4 className="font-pixel text-sm mb-2 text-foreground">
                    Tecnologia
                  </h4>
                  <p className="text-xs text-muted-foreground font-body">
                    Sigo atentamente as novidades e tendências do universo tech
                  </p>
                </div>

                {/* Video Games */}
                <div className="bg-card border-2 border-accent/40 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
                  <Gamepad2 className="h-12 w-12 mx-auto mb-3 text-accent" />
                  <h4 className="font-pixel text-sm mb-2 text-foreground">
                    Video Games
                  </h4>
                  <p className="text-xs text-muted-foreground font-body">
                    Gamer casual, adoro explorar mundos virtuais e se divertir
                  </p>
                </div>

                {/* Cats */}
                <div className="bg-card border-2 border-primary/40 pixel-corners p-6 text-center hover:-translate-y-1 transition-transform">
                  <Heart className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h4 className="font-pixel text-sm mb-2 text-foreground">
                    Gatos 🐱
                  </h4>
                  <p className="text-xs text-muted-foreground font-body">
                    Apaixonada por gatos! Eles são mestres da programação
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-card border-2 border-border pixel-corners p-6 sm:p-8 shadow-pixel">
            <p className="text-base sm:text-lg leading-relaxed text-card-foreground font-body text-center">
              Sou uma pessoa curiosa, sempre buscando aprender e evoluir.
              Combino minha formação técnica com a experiência de educadora para
              criar soluções que fazem diferença. Vamos criar algo incrível
              juntas! 💚
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
