import { Badge } from "@/components/ui/badge";

const coreSkills = [
  { name: "JavaScript (ES6+)", category: "core" },
  { name: "TypeScript", category: "core" },
  { name: "React", category: "core" },
  { name: "Next.js", category: "core" },
  { name: "Node.js", category: "core" },
  { name: "Express", category: "core" },
  { name: "PostgreSQL", category: "core" },
  { name: "MongoDB", category: "core" },
  { name: "Git & GitHub", category: "core" },
  { name: "Tailwind CSS", category: "core" },
];

const aiTools = [
  { name: "ChatGPT / Claude", category: "ai" },
  { name: "Google Gemini", category: "ai" },
  { name: "GitHub Copilot", category: "ai" },
  { name: "Cursor AI", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
];

export function TechStack() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-pixel text-center mb-4 text-foreground">
          Tech Stack
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
          Ferramentas e tecnologias que domino para criar soluções completas
        </p>

        <div className="space-y-12">
          {/* Core Technologies */}
          <div className="bg-card border-2 border-border pixel-corners p-6 sm:p-8 shadow-pixel">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-primary pixel-pulse" />
              <h3 className="text-xl font-pixel text-foreground">
                Core Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="px-4 py-2 text-sm font-body border-2 pixel-corners hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* AI Workflow - The Differentiator */}
          <div className="bg-card border-2 border-border pixel-corners p-6 sm:p-8 shadow-pixel">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-primary pixel-pulse" />
              <h3 className="text-xl font-pixel text-foreground">
                AI Workflow
              </h3>
              <Badge
                variant="outline"
                className="font-pixel text-[10px] pixel-corners"
              >
                Diferencial
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground font-body mb-6 max-w-3xl">
              Utilizo ferramentas de IA para acelerar o desenvolvimento,
              melhorar a qualidade do código e focar na resolução criativa de
              problemas.
            </p>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool) => (
                <Badge
                  key={tool.name}
                  variant="outline"
                  className="px-4 py-2 text-sm font-body border-2 pixel-corners hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all cursor-default"
                >
                  🤖 {tool.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
