import type {Service} from '../types/service.ts';
import ExtraFeature from './ExtraFeature.tsx';
import './ServiceItem.css';

interface ServiceItemProps {
  service: Service;
  checked: boolean;
  onChange: (checked: boolean) => void;
  extraPage: number;
  extraLanguage: number;
  onPageChange: (extraPage: number) => void;
  onLanguageChange: (extraLanguage: number) => void;
}

export default function ServiceItem ( { 
  service, 
  checked, 
  onChange, 
  extraPage, 
  extraLanguage, 
  onPageChange, 
  onLanguageChange }: ServiceItemProps) {

  return (
    <article className='card'>
      <div>
      <h2>{service.service}</h2>
      <p>{service.description}</p>
      </div>
      <div>
        <span className='price'>{service.price}</span>
        <span className='currency'>{service.currency}</span>
      </div>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>
          Add service
        </span>
        {service.id === 3 && checked === true && ( 
          <>
          <ExtraFeature
            label={"pages"}
            value={extraPage}
            onChange={onPageChange}
          />
          <ExtraFeature
            label={"languages"}
            value={extraLanguage}
            onChange={onLanguageChange}
          />
          </>
          )} 
      </label> 
    </article> 
  )
}
