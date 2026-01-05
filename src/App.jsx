import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mushrooms, setMushrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // 환경변수에서 API Key를 안전하게 가져옵니다.
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // 실제 API가 없으므로 가상의 데이터를 가져오는 것처럼 시뮬레이션 합니다.
    // 실제 개발에선 fetch(`https://api.example.com/data?key=${apiKey}`) 형태가 됩니다.
    
    console.log("사용 중인 API Key:", apiKey); // 개발자 도구 콘솔에서 확인 가능

    const fetchMushrooms = async () => {
      try {
        // 1초 뒤에 데이터가 로드되는 척 흉내냅니다.
        setTimeout(() => {
          setMushrooms([
            { id: 1, name: '광대버섯', type: '독버섯', emoji: '🍄' },
            { id: 2, name: '송이버섯', type: '식용', emoji: '🍄' },
            { id: 3, name: '영지버섯', type: '약용', emoji: '🪵' },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
        setLoading(false);
      }
    };

    fetchMushrooms();
  }, [apiKey]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🍄 신비한 버섯 도감</h1>
      <p>API Key 상태: {apiKey ? "✅ 인증됨" : "❌ 키 없음"}</p>
      
      {loading ? (
        <p>버섯 정보를 불러오는 중...</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px', justifyContent: 'center' }}>
          {mushrooms.map((mushroom) => (
            <div key={mushroom.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', minWidth: '200px' }}>
              <span style={{ fontSize: '2rem' }}>{mushroom.emoji}</span>
              <h3>{mushroom.name}</h3>
              <p>분류: {mushroom.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App