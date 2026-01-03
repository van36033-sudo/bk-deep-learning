import { getAssessmentHistory } from '../utils/assessment';

export default function AssessmentHistory() {
  const history = getAssessmentHistory();

  if (!history.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
        Belum ada asesmen tersimpan. Mulai dengan mengisi form asesmen.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {history.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-slate-800">{item.category}</p>
              <p className="text-xs text-slate-500">{item.date}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.category === 'Tinggi'
                  ? 'bg-rose-100 text-rose-600'
                  : item.category === 'Sedang'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-emerald-100 text-emerald-700'
              }`}
            >
              Skor {item.score}
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{item.explanation}</p>
        </div>
      ))}
    </div>
  );
}
