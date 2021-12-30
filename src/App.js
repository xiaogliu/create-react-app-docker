import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [serverInfo, setServerInfo] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    fetch('http://localhost:8080/api/v1/serverInfo')
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
          v 1.0.1
        </p>
        <p>
          Dockerizing CRA. {serverInfo}
        </p>
      </header>
    </div>
  );
}

export default App;
