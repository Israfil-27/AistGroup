import React, { useEffect, useState } from 'react';

const generateUniqueKey = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};


const App: React.FC = () => {
  const [data, setData] = useState<{ state: string; code: string } | null>(null);

  const constructUrl = (state: string, redirect_uri: string): string => {
    return `https://portal.login.gov.az/grant-permission?client_id=fb541713acd54641b4e24b3724ca811e&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&state=${encodeURIComponent(state)}&scope=openid`;
  };

  const handleButtonClick = (): void => {
    const uniqueStateValue = generateUniqueKey();
    const redirectUri = "http://localhost:5901/"; 
    const url = constructUrl(uniqueStateValue, redirectUri);
    window.open(redirectUri, '_self'); 
    window.location.href = url; 
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const code = urlParams.get('code');
    if (state && code) {
      setData({ state, code });
    }
  }, []);

  
  return (
    <div>
      <button onClick={handleButtonClick}>get</button>
      {data && (
        <div>
          <p>State: {data.state}</p>
          <p>{}</p>
          <p>Code: {data.code}</p>
        </div>
      )}
    </div>
  );
};

export default App;
