import { Link } from "@tanstack/react-router";
import brascinLogo from "@/assets/brascin-logo.png";
import { architectures } from "@/data/architectures";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2" aria-label="Brascin — início">
              <img src={brascinLogo} alt="Brascin" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Integradora de TI corporativa. Arquiteturas, serviços gerenciados e parceria
              estratégica com os principais fabricantes do mercado.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Soluções</h3>
            <ul className="mt-4 space-y-2">
              {architectures.map((a) => (
                <li key={a.id}>
                  <Link
                    to="/solucoes"
                    hash={a.id}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Serviços</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/servicos"
                    hash={s.id}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Brascin</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" hash="sobre" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/" hash="casos-de-sucesso" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Casos de sucesso
                </Link>
              </li>
              <li>
                <Link to="/" hash="contato" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {year} Brascin. Todos os direitos reservados.</p>
          <p>Brascin Tecnologia · CNPJ a definir</p>
        </div>
      </div>
    </footer>
  );
}
