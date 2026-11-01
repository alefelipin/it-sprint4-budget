import './QuoteSearch.css';
import search from '../assets/images/search-icon.png'

export default function QuoteSearch() {

  return (
    <div className='container-search'>
      <div className='search-box'>
        <input
        className="search-input"
        placeholder="Search"
        />
        <img 
        src={search} 
        className="search-icon" 
        alt=""
        />
      </div> 
      <div className="search-buttons">
        <button
          className="search-button"
          type='button'
        >
        Date
        </button>
        <button 
          className="search-button"
          type='button'
        >
          Amount
        </button>
        <button 
          className="search-button"
          type='button'
        >
          Name
        </button>
      </div>  
    </div>       
  );
}