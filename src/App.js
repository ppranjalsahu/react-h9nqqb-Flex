import React from 'react';
import './style.css';

export default function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hiddden' }}>
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#1a1a1a',
          display: 'flex',
          flexDirection : 'row',
          padding: 10
        }}
      >
        <div style={{ height: 30, width: 80, backgroundColor: '#fff'}}>
          <div>
            GitaQuest
          </div>
        </div>
        <div
          style={{
            height: 30,
            width: 30,
            borderRadius: 1000,
            backgroundColor: '#fff',
            marginLeft: 'auto',
          }}
        />
      </div>

      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ width: 150, height: '100%', backgroundColor: '#999' }} />
        <div
          style={{
            height: '100%',
            backgroundColor: '#ccc',
            flexGrow: 1
          }}
        />
      </div>
    </div>
  );
}
