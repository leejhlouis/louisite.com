import { ImageResponse } from 'next/og'

export const alt = 'Louis Gustavo — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#f5f2ed',
          color: '#211b2b',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px 80px',
          width: '100%'
        }}
      >
        <div style={{ color: '#6d28d9', display: 'flex', fontSize: 28, fontWeight: 700 }}>
          LOUISITE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, letterSpacing: '-3px' }}>
            Louis Gustavo
          </div>
          <div style={{ color: '#5f5868', display: 'flex', fontSize: 38, marginTop: 18 }}>
            Software Engineer · Web interfaces &amp; backend systems
          </div>
        </div>
        <div
          style={{
            borderTop: '2px solid #d9d2df',
            color: '#5f5868',
            display: 'flex',
            fontSize: 24,
            justifyContent: 'space-between',
            paddingTop: 24
          }}
        >
          <span>Spring Boot · Next.js · Vue.js · React</span>
          <span>louisite.com</span>
        </div>
      </div>
    ),
    size
  )
}
