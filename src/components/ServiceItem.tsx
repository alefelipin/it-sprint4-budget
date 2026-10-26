import type {Service} from '../types/service.ts';
import './ServiceItem.css';

interface ServiceItemProps {
  service: Service;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ServiceItem ( { service, checked, onChange }: ServiceItemProps) {

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
        >
        </input>
        <span>
          Add service
        </span>
      </label> 
    </article> 
  )
}
