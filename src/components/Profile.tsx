export function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-5">
      <div className="text-2xl font-semibold tracking-tight text-fg">{kpi}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export function Role({
  company,
  title,
  dates,
  bullets,
}: {
  company: string;
  title: string;
  dates: string;
  bullets: readonly string[];
}) {
  return (
    <div className="rounded-dvy border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div className="space-y-1">
          <div className="text-base font-semibold text-fg">{company}</div>
          <div className="text-sm text-muted">{title}</div>
        </div>
        <div className="text-sm text-muted">{dates}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted sm:text-base">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
