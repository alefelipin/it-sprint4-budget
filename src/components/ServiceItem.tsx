import type {Service} from '../types/service.ts';
import './ServiceItem.css';

interface ServiceItemProps {
  service: Service;
}

export default function ServiceItem ( { service }: ServiceItemProps) {
  return (
    <div className='card'>
      <h2>{service.service}</h2>
      <h3>{service.description}</h3>
      <span>{service.price + service.currency}</span>
    </div>
  )
}
