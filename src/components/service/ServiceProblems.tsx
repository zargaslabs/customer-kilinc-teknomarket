import type { Service } from "@/lib/data/services"

export function ServiceProblems({ service }: { service: Service }) {
  if (!service.problems || service.problems.length === 0) return null

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Sık Karşılaşılan Sorunlar
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {service.problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-heading text-base font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
