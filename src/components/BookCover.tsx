import { Category } from '@/lib/products'

const themes: Record<Category, {
  cover: string
  spine: string
  frame: string
  title: string
  subtitle: string
  accent: string
}> = {
  'children': {
    cover: '#FBF0E4',
    spine: '#D4894A',
    frame: 'rgba(212,137,74,0.25)',
    title: '#2C1A0E',
    subtitle: '#8B5A2B',
    accent: '#D4894A',
  },
  'christian': {
    cover: '#F4ECD8',
    spine: '#8B5A2B',
    frame: 'rgba(139,90,43,0.2)',
    title: '#2C1A0E',
    subtitle: '#8B5A2B',
    accent: '#8B5A2B',
  },
  'law-of-attraction': {
    cover: '#2C1A0E',
    spine: '#D4894A',
    frame: 'rgba(212,137,74,0.3)',
    title: '#FDF8F2',
    subtitle: '#E8B07A',
    accent: '#D4894A',
  },
  'diaries': {
    cover: '#F7EBE8',
    spine: '#A85B46',
    frame: 'rgba(168,91,70,0.2)',
    title: '#2C1A0E',
    subtitle: '#A85B46',
    accent: '#A85B46',
  },
}

const Motif = ({ category, color, size }: { category: Category; color: string; size: number }) => {
  const s = size

  if (category === 'children') return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <polygon points="20,4 24,15 36,15 26,23 30,35 20,27 10,35 14,23 4,15 16,15" fill={color} opacity="0.9" />
    </svg>
  )

  if (category === 'christian') return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="17" y="4" width="6" height="32" rx="1" fill={color} opacity="0.8" />
      <rect x="6" y="14" width="28" height="6" rx="1" fill={color} opacity="0.8" />
    </svg>
  )

  if (category === 'law-of-attraction') return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <polygon points="20,2 24,14 37,14 27,22 31,35 20,27 9,35 13,22 3,14 16,14" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" fill={color} opacity="0.8" />
    </svg>
  )

  // diaries
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="8" width="24" height="28" rx="2" fill="none" stroke={color} strokeWidth="1.5" />
      <rect x="6" y="8" width="4" height="28" rx="2" fill={color} opacity="0.4" />
      <line x1="13" y1="17" x2="26" y2="17" stroke={color} strokeWidth="1.2" />
      <line x1="13" y1="22" x2="26" y2="22" stroke={color} strokeWidth="1.2" />
      <line x1="13" y1="27" x2="22" y2="27" stroke={color} strokeWidth="1.2" />
    </svg>
  )
}

interface BookCoverProps {
  title: string
  subtitle: string
  category: Category
  /** 'sm' for product cards, 'lg' for the detail page */
  size?: 'sm' | 'lg'
}

export default function BookCover({ title, subtitle, category, size = 'sm' }: BookCoverProps) {
  const t = themes[category]
  const isLg = size === 'lg'
  const motifSize = isLg ? 64 : 44

  return (
    <div
      className="w-full h-full flex"
      style={{ background: t.cover, fontFamily: 'inherit' }}
    >
      {/* Spine */}
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{
          width: isLg ? 28 : 18,
          background: t.spine,
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
      >
        <span
          className="font-display tracking-widest uppercase select-none"
          style={{
            color: '#FDF8F2',
            fontSize: isLg ? 9 : 7,
            letterSpacing: '0.15em',
            transform: 'rotate(180deg)',
            padding: '8px 0',
            opacity: 0.85,
            overflow: 'hidden',
            maxHeight: '100%',
          }}
        >
          {title}
        </span>
      </div>

      {/* Cover face */}
      <div
        className="flex-1 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ padding: isLg ? '28px 24px' : '16px 14px' }}
      >
        {/* Decorative inner frame */}
        <div
          className="absolute inset-3 pointer-events-none"
          style={{ border: `1px solid ${t.frame}` }}
        />

        {/* Corner ornaments */}
        {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map(pos => (
          <div
            key={pos}
            className="absolute w-3 h-3 pointer-events-none"
            style={{
              top: pos.startsWith('top') ? 6 : undefined,
              bottom: pos.startsWith('bottom') ? 6 : undefined,
              left: pos.endsWith('left') ? 6 : undefined,
              right: pos.endsWith('right') ? 6 : undefined,
              borderTop: pos.startsWith('top') ? `2px solid ${t.accent}` : undefined,
              borderBottom: pos.startsWith('bottom') ? `2px solid ${t.accent}` : undefined,
              borderLeft: pos.endsWith('left') ? `2px solid ${t.accent}` : undefined,
              borderRight: pos.endsWith('right') ? `2px solid ${t.accent}` : undefined,
              opacity: 0.5,
            }}
          />
        ))}

        {/* Motif */}
        <div className={`mb-${isLg ? '5' : '3'} opacity-90`}>
          <Motif category={category} color={t.accent} size={motifSize} />
        </div>

        {/* Title */}
        <div
          className="font-display text-center leading-tight"
          style={{
            color: t.title,
            fontSize: isLg ? 22 : 13,
            fontWeight: 700,
            marginBottom: isLg ? 8 : 4,
          }}
        >
          {title}
        </div>

        {/* Thin rule */}
        <div style={{ width: 24, height: 1, background: t.accent, opacity: 0.5, marginBottom: isLg ? 8 : 4 }} />

        {/* Subtitle */}
        <div
          className="font-body text-center"
          style={{
            color: t.subtitle,
            fontSize: isLg ? 11 : 9,
            letterSpacing: '0.05em',
            opacity: 0.8,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  )
}
