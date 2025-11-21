import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary pixel-corners flex items-center justify-center">
            <span className="text-primary-foreground font-pixel text-xs">
              💚
            </span>
          </div>
          <span className="font-pixel text-sm text-foreground hidden sm:inline">
            Evelyn Fernandes
          </span>
        </div>

        <nav className="flex items-center gap-4">
          <a
            href="#projects"
            className="text-sm font-pixel text-muted-foreground hover:text-foreground transition-colors hidden sm:inline"
          >
            Projetos
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
