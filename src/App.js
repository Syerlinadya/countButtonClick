import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // memperbarui judul dokumen menggunakan API browser
    document.title = `Tombol sudah diklik ${count} kali`
    // cek batas klik
    if (count === 25 || count === -25) {
      alert(`Anda sudah mencapai batas klik sebanyak ${count}`)
      restartCount();
    }
  }, [count]);

  const restartCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <p>Tombol sudah diklik {count} kali</p>
      <div className="tombol">
        <button className="kotak" onClick={() => 
          setCount(count - 1)}>
            kurangi (-)
        </button>
        <button className="kotak" onClick={() => 
          setCount(count + 1)}>
            tambah (+)
        </button>
      </div>
    </div>
  );
}

export default App;
