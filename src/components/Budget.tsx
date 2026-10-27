import { useState } from 'react'
import services from '../assets/data/services.json';
import ServiceItem from './ServiceItem.tsx';
import ExtraFeature from './ExtraFeature.tsx';
import './Budget.css';

export default function Budget () {

  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [web, setWeb] = useState(false);

  const [extraPage, setExtraPage] = useState(1);
  const [extraLanguage, setExtraLanguage] = useState(3);



  function isSelected(id: number) {
    if (id === 1) return seo;
    if (id === 2) return ads;
    if (id === 3) return web;
    return false;
  }

  function handleChange(id: number, checked: boolean) {
    if ( id === 1) setSeo(checked);
    if ( id === 2) setAds(checked);
    if ( id === 3) setWeb(checked);
  }

  const total = services.reduce((accum, service) => {
    if (isSelected(service.id)) {
      return accum +service.price;
    }
    return accum;
  }, 0);

  return (
    <div className='container'>
      <div>
        {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          checked={isSelected(service.id)}
          onChange={(checked) => handleChange(service.id, checked)
          }
        />
        ))}
        
        {web === true && ( 
        <>
        <ExtraFeature
          label={"pages"}
          value={extraPage}
          onChange={setExtraPage}
        />
        <ExtraFeature
          label={"languages"}
          value={extraLanguage}
          onChange={setExtraLanguage}
        />
        </>
        )} 
      </div>
      <div className='totalBudget'>
        <div>Estimated price:</div>
        <div>{total}€</div>
      </div>
    </div>
  );
}


