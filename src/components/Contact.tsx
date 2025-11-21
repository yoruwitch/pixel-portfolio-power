import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-pixel mb-6 text-foreground">
          Vamos Conversar?
        </h2>
        <p className="text-lg text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
          Estou sempre aberta a novos desafios e oportunidades.
          Entre em contato e vamos construir algo incrível juntos!
        </p>

        {/* Main CTA */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="btn-arcade pixel-corners bg-primary hover:bg-primary-glow text-primary-foreground font-pixel text-sm px-8 py-6 border-2 border-primary"
            asChild
          >
            <a href="mailto:seu.email@exemplo.com">
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="btn-arcade pixel-corners font-pixel text-sm px-8 py-6 border-2"
            asChild
          >
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Baixar CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <Button
            size="icon"
            variant="outline"
            className="btn-arcade pixel-corners border-2 h-14 w-14 hover:bg-foreground hover:text-background"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="btn-arcade pixel-corners border-2 h-14 w-14 hover:bg-foreground hover:text-background"
            asChild
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="btn-arcade pixel-corners border-2 h-14 w-14 hover:bg-foreground hover:text-background"
            asChild
          >
            <a href="mailto:seu.email@exemplo.com" aria-label="Send Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
