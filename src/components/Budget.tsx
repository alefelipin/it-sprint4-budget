import { useState } from 'react'
import services from '../assets/data/services.json';
import ServiceItem from './ServiceItem.tsx';
import QuoteForm from './QuoteForm.tsx'
import type {QuoteFormInputs} from '../types/form.ts'
import './Budget.css';
import ServiceAdded from './ServiceAdded.tsx';

export default function Budget () {

  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [web, setWeb] = useState(false);

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

  const [extraPage, setExtraPage] = useState(1);
  const [extraLanguage, setExtraLanguage] = useState(3);

  function handlePageChange(id: number, extraPage: number) {
    if ( id === 3) setExtraPage(extraPage);
  }

  function handleLanguageChange(id: number, extraLanguage: number) {
    if ( id === 3) setExtraLanguage(extraLanguage);
  }
  
  const extraPagePrice = 40;
  const extraLanguagePrice = 40;
  const noCostPages = 1;
  const noCostLanguages = 1;

  const total = services.reduce((accum, service) => {

    if (isSelected(service.id) && service.id !== 3) {
      return accum + service.price;
    }
    if (isSelected(service.id) && service.id === 3) {
      return accum + 
        service.price + 
        (extraPage - noCostPages) * extraPagePrice + 
        (extraLanguage - noCostLanguages) * extraLanguagePrice
    }
    return accum;
  }, 0);

  const initialClientData: QuoteFormInputs = 
      {
        "name": "",
        "phone": "",
        "email": "",
      }

  const [clientData, setClientData] = useState<QuoteFormInputs>(initialClientData)

  function handleSubmit() {
    console.log("Contiene lógica q' s'ejecutará tras validar el form.")
  }

  function handleNameChange(newName: string) {
    setClientData((previousData) => {
      return {...previousData, name: newName}       
    });
  }

  function handlePhoneChange(newPhone: string) {
    setClientData((previousData) => {
      return {...previousData, phone: newPhone}       
    });
  }

  function handleEmailChange(newEmail: string) {
    setClientData((previousData) => {
      return {...previousData, email: newEmail}       
    });
  }

  return (
    <div className='container'>
      <div>
        {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          checked={isSelected(service.id)}
          onChange={(checked) => handleChange(service.id, checked)}
          extraPage={extraPage}
          extraLanguage={extraLanguage} 
          onPageChange={(extraPage) => handlePageChange(service.id, extraPage) }
          onLanguageChange={(extraLanguage) => handleLanguageChange(service.id, extraLanguage)}
        />
        ))}
      </div>
      <div className='totalBudget'>
        <div>Estimated price:</div>
        <div>{total}€</div>
      </div>
      <div>
        <QuoteForm
          data={clientData}
          onSubmit={handleSubmit}
          onNameChange={handleNameChange}
          onPhoneChange={handlePhoneChange}
          onEmailChange={handleEmailChange}
         />
      </div>
      <div>
        <ServiceAdded
          data={clientData}
          seo={seo}
          ads={ads}
          web={web}
          pages={extraPage}
          languages={extraLanguage}
          total={total}
        
        />
      </div>
    </div>
  );
}


