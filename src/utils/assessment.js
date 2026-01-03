import { storage } from './storage';

const HISTORY_KEY = 'bk_assessments';
const LAST_KEY = 'bk_last_assessment';

export const getAssessmentHistory = () => storage.get(HISTORY_KEY, []);

export const saveAssessment = (assessment) => {
  const history = getAssessmentHistory();
  const next = [assessment, ...history].slice(0, 10);
  storage.set(HISTORY_KEY, next);
  storage.set(LAST_KEY, assessment);
  return next;
};

export const getLastAssessment = () => storage.get(LAST_KEY, null);

export const computeRisk = ({
  nilaiAkademik,
  tingkatStres,
  motivasiBelajar,
  kehadiran,
  dukunganSosial
}) => {
  // Deterministic demo formula (0-100-ish):
  // Lower academic + attendance, higher stress, and lower motivation/support increase risk.
  const score =
    (100 - nilaiAkademik) * 0.3 +
    tingkatStres * 6 +
    (10 - motivasiBelajar) * 5 +
    (100 - kehadiran) * 0.25 +
    (10 - dukunganSosial) * 4;

  let category = 'Rendah';
  if (score >= 90) category = 'Tinggi';
  else if (score >= 60) category = 'Sedang';

  const explanation =
    category === 'Tinggi'
      ? 'Butuh pendampingan intensif karena kombinasi stres tinggi dan indikator akademik/kehadiran yang rendah.'
      : category === 'Sedang'
      ? 'Ada beberapa indikator yang perlu ditingkatkan agar keseimbangan belajar dan kesejahteraan lebih baik.'
      : 'Indikator relatif stabil. Pertahankan kebiasaan positif dengan dukungan yang konsisten.';

  const recommendations =
    category === 'Tinggi'
      ? [
          'Manajemen stres & regulasi emosi',
          'Rencana belajar terstruktur',
          'Kolaborasi dengan wali kelas & orang tua'
        ]
      : category === 'Sedang'
      ? [
          'Pelatihan keterampilan belajar efektif',
          'Monitoring kehadiran & motivasi',
          'Peer support & kegiatan positif'
        ]
      : [
          'Penguatan tujuan akademik',
          'Pengembangan minat & bakat',
          'Konseling preventif berkala'
        ];

  return { score: Math.round(score), category, explanation, recommendations };
};
