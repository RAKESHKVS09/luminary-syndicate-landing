import { assetUrl } from './asset-url.js'
import { useEffect, useId, useRef } from 'react'

// Photo placement is conceptual. No photograph identifies a member,
// the person's nationality or an active chapter in the indicated region.
const people = [
  { id: 'one', x: 240, y: 270, region: 'North America', challenge: 'Food access', image: assetUrl('images/portraits/person-01.jpg'), connection: 'M240 270 C365 190 470 272 620 360' },
  { id: 'two', x: 350, y: 555, region: 'Latin America', challenge: 'Restoring nature', image: assetUrl('images/portraits/community-planting.jpg'), connection: 'M350 555 C440 548 468 434 620 360' },
  { id: 'three', x: 625, y: 170, region: 'Europe', challenge: 'Climate resilience', image: assetUrl('images/portraits/person-03.jpg'), connection: 'M625 170 C552 232 565 303 620 360' },
  { id: 'four', x: 570, y: 570, region: 'Africa', challenge: 'Safe water', image: assetUrl('images/portraits/community-water.jpg'), connection: 'M570 570 C652 507 683 425 620 360' },
  { id: 'five', x: 940, y: 265, region: 'Asia Pacific', challenge: 'Ocean health', image: assetUrl('images/portraits/community-cleanup.jpg'), connection: 'M940 265 C816 208 745 307 620 360' },
  { id: 'six', x: 850, y: 475, region: 'South Asia', challenge: 'Learning access', image: assetUrl('images/people-study.jpg'), connection: 'M850 475 C800 403 730 394 620 360' },
]

