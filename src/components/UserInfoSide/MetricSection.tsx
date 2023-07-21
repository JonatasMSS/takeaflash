import { Metrics } from "../MetricSection/Metrics";

export function MetricSection() {
  return (
    <div className="flex w-full flex-col p-2">
      <span className="w-full border-b-2 border-zinc-700 text-2xl font-bold">
        Suas métricas
      </span>

      <Metrics />
    </div>
  );
}
