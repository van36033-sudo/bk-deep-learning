import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { computeRisk, saveAssessment } from '../utils/assessment';

const initialState = {
  nilaiAkademik: 75,
  tingkatStres: 5,
  motivasiBelajar: 7,
  kehadiran: 90,
  dukunganSosial: 7
};

export default function AssessmentForm() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: Number(event.target.value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = computeRisk(form);
    const assessment = {
      id: `asm-${Date.now()}`,
      date: new Date().toLocaleString('id-ID'),
      inputs: form,
      ...result
    };
    saveAssessment(assessment);
    navigate('/app/hasil', { state: assessment });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
      <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Form Asesmen Siswa</h2>
        <p className="mt-1 text-sm text-slate-500">
          Isi data berikut untuk menghitung skor risiko secara otomatis.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-600">Nilai Akademik (0-100)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={form.nilaiAkademik}
              onChange={updateField('nilaiAkademik')}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Tingkat Stres (1-10)</label>
            <input
              type="number"
              min="1"
              max="10"
              value={form.tingkatStres}
              onChange={updateField('tingkatStres')}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Motivasi Belajar (1-10)</label>
            <input
              type="number"
              min="1"
              max="10"
              value={form.motivasiBelajar}
              onChange={updateField('motivasiBelajar')}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Kehadiran (0-100)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={form.kehadiran}
              onChange={updateField('kehadiran')}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Dukungan Sosial (1-10)</label>
            <input
              type="number"
              min="1"
              max="10"
              value={form.dukunganSosial}
              onChange={updateField('dukunganSosial')}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-brand-600"
        >
          Hitung Hasil
        </button>
      </form>

      <aside className="space-y-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Cara Kerja Skor Risiko</h3>
          <p className="mt-2 text-sm text-slate-600">
            Skor dihitung berdasarkan kombinasi nilai akademik, stres, motivasi, kehadiran, dan dukungan sosial.
            Nilai lebih rendah pada akademik/kehadiran serta stres tinggi akan menaikkan skor risiko.
          </p>
          <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
            Formula demo: (100 - nilai) × 0.3 + stres × 6 + (10 - motivasi) × 5 + (100 - kehadiran)
            × 0.25 + (10 - dukungan) × 4
          </div>
        </div>
        <div className="rounded-2xl bg-brand-50 p-6 text-sm text-brand-700">
          Hasil asesmen langsung tersimpan di perangkat untuk kebutuhan demo tanpa backend.
        </div>
      </aside>
    </div>
  );
}