export default function WorldArtwork({ compact = false }) {
  const artworkRef = useRef(null)
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const tintId = `world-tint-${instanceId}`
  const glowId = `world-glow-${instanceId}`
  const innerGlowId = `world-inner-glow-${instanceId}`
  const rayId = `world-ray-${instanceId}`
  const verticalRayId = `world-vertical-ray-${instanceId}`
  const shadowId = `world-shadow-${instanceId}`
  const titleId = `world-title-${instanceId}`
  const descriptionId = `world-description-${instanceId}`

  useEffect(() => {
    const artwork = artworkRef.current
    if (!artwork) return undefined

    let inView = !('IntersectionObserver' in window)
    const updateMotion = () => {
      const active = inView && document.visibilityState !== 'hidden'
      artwork.classList.toggle('world-is-active', active)
      if (active) artwork.classList.add('world-has-arrived')
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting
        updateMotion()
      }, { threshold: 0.08 })
      : null

    observer?.observe(artwork)
    document.addEventListener('visibilitychange', updateMotion)
    updateMotion()

    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', updateMotion)
      artwork.classList.remove('world-is-active')
    }
  }, [])

  return (
    <div ref={artworkRef} className={`world-artwork${compact ? ' world-artwork-compact' : ''}`}>
      <svg
        className="world-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 760"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <title id={titleId}>People connected by a shared light</title>
        <desc id={descriptionId}>Real photographs of people, planting, water access, litter collection and shared learning connect across a conceptual world map to a glowing central light. Example community challenges are food access in North America, restoring nature in Latin America, climate resilience in Europe, safe water in Africa, ocean health in Asia Pacific and learning access in South Asia. The photographs are illustrative and do not identify Luminary members, the nationality of any person, chapters or actual projects.</desc>
        <defs>
          <filter id={tintId} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            {/* Grey source land becomes pale gold; the black map rim becomes transparent. */}
            <feColorMatrix type="matrix" values="0 0 0 0 0.8392 0 0 0 0 0.7647 0 0 0 0 0.5412 0.425 0.425 0.425 0 0" />
          </filter>
          <filter id={shadowId} x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#243650" floodOpacity="0.09" />
          </filter>
          <radialGradient id={glowId}>
            <stop offset="0" stopColor="#E1BD70" stopOpacity="0.85" />
            <stop offset="0.22" stopColor="#E1BD70" stopOpacity="0.42" />
            <stop offset="0.62" stopColor="#E1BD70" stopOpacity="0.12" />
            <stop offset="1" stopColor="#E1BD70" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={innerGlowId}>
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.15" stopColor="#FFFEF6" />
            <stop offset="0.34" stopColor="#F6DA94" stopOpacity="0.8" />
            <stop offset="1" stopColor="#E0BE75" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={rayId} gradientUnits="userSpaceOnUse" x1="-54" y1="0" x2="54" y2="0">
            <stop offset="0" stopColor="#D7B56A" stopOpacity="0" />
            <stop offset="0.35" stopColor="#EAD5A2" stopOpacity="0.48" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="0.65" stopColor="#EAD5A2" stopOpacity="0.48" />
            <stop offset="1" stopColor="#D7B56A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={verticalRayId} gradientUnits="userSpaceOnUse" x1="0" y1="-66" x2="0" y2="66">
            <stop offset="0" stopColor="#D7B56A" stopOpacity="0" />
            <stop offset="0.37" stopColor="#EAD5A2" stopOpacity="0.42" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="0.63" stopColor="#EAD5A2" stopOpacity="0.42" />
            <stop offset="1" stopColor="#D7B56A" stopOpacity="0" />
          </linearGradient>
          {people.map(person => (
            <clipPath id={`world-portrait-${person.id}-${instanceId}`} key={person.id}>
              <circle r="69" />
            </clipPath>
          ))}
        </defs>

        <rect className="world-background" width="1200" height="760" fill="#F8F4E9" />
        <g className="world-atmosphere" fill="none" stroke="#D6C38A" opacity="0.18">
          <ellipse cx="600" cy="372" rx="535" ry="277" strokeWidth="1" />
          <ellipse cx="600" cy="372" rx="574" ry="312" strokeWidth="0.8" />
        </g>
        <image className="world-silhouette" href={assetUrl('images/world.svg')} x="40" y="105" width="1120" height="567" preserveAspectRatio="xMidYMid meet" filter={`url(#${tintId})`} opacity="0.43" aria-hidden="true" />

        <g className="world-connections" fill="none" stroke="#BFA366" strokeWidth="1.7" strokeLinecap="round" opacity="0.72">
          {people.map((person, index) => (
            <path key={person.id} className="world-connection" d={person.connection} pathLength="1" style={{ '--world-delay': `${index * 110}ms` }} onAnimationEnd={index === people.length - 1 ? event => {
              if (event.animationName === 'world-draw') artworkRef.current?.classList.add('world-connections-complete')
            } : undefined} />
          ))}
        </g>

        {/* Short round dashes behave as light particles on the exact connection
            curves, without SMIL or a separate motion library. */}
        <g className="world-particles" fill="none" strokeLinecap="round" aria-hidden="true">
          {people.map((person, index) => (
            <g key={person.id} style={{ '--world-flow-duration': `${7.2 + index * 0.65}s`, '--world-flow-delay': `${-index * 1.25}s` }}>
              <path className="world-particle world-particle-halo" d={person.connection} pathLength="1" stroke="#D4B574" strokeWidth="8" />
              <path className="world-particle world-particle-core" d={person.connection} pathLength="1" stroke="#FFFEF7" strokeWidth="3.8" />
            </g>
          ))}
        </g>

        <g className="world-people" aria-hidden="true">
          {people.map(person => (
            <g key={person.id} className="world-person" transform={`translate(${person.x} ${person.y})`}>
              <g className="world-medallion">
                <circle r="80" fill="#D6C38A" opacity="0.11" />
                <circle r="74" fill="#FFFFFF" filter={`url(#${shadowId})`} />
                <image className="world-portrait-image" href={person.image} x="-69" y="-69" width="138" height="138" preserveAspectRatio="xMidYMid slice" clipPath={`url(#world-portrait-${person.id}-${instanceId})`} />
                <circle r="74" fill="none" stroke="#CEB986" strokeWidth="1.5" />
                <circle r="69" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
              </g>
            </g>
          ))}
        </g>

        {/* An optical glow and fine diffraction rays replace a solid emblem.
            The brilliant core stays steady while its surrounding light breathes. */}
        <g className="world-star" transform="translate(620 360)" aria-hidden="true">
          <circle className="world-star-glow" r="115" fill={`url(#${glowId})`} />
          <circle className="world-star-inner-glow" r="33" fill={`url(#${innerGlowId})`} />
          <g className="world-star-rays" fill="none" strokeLinecap="round">
            <path d="M-54 0 H54" stroke={`url(#${rayId})`} strokeWidth="1.15" />
            <path d="M0 -66 V66" stroke={`url(#${verticalRayId})`} strokeWidth="1.05" />
            <path d="M-26 -26 L26 26 M-26 26 L26 -26" stroke="#F6E8C4" strokeWidth="0.75" opacity="0.7" />
          </g>
          <circle className="world-star-core-aura" r="8" fill="#FFFDF0" opacity="0.7" />
          <circle className="world-star-core" r="4.2" fill="#FFFFFF" />
          <circle r="1.7" fill="#FFFFFF" />
        </g>

        {/* These examples describe community challenges, not the identities or
            nationality of the people photographed. Compact views use HTML text. */}
        <g className="world-svg-labels" textAnchor="middle" aria-hidden="true">
          {people.map(person => (
            <g key={person.id}>
              <text className="world-svg-region" x={person.x} y={person.y + 95}>{person.region}</text>
              <text className="world-svg-problem" x={person.x} y={person.y + 123}>{person.challenge}</text>
            </g>
          ))}
        </g>
      </svg>
      <ul className="world-challenges" aria-label="Example community challenges">
        {people.map(person => (
          <li className="world-challenge" key={person.id}>
            <span className="world-challenge-region">{person.region}</span>
            <span className="world-challenge-problem">{person.challenge}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
