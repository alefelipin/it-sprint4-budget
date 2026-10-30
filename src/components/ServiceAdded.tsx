import './ServiceAdded.css'
import type {QuoteFormInputs} from '../types/form.ts'

interface ServiceAddedProps {
  data: QuoteFormInputs;
  seo: boolean;
  ads: boolean;
  web: boolean;
  total: number;
  pages: number;
  languages: number;
}

export default function ServiceAdded({data, seo, ads, web, total, pages, languages}: ServiceAddedProps) {

  return (
    <div className="quote-container">
      <h2>
        Quotes in progress
      </h2>
        <h3>Details:</h3> 
      <div>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
      <div>
        <p>Services Requested:</p>
        <ul>
          {seo && <li>Seo</li>}
          {ads && <li>Ads</li>}
          {web && <li>Web ({pages} pages, {languages} languages)</li>}
        </ul>    
      </div>
      <div>
        <p>Total</p>
        <p>{total}</p>
      </div>
    </div>
  )
}