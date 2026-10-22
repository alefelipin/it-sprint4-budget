//import { useState } from 'react'
import banner from './assets/images/banner.png'
import './App.css';
import Budget from './components/Budget.tsx';

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={banner} className="banner" width="700" height="300" alt="" />
        </div>
        <div>
          <h1>Achieve the best quality</h1>
          <Budget />
        </div>
      </section>
    </>
  )
}

export default App
