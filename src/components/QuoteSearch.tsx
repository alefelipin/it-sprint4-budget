import './QuoteSearch.css';
import search from '../assets/images/search-icon.png'

interface QuoteSearchProps {
  searchText: string;
  onSearchChange: (newSearchText: string) => void;
  onSortChange: (newSortBy: string) => void;
}

export default function QuoteSearch({searchText, onSearchChange, onSortChange}: QuoteSearchProps) {

  return (
    <div className='container-search'>
      <div className='search-box'>
        <input
        type='search'
        aria-label="Search quotes by client name"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        className="search-input"
        placeholder="Search by name"
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
          onClick={() => onSortChange("date")}
        >
        Date
        </button>
        <button 
          className="search-button"
          type='button'
          onClick={() => onSortChange("amount")}
        >
          Amount
        </button>
        <button 
          className="search-button"
          type='button'
          onClick={() => onSortChange("name")}
        >
          Name
        </button>
      </div>  
    </div>       
  );
}