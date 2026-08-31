import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-grid">
        {/* Brand Info */}
        <div className="footer-column flex flex-col gap-4">
          <a href="https://ai.dbaik.com" className="nav-logo mb-2">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '32px', width: '32px' }}
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#footer-logo-grad)"
                strokeWidth="8"
                strokeDasharray="20 10"
              />
              <path
                d="M35 50h30M50 35v30"
                stroke="url(#footer-logo-grad)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="50" cy="50" r="10" fill="var(--cyan)" />
              <defs>
                <linearGradient
                  id="footer-logo-grad"
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
              <span className="nav-logo-title text-lg">DBAIK AI</span>
              <span className="nav-logo-subtitle text-[9px]">Training Center</span>
            </div>
          </a>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            “Belajar AI Praktis untuk Kerja, Bisnis, dan Kehidupan.”
          </p>
        </div>

        {/* Workshop Program Links */}
        <div className="footer-column">
          <h4>Program Workshop</h4>
          <ul>
            <li>
              <a href="https://ai.dbaik.com/workshop" style={{ color: '#38bdf8' }}>
                ⚡ AI Productivity Workshop
              </a>
            </li>
            <li>
              <a href="https://ai.dbaik.com/workshop" style={{ color: '#fbbf24' }}>
                🚀 Dari Ide ke Aplikasi
              </a>
            </li>
            <li>
              <a href="https://ai.dbaik.com/workshop" style={{ color: '#f472b6' }}>
                🎮 AI for Kids (9–14 Thn)
              </a>
            </li>
            <li>
              <a href="https://ai.dbaik.com/workshop" style={{ color: '#818cf8' }}>
                🎓 AI for Student
              </a>
            </li>
            <li>
              <a href="https://ai.dbaik.com/workshop" style={{ color: '#34d399' }}>
                👨‍👩‍👧 AI for Parents
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="footer-column">
          <h4>Navigasi</h4>
          <ul>
            <li>
              <a href="https://ai.dbaik.com#hero">Beranda</a>
            </li>
            <li>
              <Link href="/">
                <a style={{ color: '#38bdf8', fontWeight: 600 }}>⭐ Profil Trainer</a>
              </Link>
            </li>
            <li>
              <a href="https://ai.dbaik.com/workshop">Semua Program Workshop</a>
            </li>
            <li>
              <a href="https://ai.dbaik.com/workshop/daftar">Daftar Workshop AI</a>
            </li>
            <li>
              <a href="https://ai.dbaik.com#kenapa-kami">Kenapa Kami</a>
            </li>
            <li>
              <a href="https://ai.dbaik.com#kurikulum">Proses Belajar</a>
            </li>
            <li>
              <a href="https://ai.dbaik.com#sertifikasi">Sertifikasi Alumni</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column flex flex-col gap-2">
          <h4>Hubungi Kami</h4>
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span>📍</span> Jakarta, Indonesia
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span>📧</span>{' '}
            <a
              href="mailto:sayasuhendra@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              sayasuhendra@gmail.com
            </a>
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span>💬</span>{' '}
            <a
              href="https://wa.me/628111513335?text=Halo%20DBAIK%20AI%20Training%20Center%2C%20saya%20ingin%20konsultasi%20mengenai%20kelas%20AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:underline"
            >
              +62 811-1513-335
            </a>
          </p>
          <div className="mt-4 flex gap-2.5 flex-wrap">
            <a
              href="https://www.instagram.com/suhendraig"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Trainer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-pink-400 hover:bg-pink-500/15 transition-all"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/suhendrak/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Trainer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-sky-400 hover:bg-sky-500/15 transition-all"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://x.com/kasuhendra"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter / X Trainer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-purple-400 hover:bg-purple-500/15 transition-all"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/sayasuhendra"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Trainer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyan-400 hover:bg-cyan-500/15 transition-all"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          &copy; {new Date().getFullYear()} DBaik AI Training Center. All rights reserved. Hosted at{' '}
          <a
            href="https://sayasuhendra.github.io"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            sayasuhendra.github.io
          </a>
          .
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
            Syarat & Ketentuan
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </footer>
  )
}
