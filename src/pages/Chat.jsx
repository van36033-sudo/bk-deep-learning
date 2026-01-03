import { useEffect, useMemo, useState } from 'react';
import { getSession } from '../utils/auth';
import { addChatMessage, getChatMessages } from '../utils/chat';

const quickReplies = [
  'Terima kasih sudah berbagi. Apa yang paling membuat kamu tertekan?',
  'Mari kita atur jadwal belajar yang lebih seimbang ya.',
  'Coba ceritakan dukungan apa yang paling kamu butuhkan dari sekolah.',
  'Kita bisa mulai dengan teknik relaksasi sederhana dulu.'
];

export default function Chat() {
  const session = getSession();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setMessages(getChatMessages());
  }, []);

  const handleSend = (content, senderRole = session?.role) => {
    if (!content.trim()) return;
    const message = {
      id: `msg-${Date.now()}`,
      sender: senderRole,
      text: content.trim(),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
    const next = addChatMessage(message);
    setMessages(next);
    setText('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSend(text);
  };

  const emptyState = useMemo(
    () =>
      messages.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
          Belum ada percakapan. Mulai kirim pesan untuk memulai sesi konseling.
        </div>
      ),
    [messages]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
      <section className="flex h-[520px] flex-col rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Chat Konseling</h2>
            <p className="text-sm text-slate-500">Role aktif: {session?.role}</p>
          </div>
        </div>
        <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-2">
          {emptyState}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'siswa' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${
                  message.sender === 'siswa'
                    ? 'bg-slate-100 text-slate-700'
                    : 'bg-brand-500 text-white'
                }`}
              >
                <p>{message.text}</p>
                <p className="mt-1 text-[10px] opacity-70">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Tulis pesan..."
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Kirim
          </button>
        </form>
      </section>

      <aside className="space-y-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Panduan Sesi</h3>
          <p className="mt-2 text-sm text-slate-600">
            Gunakan chat ini untuk simulasi konseling. Semua pesan tersimpan di perangkat lokal.
          </p>
        </div>
        {session?.role === 'konselor' && (
          <div className="rounded-2xl bg-brand-50 p-6">
            <h3 className="text-sm font-semibold text-brand-700">Quick Replies Konselor</h3>
            <div className="mt-3 space-y-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleSend(reply, 'konselor')}
                  className="w-full rounded-xl border border-brand-200 bg-white px-3 py-2 text-left text-xs text-brand-700 hover:bg-brand-100"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}
        {session?.role !== 'konselor' && (
          <div className="rounded-2xl bg-slate-100 p-6 text-sm text-slate-600">
            Login sebagai konselor untuk melihat quick replies.
          </div>
        )}
      </aside>
    </div>
  );
}
