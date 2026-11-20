// Illustrated scenes — drawn in SVG so they're crisp, tiny, theme-aware and licence-free.
// Colours come from CSS variables (--sc-*) defined in styles.css for light and dark.

const s = (v) => ({ style: { fill: `var(${v})` } })
const st = (v, w = 2) => ({
  fill: 'none',
  style: { stroke: `var(${v})` },
  strokeWidth: w,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

function Frame({ id, label, children }) {
  return (
    <svg className="scene" viewBox="0 0 400 300" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--sc-sky-top)' }} />
          <stop offset="1" style={{ stopColor: 'var(--sc-sky-bot)' }} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id}-sky)`} />
      {children}
    </svg>
  )
}

export function AboutScene() {
  return (
    <Frame id="about" label="Illustration: route connecting Dubai and India">
      <circle cx="320" cy="70" r="30" {...s('--sc-sun')} />
      {/* Dubai skyline (left) */}
      <g {...s('--sc-ink')}>
        <path d="M58 230V96l6-40 6 40v134z" />
        <rect x="24" y="160" width="26" height="70" rx="2" />
        <rect x="78" y="140" width="22" height="90" rx="2" />
        <rect x="104" y="175" width="20" height="55" rx="2" />
      </g>
      <g {...s('--sc-ink-2')}>
        <rect x="128" y="190" width="16" height="40" rx="2" />
        <rect x="8" y="195" width="14" height="35" rx="2" />
      </g>
      {/* India skyline (right) — dome, arches, towers */}
      <g {...s('--sc-ink')}>
        <path d="M262 230v-48h60v48z" />
        <path d="M268 182a24 24 0 0 1 48 0z" />
        <rect x="288" y="146" width="8" height="12" rx="1" />
        <rect x="330" y="150" width="24" height="80" rx="2" />
        <rect x="358" y="170" width="30" height="60" rx="2" />
      </g>
      <g {...s('--sc-ink-2')}>
        <rect x="240" y="196" width="18" height="34" rx="2" />
        <path d="M262 200h60" style={{ stroke: 'var(--sc-sky-bot)' }} strokeWidth="3" />
      </g>
      {/* route */}
      <path d="M72 120C140 40 240 40 300 140" {...st('--sc-accent', 2.5)} strokeDasharray="2 9" />
      <circle cx="70" cy="122" r="7" {...s('--sc-accent')} />
      <circle cx="300" cy="140" r="7" {...s('--sc-accent')} />
      <g transform="translate(176 58) rotate(14)">
        <path d="M-14 0h28M2 0l-8-10h5l10 10-10 10h-5z" {...st('--sc-ink', 2.5)} />
      </g>
      <g fontFamily="Space Grotesk Variable, sans-serif" fontWeight="700" fontSize="13" {...s('--sc-ink')}>
        <text x="84" y="116">DUBAI</text>
        <text x="250" y="132">INDIA</text>
      </g>
      <rect y="230" width="400" height="70" {...s('--sc-ground')} />
      <path d="M0 262c33-12 67-12 100 0s67 12 100 0 67-12 100 0 67 12 100 0" {...st('--sc-accent', 3)} />
      <path d="M0 284c33-12 67-12 100 0s67 12 100 0 67-12 100 0 67 12 100 0" {...st('--sc-ink-2', 2)} opacity=".5" />
    </Frame>
  )
}

export function ConstructionScene() {
  const floors = [0, 1, 2, 3, 4, 5]
  return (
    <Frame id="cons" label="Illustration: building under construction with a tower crane">
      <circle cx="70" cy="64" r="26" {...s('--sc-sun')} />
      {/* finished neighbour */}
      <rect x="300" y="120" width="70" height="130" rx="2" {...s('--sc-ink-2')} />
      {/* building frame */}
      <g>
        {floors.map((f) => (
          <g key={f}>
            <rect x="130" y={226 - f * 26} width="130" height="4" {...s('--sc-ink')} />
            {f < 4 &&
              [0, 1, 2, 3].map((w) => (
                <rect key={w} x={140 + w * 30} y={208 - f * 26} width="18" height="12" rx="1" {...s('--sc-glass')} />
              ))}
          </g>
        ))}
        {[130, 172, 214, 256].map((x) => (
          <rect key={x} x={x} y="96" width="4" height="154" {...s('--sc-ink')} />
        ))}
        {/* scaffold */}
        <path d="M120 250V96M120 120l10-10M120 150l10-10M120 180l10-10M120 210l10-10" {...st('--sc-accent', 2)} />
      </g>
      {/* tower crane */}
      <g {...st('--sc-ink', 2.5)}>
        <path d="M70 250V60M80 250V60M70 80l10 18-10 18 10 18-10 18 10 18-10 18 10 18-10 18" />
        <path d="M30 60h260M75 60V36M75 36L30 60M75 36l215 24" />
        <path d="M232 60v44" />
      </g>
      <rect x="30" y="60" width="22" height="14" {...s('--sc-ink')} />
      <rect x="208" y="104" width="48" height="7" rx="1" {...s('--sc-accent')} />
      {/* mixer truck */}
      <g transform="translate(266 214)">
        <rect x="0" y="12" width="76" height="16" rx="3" {...s('--sc-ink')} />
        <path d="M6 12l10-14h34l10 14z" {...s('--sc-accent')} />
        <rect x="62" y="0" width="22" height="28" rx="3" {...s('--sc-ink')} />
        <circle cx="16" cy="30" r="7" {...s('--sc-ink-2')} />
        <circle cx="66" cy="30" r="7" {...s('--sc-ink-2')} />
      </g>
      <rect y="250" width="400" height="50" {...s('--sc-ground')} />
    </Frame>
  )
}

export function RentalScene() {
  return (
    <Frame id="rent" label="Illustration: equipment yard with excavator, forklift and telehandler">
      <circle cx="330" cy="60" r="24" {...s('--sc-sun')} />
      {/* fence */}
      <path d="M0 196h400M0 178h400" {...st('--sc-ink-2', 2)} />
      {[20, 70, 120, 170, 220, 270, 320, 370].map((x) => (
        <path key={x} d={`M${x} 170v40`} {...st('--sc-ink-2', 3)} />
      ))}
      <rect y="210" width="400" height="90" {...s('--sc-ground')} />
      {/* excavator */}
      <g transform="translate(20 150)">
        <rect x="0" y="86" width="120" height="18" rx="9" {...s('--sc-ink')} />
        <rect x="14" y="52" width="70" height="34" rx="4" {...s('--sc-accent')} />
        <rect x="56" y="32" width="30" height="24" rx="3" {...s('--sc-accent')} />
        <rect x="62" y="37" width="18" height="13" rx="2" {...s('--sc-glass')} />
        <path d="M84 60l40-50 30 22-8 36" {...st('--sc-ink', 9)} />
        <path d="M140 66l-14 18h26z" {...s('--sc-ink')} />
      </g>
      {/* forklift */}
      <g transform="translate(200 186)">
        <path d="M60 0v66" {...st('--sc-ink', 5)} />
        <path d="M60 58h22" {...st('--sc-ink', 4)} />
        <rect x="64" y="34" width="26" height="22" {...s('--sc-ink-2')} />
        <rect x="0" y="30" width="58" height="28" rx="4" {...s('--sc-accent')} />
        <path d="M12 30V8h30l10 22" {...st('--sc-ink', 3.5)} />
        <circle cx="14" cy="62" r="9" {...s('--sc-ink')} />
        <circle cx="48" cy="62" r="7" {...s('--sc-ink')} />
      </g>
      {/* telehandler */}
      <g transform="translate(300 200)">
        <rect x="0" y="24" width="86" height="24" rx="5" {...s('--sc-accent')} />
        <rect x="10" y="6" width="26" height="20" rx="3" {...s('--sc-ink')} />
        <path d="M40 30L86 -20" {...st('--sc-ink', 8)} />
        <path d="M86 -20h10v12" {...st('--sc-ink', 3.5)} />
        <circle cx="18" cy="52" r="10" {...s('--sc-ink')} />
        <circle cx="70" cy="52" r="10" {...s('--sc-ink')} />
      </g>
    </Frame>
  )
}

export function TradingScene() {
  const containers = [
    ['--sc-accent', 0, 0], ['--sc-ink-2', 40, 0], ['--sc-ink', 80, 0], ['--sc-accent', 120, 0],
    ['--sc-ink', 20, -20], ['--sc-accent', 60, -20], ['--sc-ink-2', 100, -20],
  ]
  return (
    <Frame id="trade" label="Illustration: cargo ship carrying containers and equipment at a port">
      <circle cx="80" cy="70" r="26" {...s('--sc-sun')} />
      {/* quay crane */}
      <g {...st('--sc-ink', 3)}>
        <path d="M300 220V70M340 220V70M300 110h40M300 150h40M300 110l40 40M240 70h150M300 70l20-26 20 26" />
        <path d="M262 70v52" />
      </g>
      <rect x="250" y="122" width="26" height="14" {...s('--sc-accent')} />
      {/* ship */}
      <g transform="translate(40 168)">
        {containers.map(([c, x, y], i) => (
          <rect key={i} x={30 + x} y={10 + y} width="38" height="18" rx="1.5" {...s(c)} />
        ))}
        {/* excavator on deck */}
        <g transform="translate(180 -6)">
          <rect x="0" y="24" width="40" height="8" rx="4" {...s('--sc-ink')} />
          <rect x="4" y="10" width="26" height="14" rx="2" {...s('--sc-accent')} />
          <path d="M28 14l14-14 10 8-2 12" {...st('--sc-ink', 4)} />
        </g>
        <path d="M0 30h260l-24 34H22z" {...s('--sc-ink')} />
        <rect x="214" y="-6" width="34" height="36" rx="2" {...s('--sc-ink-2')} />
        <rect x="220" y="0" width="22" height="8" rx="1" {...s('--sc-glass')} />
      </g>
      <rect y="232" width="400" height="68" {...s('--sc-water')} />
      <path d="M0 246c33-10 67-10 100 0s67 10 100 0 67-10 100 0 67 10 100 0" {...st('--sc-accent', 3)} />
      <path d="M0 270c33-10 67-10 100 0s67 10 100 0 67-10 100 0 67 10 100 0" {...st('--sc-sky-top', 2)} opacity=".6" />
    </Frame>
  )
}
