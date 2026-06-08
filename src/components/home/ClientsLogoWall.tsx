import { clients } from "@/data/clients";

export function ClientsLogoWall() {
  return (
    <section id="clientes" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Principais clientes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Empresas que escolheram a Brascin para sustentar sua TI.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex h-16 items-center justify-center grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
              title={c.name}
            >
              {c.logoUrl ? (
                <img
                  src={c.logoUrl}
                  alt={c.name}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground">{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
