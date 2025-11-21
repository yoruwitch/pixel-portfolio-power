import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    tagline: "Loja online completa com checkout e painel admin",
    description: "Plataforma de e-commerce fullstack com autenticação, carrinho de compras, processamento de pagamentos e painel administrativo.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    aiAssisted: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    name: "Task Manager AI",
    tagline: "Gerenciador de tarefas com sugestões inteligentes",
    description: "Aplicação de gerenciamento de tarefas com IA que sugere prioridades e otimiza seu fluxo de trabalho.",
    tech: ["Next.js", "OpenAI", "MongoDB", "Tailwind"],
    aiAssisted: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    name: "Portfolio Generator",
    tagline: "Gerador de portfólios personalizáveis",
    description: "Ferramenta que permite criar portfólios profissionais com temas customizáveis e deploy automático.",
    tech: ["React", "TypeScript", "Vercel", "shadcn/ui"],
    aiAssisted: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-pixel text-center mb-4 text-foreground">
          Projetos em Destaque
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
          Seleção dos meus melhores trabalhos que demonstram habilidades técnicas e criatividade
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card border-2 border-border pixel-corners shadow-pixel hover:shadow-glow hover:-translate-y-2 transition-all duration-300 group slide-in-pixel"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-pixel text-sm text-foreground leading-relaxed flex-1">
                    {project.name}
                  </h3>
                  {project.aiAssisted && (
                    <Badge
                      variant="secondary"
                      className="pixel-corners text-[10px] font-pixel flex items-center gap-1 shrink-0"
                    >
                      <Sparkles className="h-3 w-3" />
                      AI
                    </Badge>
                  )}
                </div>

                <p className="text-xs font-pixel text-primary">
                  {project.tagline}
                </p>

                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-body pixel-corners"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="border-t-2 border-border p-4 bg-muted/20 flex gap-2">
                <Button
                  size="sm"
                  variant="default"
                  className="flex-1 btn-arcade pixel-corners text-xs font-pixel bg-primary hover:bg-primary-glow"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 btn-arcade pixel-corners text-xs font-pixel"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
