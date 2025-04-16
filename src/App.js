import React from 'react';
import Calculator from './components/calculator';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <>
      <h1 className="titulo">Calculadora de Normalidad y Molaridad</h1>
      <p className="justificado">
    El objetivo de esta calculadora es proporcionar instrucciones listas para el laboratorio, que describen cómo preparar una solución ácida o base de molaridad (M) o normalidad (N) especificada a partir de una solución ácida o base concentrada.
    </p>
      <Calculator />
      <FAQ />
      <footer className="footer">
      Calculadora de molaridad y normalidad realizada por{" "}
      <a href="https://github.com/AJAV-Dev/calculadora-acidos-bases.git" target="_blank" rel="noopener noreferrer">
        Alvaro J. Avendaño
      </a>.
    </footer>
    </>
  );
}

export default App;