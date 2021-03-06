import React, { useState, useEffect } from 'react';

import './App.css';

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080' :
  'https://learn-k8s.com';

const App = () => {
  const [serverInfo, setServerInfo] = useState('');

  useEffect(() => {
    fetch(`${baseURL}/api/v1/serverInfo`)
      .then(response => response.text())
      .then(data => {
        setServerInfo(data)
      })
      .catch(err => setServerInfo('Error to get server info.'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-version">
          v 2.0.0
        </p>
        <p>
          {serverInfo} 
          <br />
          Dockerizing CRA. 
        </p>
      </header>
    </div>
  );
}

export default App;
