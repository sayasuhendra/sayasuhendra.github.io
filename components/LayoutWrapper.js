import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (window.pageYOffset > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#090d1a] text-[#f8fafc] relative selection:bg-cyan-500 selection:text-black">
      {/* Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/628111513335?text=Halo%20DBAIK%20AI%20Training%20Center%2C%20saya%20tertarik%20untuk%20konsultasi%20dan%20mendaftar%20kelas%20AI"
        id="wa-float"
        aria-label="Chat WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Back to Top */}
      <div
        id="back-to-top"
        className={showBackToTop ? 'visible' : ''}
        onClick={scrollToTop}
        title="Go to top"
        aria-label="Scroll to top"
      >
        ↑
      </div>

      {/* Navbar */}
      <nav
        id="navbar"
        className={scrolled ? 'scrolled' : ''}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/">
          <a className="nav-logo" aria-label="DBAIK AI Training Center home">
            {/* Geometric AI Logo */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '36px', width: '36px' }}
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#nav-logo-grad)"
                strokeWidth="8"
                strokeDasharray="20 10"
              />
              <path
                d="M35 50h30M50 35v30"
                stroke="url(#nav-logo-grad)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="50" cy="50" r="10" fill="var(--cyan)" />
              <defs>
                <linearGradient
                  id="nav-logo-grad"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--cyan)" />
                  <stop offset="1" stopColor="var(--purple)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="nav-logo-text">
              <span className="nav-logo-title">DBAIK AI</span>
              <span className="nav-logo-subtitle">Training Center</span>
            </div>
          </a>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <a href="https://ai.dbaik.com/workshop" className="nav-workshop-btn">
              <span>Workshop AI</span>
              <span className="nav-workshop-badge">Bonus AI Pro 🎁</span>
            </a>
          </li>
          <li>
            <a href="https://ai.dbaik.com#program">Program</a>
          </li>
          <li>
            <a href="https://ai.dbaik.com#kenapa-kami">Kenapa Kami</a>
          </li>
          <li>
            <a href="https://ai.dbaik.com#kurikulum">Proses</a>
          </li>
          <li>
            <a href="https://ai.dbaik.com#showcase">Project Alumni</a>
          </li>
          <li>
            <Link href="/">
              <a style={{ color: 'var(--cyan)', fontWeight: 700 }}>Trainer</a>
            </Link>
          </li>
          <li>
            <a href="https://ai.dbaik.com#testimoni">Testimoni</a>
          </li>
          <li>
            <a href="https://ai.dbaik.com#sertifikasi">Sertifikasi</a>
          </li>
          <li>
            <a href="https://ai.dbaik.com/workshop/daftar" className="nav-cta">
              Daftar Workshop
            </a>
          </li>
        </ul>

        {/* Hamburger Toggle */}
        <button
          className={`nav-burger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Buka menu navigasi"
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect
              x="2"
              y="5"
              width="16"
              height="2"
              rx="1"
              fill="white"
              style={{
                transformOrigin: 'center',
                transition: 'transform 0.3s ease',
                transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <rect
              x="2"
              y="9"
              width="16"
              height="2"
              rx="1"
              fill="white"
              style={{
                transformOrigin: 'center',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? 'scale(0)' : 'none',
              }}
            />
            <rect
              x="2"
              y="13"
              width="16"
              height="2"
              rx="1"
              fill="white"
              style={{
                transformOrigin: 'center',
                transition: 'transform 0.3s ease',
                transform: mobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
              }}
            />
          </svg>
        </button>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
          <a
            href="https://ai.dbaik.com/workshop"
            className="mobile-nav-workshop-btn"
            onClick={() => setMobileOpen(false)}
          >
            🎁 Workshop AI + Google AI Pro
          </a>
          <a href="https://ai.dbaik.com#program" onClick={() => setMobileOpen(false)}>
            Program
          </a>
          <a href="https://ai.dbaik.com#kenapa-kami" onClick={() => setMobileOpen(false)}>
            Kenapa Kami
          </a>
          <a href="https://ai.dbaik.com#kurikulum" onClick={() => setMobileOpen(false)}>
            Proses Belajar
          </a>
          <a href="https://ai.dbaik.com#showcase" onClick={() => setMobileOpen(false)}>
            Project Alumni
          </a>
          <Link href="/">
            <a
              onClick={() => setMobileOpen(false)}
              style={{ color: 'var(--cyan)', fontWeight: 800 }}
            >
              Trainer & Praktisi
            </a>
          </Link>
          <a href="https://ai.dbaik.com#testimoni" onClick={() => setMobileOpen(false)}>
            Testimoni
          </a>
          <a href="https://ai.dbaik.com#sertifikasi" onClick={() => setMobileOpen(false)}>
            Sertifikasi
          </a>
          <a
            href="https://ai.dbaik.com/workshop/daftar"
            onClick={() => setMobileOpen(false)}
            style={{ color: 'var(--cyan)' }}
          >
            Daftar Workshop →
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LayoutWrapper
