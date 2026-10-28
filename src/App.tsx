
import banner from './assets/images/banner.png'
import './App.css';
import Budget from './components/Budget.tsx';

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={banner} className="banner" width="700" height="300" alt="Achieve the best quality" />
        </div>
        <div>
          <Budget />
        </div>
      </section>
    </>
  )
}

export default App
