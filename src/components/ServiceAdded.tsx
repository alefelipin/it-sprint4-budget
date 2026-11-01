import './ServiceAdded.css'
import type {QuoteFormInputs} from '../types/form.ts'

interface ServiceAddedProps {
  clientData: QuoteFormInputs;
  seo: boolean;
  ads: boolean;
  web: boolean;
  total: number;
  extraPage: number;
  extraLanguage: number;
}

export default function ServiceAdded({clientData, seo, ads, web, total, extraPage, extraLanguage}: ServiceAddedProps) {

  return (
    <div className="quote-container">
      <div className='quote-card'>
        <div className='quote-clientData'>
          <p className='quote-name'>{clientData.name}</p>
          <p className='quote-info'>{clientData.email}</p>
          <p className='quote-info'>{clientData.phone}</p>
        </div>
        <div className='quote-services'>
          <p>Services Requested:</p>
          <ul>
            {seo && <li>Seo</li>}
            {ads && <li>Ads</li>}
            {web && <li>Web ({extraPage} pages, {extraLanguage} languages)</li>}
          </ul>    
        </div>
        <div className='quote-total'>
          <p className='quote-total-label'>Total:</p>
          <div className='quote-total-value'>
            <span className='quote-total-price'>{total}</span>
            <span className='quote-total-currency'>€</span>
          </div>
        </div> 
      </div>  
    </div>
  )
}
