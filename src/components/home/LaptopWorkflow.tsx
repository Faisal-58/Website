import { BarChart3, Bot, Database, Settings } from "lucide-react";

const nodes = [
  { icon: Bot, className: "left-[8%] top-[16%]" },
  { icon: Settings, className: "right-[8%] top-[16%]" },
  { icon: Database, className: "left-[10%] bottom-[18%]" },
  { icon: BarChart3, className: "right-[10%] bottom-[18%]" },
];

export function LaptopWorkflow() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <svg
        className="pointer-events-none absolute -left-[18%] -right-[8%] -bottom-6 h-28 w-[130%]"
        viewBox="0 0 640 120"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 78 C 80 78, 120 28, 200 40 S 320 110, 400 70 S 520 10, 640 36"
          stroke="#A3FFCB"
          strokeWidth="2.5"
          className="opacity-90"
        />
        <path
          d="M0 96 C 100 96, 150 58, 240 66 S 360 120, 460 88 S 560 40, 640 58"
          stroke="#14B8A6"
          strokeWidth="1.5"
          className="opacity-70"
        />
      </svg>

      <div className="relative">
        <div className="rounded-[18px] border border-[#d5dee3]/80 bg-gradient-to-b from-[#e7eef1] to-[#b7c3c9] p-2.5 pb-0 shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-[#123834] bg-[#071516]">
            <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1d3b38]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.22),transparent_62%)]" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 200" aria-hidden>
              <path d="M70 52 L160 100" stroke="#14B8A6" strokeWidth="1.2" opacity="0.8" />
              <path d="M250 52 L160 100" stroke="#14B8A6" strokeWidth="1.2" opacity="0.8" />
              <path d="M74 150 L160 100" stroke="#14B8A6" strokeWidth="1.2" opacity="0.8" />
              <path d="M246 150 L160 100" stroke="#14B8A6" strokeWidth="1.2" opacity="0.8" />
            </svg>

            <div className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-mint/80 bg-[#062726] shadow-[0_0_32px_rgba(163,255,203,0.45)]">
              <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
                <path d="M8 36 L28 14 L36 22 L18 40 Z" fill="#A3FFCB" />
                <path d="M30 18 L52 28 L40 34 L28 26 Z" fill="#14B8A6" />
                <path d="M22 38 L34 30 L40 36 L28 46 Z" fill="#5EEAD4" />
                <circle cx="46" cy="44" r="10" fill="none" stroke="#A3FFCB" strokeWidth="2.4" />
                <path d="M46 38.5 V44 L49.5 46" stroke="#A3FFCB" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            {nodes.map(({ icon: Icon, className }) => (
              <div
                key={className}
                className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-mint/50 bg-[#082826]/90 text-mint shadow-[0_0_18px_rgba(20,184,166,0.35)] ${className}`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
            ))}
          </div>
          <div className="h-3.5 rounded-b-[10px] bg-gradient-to-b from-[#c5d0d6] to-[#8f9ca3]" />
        </div>
        <div className="mx-auto h-2 w-[42%] rounded-b-md bg-[#7d8a90]" />
        <div className="mx-auto h-1.5 w-[58%] rounded-b-lg bg-[#aeb8bd]" />
      </div>
    </div>
  );
}
