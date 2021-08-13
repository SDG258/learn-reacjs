import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'SDG 258'
  const age = 22;
  const isMale = true;
  const student = {
    name: 'Nguyễn Song Du'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SDG 258
        </p>
        <p>Xin chào {name} - {age} - {isMale ? 'Male' : 'Femal'}</p>

        {isMale ? <p>Male</p> : <p>Femal</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>Femal</p>}
        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}
        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
