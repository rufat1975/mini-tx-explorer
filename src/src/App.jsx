import React, { useState } from 'react';

const App = () => {
  const [address, setAddress] = useState('');

  const handleSearch = () => {
    alert(`Поиск транзакций для адреса: ${address}`);
    // Здесь будет fetch к API
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mini TX Explorer</h1>
      <input
        type="text"
        placeholder="Введите адрес кошелька"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: '8px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '8px' }}>
        Показать
      </button>
    </div>
  );
};

export default App;
