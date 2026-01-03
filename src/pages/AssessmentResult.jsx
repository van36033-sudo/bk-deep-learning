import { Link, useLocation } from 'react-router-dom';
import { getLastAssessment } from '../utils/assessment';

export default function AssessmentResult() {
  const location = useLocation();
  const assessment = location.state ?? getLastAssessment();

  if (!assessment) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
        Belum ada hasil asesmen. Silakan isi form asesmen terlebih dahulu.
        <div className="mt-4">
          <Link to="/app/asesmen" className="text-sm font-semibold text-brand-600">
            Isi Asesmen
          </Link>
        </div>
      </div>
    );
  }

  const badgeStyles =
    assessment.category === 'Tinggi'
      ? 'bg-rose-100 text-rose-600'
      : assessment.category === 'Sedang'
      ? 'bg-amber-100 text-amber-700'
      : 'bg-emerald-100 text-emerald-700';

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Hasil Asesmen</h2>
            <p className="text-sm text-slate-500">{assessment.date}</p>
          </div>
          <span className={`rounded-full px-4 py-1 text-xs font-semibold ${badgeStyles}`}>
            Risiko {assessment.category}
          </span>
        </div>
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl bg-brand-50 p-4">
            <p className="text-xs font-semibold uppercase text-brand-500">Skor Risiko</p>
            <p className="mt-2 text-3xl font-semibold text-brand-700">{assessment.score}</p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm text-slate-600">{assessment.explanation}</p>
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-slate-700">Rekomendasi Modul BK</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                {assessment.recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Rangkuman Input</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <div className="rounded-xl bg-slate-50 p-3">Nilai: {assessment.inputs.nilaiAkademik}</div>
            <div className="rounded-xl bg-slate-50 p-3">Stres: {assessment.inputs.tingkatStres}</div>
            <div className="rounded-xl bg-slate-50 p-3">Motivasi: {assessment.inputs.motivasiBelajar}</div>
            <div className="rounded-xl bg-slate-50 p-3">Kehadiran: {assessment.inputs.kehadiran}</div>
            <div className="rounded-xl bg-slate-50 p-3">Dukungan: {assessment.inputs.dukunganSosial}</div>
          </div>
        </div>
        <div className="rounded-2xl bg-brand-50 p-6 text-sm text-brand-700">
          Tindak lanjut dapat dilakukan melalui sesi konseling atau chat. Siswa dengan risiko tinggi
          disarankan mendapatkan pendampingan intensif dari konselor.
          <div className="mt-4">
            <Link to="/app/chat" className="text-sm font-semibold text-brand-700 underline">
              Buka Chat Konselor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
