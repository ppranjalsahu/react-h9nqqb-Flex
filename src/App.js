import React from 'react';
import './style.css';

export default function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hiddden' }}>
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#420061',
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          position: 'fixed'
        }}
      >
        <img src = "C:\Users\Pranjal\Downloads\logo.svg" />
        <div />
        <div
          style={{
            height: 30,
            width: 30,
            borderRadius: 1000,
            backgroundColor: '#ff9e90',
            marginLeft: 'auto'
          }}
        />
      </div>

      <div style={{ display: 'flex', height: '100%' }}>
        <div
          style={{
            width: 150,
            height: '100%',
            backgroundColor: '#ff8f0f',
            padding: 10
          }}
        >
          {[0, 1, 2, 3, 4].map(value => (
            <button
              style={{
                width: '100%',
                height: '30px',
                backgroundColor: '#ffc380',
                marginBottom: '10px',
                marginTop: '10px',
                borderRadius: '5px'
              }}
            />
          ))}
        </div>
        <div
          style={{
            height: '100%',
            backgroundColor: '',
            flexGrow: 1
          }}
        />
      </div>
    </div>
  );
}
