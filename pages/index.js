import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.image}
      />

      <div className="trainer-page">
        <div className="workshop-container">
          {/* ==========================================
              01. HERO TRAINER PROFILE
              ========================================== */}
          <section className="trainer-hero-card">
            {/* Avatar with Ambient Glow & Experience Badge */}
            <div className="trainer-avatar-wrap">
              <div className="trainer-avatar-glow" />
              <img
                src="https://ai.dbaik.com/images/trainer/suhendra.jpg"
                alt="Suhendra Katrali"
                className="trainer-avatar-img"
              />
              <div className="trainer-exp-badge">
                <span className="num">24+</span>
                <span className="lbl">Tahun Jam Terbang</span>
              </div>
            </div>

            {/* Profile Info & Bio */}
            <div className="flex-1">
              <div className="trainer-badge" style={{ padding: '10px 22px', marginBottom: '16px' }}>
                <span>⭐</span>
                <span>Lead Trainer & Founder DBaik AI</span>
              </div>

              <h1 className="trainer-bio-title uppercase italic">
                Suhendra{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300">
                  Katrali
                </span>
              </h1>

              <p
                className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed"
                style={{ marginTop: '18px', marginBottom: '18px' }}
              >
                Memulai karir di industri IT sejak tahun <strong>2000</strong>. Telah dipercaya
                merancang arsitektur sistem skala internasional di{' '}
                <span className="text-cyan-300 font-bold">
                  Amerika Serikat, Malaysia, dan Indonesia
                </span>
                .
              </p>

              <p
                className="text-sm sm:text-base text-slate-400 leading-relaxed"
                style={{ marginTop: '18px', marginBottom: '24px' }}
              >
                Kini mendedikasikan kepakaran teknisnya selama lebih dari dua dekade untuk
                membimbing siswa, mahasiswa, orang tua, pendidik, dan profesional agar mampu
                menguasai <em>Artificial Intelligence</em> (AI) praktis, etis, dan berdaya guna
                nyata.
              </p>

              {/* Quote Box */}
              <div
                className="trainer-bio-quote"
                style={{ marginTop: '24px', marginBottom: '28px' }}
              >
                <span className="text-2xl text-cyan-400 shrink-0">💡</span>
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                    Prinsip & Visi Pengajaran:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic" style={{ margin: 0 }}>
                    "Teknologi dan AI hanyalah akselerator. Kuncinya adalah bagaimana kita
                    memanfaatkan alat tersebut untuk memecahkan masalah nyata tanpa mengorbankan
                    integritas."
                  </p>
                </div>
              </div>

              {/* CTA & Social Media */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a href="https://ai.dbaik.com/workshop/daftar" className="btn-primary">
                  <span>Daftar Workshop AI Mulai Rp 100rb →</span>
                </a>

                <div className="flex items-center gap-2.5">
                  <a
                    href="https://x.com/kasuhendra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trainer-social-link"
                    title="Twitter / X"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suhendrak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trainer-social-link"
                    title="LinkedIn"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/sayasuhendra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trainer-social-link"
                    title="GitHub"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/suhendraig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trainer-social-link"
                    title="Instagram"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              02. CORE TECHNICAL COMPETENCIES
              ========================================== */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="section-label">KEAHLIAN & SPESIALISASI</span>
              <h2 className="section-title">Kompetensi Teknis Mendalam</h2>
              <p className="section-sub text-center mx-auto" style={{ margin: '0 auto' }}>
                Kombinasi keahlian analitik sistem, rekayasa perangkat lunak modern, dan metodologi
                pengembangan teruji.
              </p>
            </div>

            <div className="trainer-competency-grid">
              <div className="trainer-competency-card">
                <span className="text-3xl block mb-2.5">📐</span>
                <h3 className="text-sm font-bold text-white mb-1">System Analyst</h3>
                <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Expert
                </span>
              </div>

              <div className="trainer-competency-card">
                <span className="text-3xl block mb-2.5">⚙️</span>
                <h3 className="text-sm font-bold text-white mb-1">Software Eng.</h3>
                <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Senior
                </span>
              </div>

              <div className="trainer-competency-card">
                <span className="text-3xl block mb-2.5">🔴</span>
                <h3 className="text-sm font-bold text-white mb-1">Laravel</h3>
                <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Platinum
                </span>
              </div>

              <div className="trainer-competency-card">
                <span className="text-3xl block mb-2.5">⚡</span>
                <h3 className="text-sm font-bold text-white mb-1">TALL Stack</h3>
                <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Advanced
                </span>
              </div>

              <div className="trainer-competency-card">
                <span className="text-3xl block mb-2.5">📱</span>
                <h3 className="text-sm font-bold text-white mb-1">Flutter Mobile</h3>
                <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Pro
                </span>
              </div>

              <div className="trainer-competency-card">
                <span className="text-3xl block mb-2.5">🧪</span>
                <h3 className="text-sm font-bold text-white mb-1">TDD & Troubleshoot</h3>
                <span className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Expert
                </span>
              </div>
            </div>
          </section>

          {/* ==========================================
              03. CAREER TRACK & GLOBAL CONTRIBUTIONS
              ========================================== */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-28">
                <span className="section-label">JEJAK KARIR</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                  Kontribusi & Pengalaman <span className="text-cyan-400 italic">Global</span>
                </h2>
                <p
                  className="text-slate-400 text-sm leading-relaxed"
                  style={{ marginTop: '18px', marginBottom: '28px' }}
                >
                  Lebih dari dua dekade membangun infrastruktur teknologi, platform digital
                  strategis nasional, hingga SaaS berskala internasional.
                </p>
                <div
                  className="rounded-2xl bg-cyan-950/30 border border-cyan-500/30 shadow-lg"
                  style={{ padding: '24px 28px', borderRadius: '20px' }}
                >
                  <div className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span>🛡️</span>
                    <span>Standar Kualitas DBaik:</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Seluruh materi dan kurikulum disusun berlandaskan standar arsitektur industri
                    riil, bukan sekadar teori.
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                {/* Item 1 */}
                <div className="trainer-timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">System Analyst</h3>
                    <span className="trainer-year-badge" style={{ padding: '6px 18px' }}>
                      2022 - 2023
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mb-2">
                    Indonesian Ministry of Communication and Informatics (BAKTI Kominfo)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Mengarahkan transformasi digital platform strategis nasional termasuk Podcast
                    Platform, ICMS (Intelligent Content Management System), dan Cloudia Video on
                    Demand.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="trainer-timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Lead Fullstack Developer
                    </h3>
                    <span className="trainer-year-badge" style={{ padding: '6px 18px' }}>
                      2022
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mb-2">PD. FLOBAMOR</div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Membangun 'Beta Sehat', aplikasi Hospital Information System lengkap dengan
                    registrasi online menggunakan Flutter dan TALL Stack.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="trainer-timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      SaaS Architect (Remote)
                    </h3>
                    <span className="trainer-year-badge" style={{ padding: '6px 18px' }}>
                      2021
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mb-2">
                    I-Prop Realty SDN BHD (Malaysia)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Merancang Property Management SaaS berskala besar dengan dashboard Laravel Nova
                    dan sistem testing otomatis Jest & Puppeteer.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="trainer-timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Microservices Specialist (Remote)
                    </h3>
                    <span className="trainer-year-badge" style={{ padding: '6px 18px' }}>
                      2020
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mb-2">
                    Keller Williams Realty (US)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Implementasi API Microservices tingkat lanjut menggunakan Laravel Lumen dengan
                    pendekatan Test-Driven Development (TDD) yang ketat.
                  </p>
                </div>

                {/* Item 5 */}
                <div className="trainer-timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Data & Systems Analyst
                    </h3>
                    <span className="trainer-year-badge" style={{ padding: '6px 18px' }}>
                      2015 - 2016
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mb-2">
                    Huawei Technologies Co., Ltd.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Mengolah data mentah kompleks menjadi Executive Dashboard informatif untuk
                    pengambilan keputusan strategis korporasi.
                  </p>
                </div>

                {/* Item 6 */}
                <div className="trainer-timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">Cyber Manager</h3>
                    <span className="trainer-year-badge" style={{ padding: '6px 18px' }}>
                      2006 - 2009
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mb-2">
                    Campaign Digital Strategist
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Pelopor kampanye digital untuk kandidat legislatif nasional, mengelola aset
                    media sosial dan infrastruktur web berbasis PHP/Joomla.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              04. SOCIAL IMPACT & TRAINING GALLERY
              ========================================== */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <span className="section-label">DOKUMENTASI PELATIHAN & WORKSHOP</span>
              <h2 className="section-title">Jejak Edukasi ke Berbagai Daerah</h2>
              <p className="section-sub text-center mx-auto" style={{ margin: '0 auto' }}>
                Dokumentasi sesi workshop, seminar teknologi, dan edukasi parenting di berbagai
                institusi di Indonesia.
              </p>
            </div>

            <div className="trainer-gallery-grid">
              {/* Gallery 1 */}
              <div className="trainer-gallery-item">
                <div className="trainer-gallery-img-wrap">
                  <img
                    src="https://ai.dbaik.com/images/trainer/itk-kaltim.jpg"
                    alt="Workshop ITK Kalimantan Timur"
                    className="trainer-gallery-img"
                  />
                </div>
                <div className="trainer-gallery-body">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Workshop & Training
                  </span>
                  <h4 className="text-sm font-bold text-white">Workshop ITK Kalimantan Timur</h4>
                </div>
              </div>

              {/* Gallery 2 */}
              <div className="trainer-gallery-item">
                <div className="trainer-gallery-img-wrap">
                  <img
                    src="https://ai.dbaik.com/images/trainer/sma-it-alharaki.jpg"
                    alt="Parenting Session SMA IT Al Haraki"
                    className="trainer-gallery-img"
                  />
                </div>
                <div className="trainer-gallery-body">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Parenting & Digital Safety
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Parenting Session SMA IT Al Haraki Depok
                  </h4>
                </div>
              </div>

              {/* Gallery 3 */}
              <div className="trainer-gallery-item">
                <div className="trainer-gallery-img-wrap">
                  <img
                    src="https://ai.dbaik.com/images/trainer/smkn-3-kendal.jpg"
                    alt="Edu-Talk SMKN 3 Kendal"
                    className="trainer-gallery-img"
                  />
                </div>
                <div className="trainer-gallery-body">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Edu-Talk & Tech Inspiration
                  </span>
                  <h4 className="text-sm font-bold text-white">Edu-Talk SMKN 3 Kendal</h4>
                </div>
              </div>

              {/* Gallery 4 */}
              <div className="trainer-gallery-item">
                <div className="trainer-gallery-img-wrap">
                  <img
                    src="https://ai.dbaik.com/images/trainer/sma-itci-ppu.jpg"
                    alt="Training SMA ITCI PPU Kalimantan Timur"
                    className="trainer-gallery-img"
                  />
                </div>
                <div className="trainer-gallery-body">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Technology Workshop
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Training SMA ITCI PPU Kalimantan Timur
                  </h4>
                </div>
              </div>

              {/* Gallery 5 */}
              <div className="trainer-gallery-item">
                <div className="trainer-gallery-img-wrap">
                  <img
                    src="https://ai.dbaik.com/images/trainer/ponpes-sumur-bandung.jpg"
                    alt="Sesi Pesantren Pembangunan Sumur Bandung"
                    className="trainer-gallery-img"
                  />
                </div>
                <div className="trainer-gallery-body">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Literasi Digital & Pesantren
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Sesi Pesantren Pembangunan Sumur Bandung
                  </h4>
                </div>
              </div>

              {/* Gallery Card 6: Interactive Slide Showcase Callout */}
              <div
                className="trainer-gallery-item p-6 justify-between flex flex-col"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(15, 23, 42, 0.95))',
                  borderColor: 'rgba(6, 182, 212, 0.35)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">📊</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                      5 Slide Interaktif
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">
                    Materi Slide Terstruktur
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Setiap sesi dibawakan dengan slide materi interaktif modern. Buka contoh slide
                    di bawah ini:
                  </p>

                  <div className="space-y-1.5 mb-4">
                    <a
                      href="https://ai.dbaik.com/slide/ai-productivity-workshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-semibold text-slate-200 hover:text-cyan-300 flex items-center justify-between transition-all"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>⚡</span> <span className="truncate">AI Productivity Workshop</span>
                      </span>
                      <span className="text-cyan-400 font-bold shrink-0 ml-1">Buka →</span>
                    </a>
                    <a
                      href="https://ai.dbaik.com/slide/dari-ide-ke-aplikasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500/40 text-[11px] font-semibold text-slate-200 hover:text-amber-300 flex items-center justify-between transition-all"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>🚀</span> <span className="truncate">Dari Ide ke Aplikasi</span>
                      </span>
                      <span className="text-amber-400 font-bold shrink-0 ml-1">Buka →</span>
                    </a>
                    <a
                      href="https://ai.dbaik.com/slide/ai-for-kids"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-pink-950/60 border border-slate-800 hover:border-pink-500/40 text-[11px] font-semibold text-slate-200 hover:text-pink-300 flex items-center justify-between transition-all"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>🎮</span> <span className="truncate">AI for Kids (9–14 Thn)</span>
                      </span>
                      <span className="text-pink-400 font-bold shrink-0 ml-1">Buka →</span>
                    </a>
                    <a
                      href="https://ai.dbaik.com/slide/ai-for-student"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-[11px] font-semibold text-slate-200 hover:text-indigo-300 flex items-center justify-between transition-all"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>🎓</span> <span className="truncate">AI for Student</span>
                      </span>
                      <span className="text-indigo-400 font-bold shrink-0 ml-1">Buka →</span>
                    </a>
                    <a
                      href="https://ai.dbaik.com/slide/ai-for-parents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 text-[11px] font-semibold text-slate-200 hover:text-emerald-300 flex items-center justify-between transition-all"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>👨‍👩‍👧</span> <span className="truncate">AI for Parents</span>
                      </span>
                      <span className="text-emerald-400 font-bold shrink-0 ml-1">Buka →</span>
                    </a>
                  </div>
                </div>

                <a
                  href="https://ai.dbaik.com/workshop"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition-all shadow-md"
                >
                  <span>Lihat 5 Program Workshop</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </section>

          {/* ==========================================
              05. CTA INVITATION
              ========================================== */}
          <section className="trainer-cta-section">
            <div
              className="trainer-cta-card"
              style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 60px)' }}
            >
              <div
                className="trainer-cta-content"
                style={{
                  textAlign: 'center',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span
                  className="section-label"
                  style={{
                    textAlign: 'center',
                    margin: '0 auto 14px',
                    display: 'block',
                  }}
                >
                  MULAI BELAJAR AI SEKARANG
                </span>
                <h2
                  className="text-2xl sm:text-4xl font-extrabold text-white mb-4 text-center leading-tight"
                  style={{ textAlign: 'center' }}
                >
                  Siap Belajar AI Langsung dari Praktisi 24+ Tahun?
                </h2>
                <p
                  className="text-slate-300 text-sm sm:text-base leading-relaxed text-center"
                  style={{
                    textAlign: 'center',
                    marginTop: '24px',
                    marginBottom: '36px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '640px',
                  }}
                >
                  Ikuti Live Workshop interaktif 120 menit, kuasai super-prompting sesuai kebutuhan
                  Anda, dan dapatkan akun Google AI Pro Plan 18 Bulan.
                </p>
                <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                  style={{ justifyContent: 'center', margin: '0 auto' }}
                >
                  <a
                    href="https://ai.dbaik.com/workshop/daftar"
                    className="btn-primary w-full sm:w-auto"
                    style={{ padding: '16px 36px' }}
                  >
                    <span>Daftar Workshop AI Mulai Rp 100rb →</span>
                  </a>
                  <a
                    href="https://wa.me/628111513335?text=Halo%20Pak%20Suhendra%2C%20saya%20ingin%20tanya%20seputar%20workshop%20AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto"
                    style={{ padding: '16px 28px' }}
                  >
                    <span>Hubungi Langsung via WhatsApp 💬</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
