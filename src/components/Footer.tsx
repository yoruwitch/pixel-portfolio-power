export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t-2 border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-body text-muted-foreground text-center sm:text-left">
            © {currentYear} Feito com ❤️ e muito ☕
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-pixel text-muted-foreground">
              Powered by React
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs font-body text-muted-foreground/70">
            Design inspirado em jogos clássicos de 8-bit
          </p>
        </div>
      </div>
    </footer>
  );
}
