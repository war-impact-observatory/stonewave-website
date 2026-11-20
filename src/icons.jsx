// Hand-drawn line icons and illustrations. All strokes use currentColor so they theme automatically.

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function LogoMark({ size = 28 }) {
  // A stone block resting on a wave — the "Stone" + "wave" in the name.
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="4" width="18" height="13" rx="2.5" fill="var(--accent)" />
      <path d="M3 23c3.2-3 6.4-3 9.6 0s6.4 3 9.6 0 4.8-2.2 6.8-1.6" {...line} strokeWidth="2.6" />
      <path d="M3 28.5c3.2-3 6.4-3 9.6 0s6.4 3 9.6 0 4.8-2.2 6.8-1.6" {...line} strokeWidth="2.6" opacity=".45" />
    </svg>
  )
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <LogoMark />
      <span className="wordmark-text">
        <span className="wordmark-name">STONEWAVE</span>
        <span className="wordmark-sub">TRADING · FZCO</span>
      </span>
    </span>
  )
}

export const ServiceIcons = {
  construction: (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      <path d="M6 42h36M10 42V20l10-6v28M20 42V10l14 8v24M26 22h3M26 28h3M26 34h3M14 26h2M14 32h2" {...line} />
    </svg>
  ),
  rental: (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      <path d="M5 36h22V26H12l-4 6H5zM27 36V22h6l5 8v6M8 36a4 4 0 1 0 8 0M20 36a4 4 0 1 0 8 0M33 36a4 4 0 1 0 8 0M27 22l9-12 6 4-4 9M42 14v6" {...line} />
    </svg>
  ),
  trading: (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      <path d="M8 16h28l-6-6M40 32H12l6 6M24 24h0" {...line} />
      <circle cx="24" cy="24" r="3" {...line} />
    </svg>
  ),
}

export const EquipmentIcons = {
  Excavators: (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path d="M6 38h22M8 34h18a3 3 0 0 1 0 6H8a3 3 0 0 1 0-6zM10 34v-8h12v8M22 28l10-14 8 6-2 8h-6M36 28l-4 6h8z" {...line} />
    </svg>
  ),
  Forklifts: (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path d="M10 36V20h10l4 8v8M10 20l2-8h6M30 8v30h12M10 36a4 4 0 1 0 8 0M20 36a3 3 0 1 0 6 0M30 30h10" {...line} />
    </svg>
  ),
  Telehandlers: (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path d="M6 34h30v-8H22l-4-6h-8l-4 8zM20 26 40 10M40 10v8h4M10 34a4 4 0 1 0 8 0M26 34a4 4 0 1 0 8 0" {...line} />
    </svg>
  ),
  Crushers: (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path d="M8 12h16l-4 10H12zM14 22v8h22l6-8M6 36h36M12 36v-6M38 36v-6M28 30l4-10h6" {...line} />
      <circle cx="17" cy="16" r="1.4" fill="currentColor" />
    </svg>
  ),
  Trucks: (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
      <path d="M4 32V16h22l8 4v12M26 20h10l6 6v6h-8M4 32h4M16 32h14M8 32a4 4 0 1 0 8 0M30 32a4 4 0 1 0 8 0" {...line} />
    </svg>
  ),
}

export const ContactIcons = {
  mail: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" {...line} />
      <path d="m4 7 8 6 8-6" {...line} />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" {...line} />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1 1 8 19z" {...line} />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" fill="currentColor" stroke="none" />
    </svg>
  ),
}

export function HeroArt() {
  // Skyline, tower crane and an excavator over a wave — drawn, not stock.
  return (
    <svg className="hero-art" viewBox="0 0 400 260" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <g fill="currentColor" opacity=".16">
        <rect x="20" y="120" width="34" height="110" rx="2" />
        <rect x="60" y="80" width="40" height="150" rx="2" />
        <rect x="106" y="140" width="28" height="90" rx="2" />
        <rect x="262" y="100" width="36" height="130" rx="2" />
        <rect x="304" y="60" width="44" height="170" rx="2" />
        <rect x="354" y="130" width="30" height="100" rx="2" />
      </g>
      <g {...line} strokeWidth="2" stroke="var(--accent)">
        {/* tower crane */}
        <path d="M190 230V40M200 230V40M190 60l10 20M200 80l-10 20M190 100l10 20M200 120l-10 20M190 140l10 20M200 160l-10 20M190 180l10 20M200 200l-10 20" />
        <path d="M150 40h150M195 40V22M195 22l-45 18M195 22l105 18M286 40v38M280 78h12v10h-12z" />
        <path d="M150 40v12h18V40" />
      </g>
      <g {...line} strokeWidth="2.2" stroke="currentColor" opacity=".9">
        {/* excavator */}
        <path d="M228 222h70a6 6 0 0 1 0 12h-70a6 6 0 0 1 0-12zM236 222v-20h32l6 10v10M268 202l28-30 20 14-6 20h-14M310 206l-10 14h18z" />
      </g>
      <path d="M0 246c33-14 67-14 100 0s67 14 100 0 67-14 100 0 67 14 100 0" {...line} strokeWidth="3" stroke="var(--accent)" />
    </svg>
  )
}
