import services from '../assets/data/services.json';
import ServiceItem from './ServiceItem.tsx';
import './Budget.css';

export default function Budget () {
  return (
    <div className='container'>
      <div className='card'>
        {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
        />
        ))}
      </div>
    </div>
  );
}


