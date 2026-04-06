import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const go = (p) => {
    setPage(p);
    setQIndex(0);
    setFeedback("");
  };

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(score + 10);
      setFeedback("Hebat, jawaban tepat!");
    } else {
      setFeedback("Coba lagi, perhatikan materi.");
    }
  };

  const next = (nextPage, total) => {
    if (qIndex + 1 < total) {
      setQIndex(qIndex + 1);
      setFeedback("");
    } else {
      go(nextPage);
    }
  };

  // ================= DATA SOAL =================

  const haditsQ = [
    {
      q: "Keberanian dalam Islam berarti...",
      a: [
        ["Melawan semua orang", false],
        ["Membela kebenaran", true],
        ["Menang sendiri", false],
        ["Tidak takut apa pun", false]
      ]
    },
    {
      q: "Contoh sikap nekat adalah...",
      a: [
        ["Menolong teman", false],
        ["Ikut berkelahi tanpa alasan", true],
        ["Berkata jujur", false],
        ["Membela kebenaran", false]
      ]
    },
    {
      q: "Mukmin yang kuat lebih...",
      a: [
        ["Ditakuti", false],
        ["Dicintai Allah", true],
        ["Kaya", false],
        ["Terkenal", false]
      ]
    }
  ];

  const indoQ = [
    {
      q: "Contoh sikap peduli lingkungan adalah...",
      a: [
        ["Membuang sampah pada tempatnya", true],
        ["Membuang sampah sembarangan", false]
      ]
    },
    {
      q: "Tujuan menjaga lingkungan adalah...",
      a: [
        ["Merusak alam", false],
        ["Menjaga keseimbangan", true]
      ]
    }
  ];

  const ipasQ = [
    {
      q: "Budaya tak benda adalah...",
      a: [
        ["Rumah adat", false],
        ["Bahasa daerah", true]
      ]
    },
    {
      q: "Contoh aktivitas ekonomi adalah...",
      a: [
        ["Pertanian", true],
        ["Tidur", false]
      ]
    }
  ];

  // ================= UI =================

  return (
    <div style={{padding: 20, fontFamily: "sans-serif"}}>
      {page === "home" && (
        <div>
          <h1>Petualangan Ilmu Kelas 5</h1>
          <button onClick={() => go("map")}>Mulai</button>
        </div>
      )}

      {page === "map" && (
        <div>
          <h2>Pilih Misi</h2>
          <button onClick={() => go("hadits")}>Hadits Siroh</button>
          <button onClick={() => go("indo")}>Bahasa Indonesia</button>
          <button onClick={() => go("ipas")}>IPAS</button>
          <button onClick={() => go("hq")}>Hafalan Quran</button>
        </div>
      )}

      {page === "hq" && (
        <div>
          <h2>Misi Hafalan</h2>
          <p>Hafalan baru sesuai capaian masing-masing</p>
          <p>Murajaah hafalan lama 2 lembar</p>
          <button onClick={() => go("map")}>Kembali</button>
        </div>
      )}

      {page === "hadits" && (
        <div>
          <h2>{haditsQ[qIndex].q}</h2>
          {haditsQ[qIndex].a.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt[1])}>{opt[0]}</button>
          ))}
          <p>{feedback}</p>
          <button onClick={() => next("result", haditsQ.length)}>Lanjut</button>
        </div>
      )}

      {page === "indo" && (
        <div>
          <h2>{indoQ[qIndex].q}</h2>
          {indoQ[qIndex].a.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt[1])}>{opt[0]}</button>
          ))}
          <p>{feedback}</p>
          <button onClick={() => next("result", indoQ.length)}>Lanjut</button>
        </div>
      )}

      {page === "ipas" && (
        <div>
          <h2>{ipasQ[qIndex].q}</h2>
          {ipasQ[qIndex].a.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt[1])}>{opt[0]}</button>
          ))}
          <p>{feedback}</p>
          <button onClick={() => next("result", ipasQ.length)}>Lanjut</button>
        </div>
      )}

      {page === "result" && (
        <div>
          <h2>Skor</h2>
          <h3>{score}</h3>
          <button onClick={() => go("map")}>Kembali</button>
        </div>
      )}
    </div>
  );
}
