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
      <div className='card-left'>
        <h2 className='service-card-title'>{service.service}</h2>
        <p className='service-card-description'>{service.description}</p>
      </div>
      <div className='card-center'>
        <span className='service-card-price'>{service.price}</span>
        <span className='service-card-currency'>{service.currency}</span>
      </div>
      <div className='card-right'>
        <label>
          <input
            type='checkbox'
            aria-label={`Add ${service.service} service`}
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
          />
          <span className='service-card-check'>
            Add service
          </span>
        </label> 
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
      </div>  
    </article> 
  )
}
