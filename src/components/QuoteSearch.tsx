import './QuoteSearch.css';
import search from '../assets/images/search-icon.png'


interface QuoteSearchProps {
  searchText: string;
  onSearchChange: (newSearchText: string) => void;
}

export default function QuoteSearch({searchText, onSearchChange}: QuoteSearchProps) {

  return (
    <div className='container-search'>
      <div className='search-box'>
        <input
        type='search'
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
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