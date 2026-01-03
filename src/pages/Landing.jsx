import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Asesmen Cepat',
    description: 'Form asesmen sederhana untuk memetakan tingkat risiko dan kebutuhan pendampingan.'
  },
  {
    title: 'Dashboard Peran',
    description: 'Tampilan khusus siswa, konselor, dan admin dengan ringkasan data penting.'
  },
  {
    title: 'Chat Konseling',
    description: 'Simulasi percakapan antara siswa dan konselor dengan quick replies.'
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">BK Deep Learning</p>
          <h1 className="text-2xl font-semibold text-slate-800">Bimbingan & Konseling Cerdas</h1>
        </div>
        <Link
          to="/login"
          className="rounded-xl bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-brand-600"
        >
          Mulai Demo
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-8 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold text-brand-600 shadow">
            Demo siap tampil di GitHub Pages
          </span>
          <h2 className="text-4xl font-semibold leading-tight text-slate-900">
            Platform BK modern untuk memantau kesejahteraan siswa secara cepat.
          </h2>
          <p className="text-base text-slate-600">
            BK Deep Learning menghadirkan pengalaman terintegrasi untuk asesmen, tindak lanjut, dan komunikasi
            konseling. Versi demo ini berjalan sepenuhnya tanpa backend sehingga siap dipresentasikan kapan saja.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/login"
              className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-brand-600"
            >
              Masuk ke Aplikasi
            </Link>
            <a
              href="#fitur"
              className="rounded-xl border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Lihat Fitur
            </a>
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6">
          <div className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-semibold text-brand-500">Ringkasan Demo</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-800">Analitik BK dalam satu layar</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>Asesmen selesai hari ini</span>
                <span className="font-semibold text-slate-800">24</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>Siswa butuh pendampingan</span>
                <span className="font-semibold text-rose-500">7</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>Konseling aktif</span>
                <span className="font-semibold text-emerald-600">12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
