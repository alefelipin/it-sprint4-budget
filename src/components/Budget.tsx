import { useState } from 'react'
import { useEffect } from 'react';
import services from '../assets/data/services.json';
import ServiceItem from './ServiceItem.tsx';
import QuoteForm from './QuoteForm.tsx'
import type {QuoteFormInputs} from '../types/form.ts'
import './Budget.css';
import ServiceAdded from './ServiceAdded.tsx';
import type {Quote} from '../types/quote.ts'
import QuoteSearch from './QuoteSearch.tsx';

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
  
  const extraPagePrice = 30;
  const extraLanguagePrice = 30;
  const noCostPages = 1;
  const noCostLanguages = 0;

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

    const [quotes, setQuotes] = useState<Quote[]>( () => {

      const storedQuotes = localStorage.getItem("quotes");

      if (storedQuotes !== null) {
        const parsedQuotes = JSON.parse(storedQuotes);
        return parsedQuotes;
      } else { 
        return [];
      }
    });

    useEffect( () => {
      localStorage.setItem("quotes", JSON.stringify(quotes));
    }, [quotes])

  function handleSubmit() {

    const newQuoteId = 
      quotes.reduce((accum, quote) => {
        if (quote.id > accum) {
          return quote.id;
        }
        return accum;
      }, 0) + 1;

    const newQuote: Quote = {
      id: newQuoteId,
      date: new Date().toISOString(),
      clientData: clientData,
      seo: seo,
      ads: ads,
      web: web,
      total: total,
      extraPage: extraPage,
      extraLanguage: extraLanguage,
    }

    setQuotes([...quotes,newQuote]);

    }

  const [searchText, setSearchText] = useState<string>("");
    
  const filteredQuotes = quotes.filter((quote) => { 
    return quote.clientData.name.toLowerCase().includes(searchText.toLowerCase())
  });

  const [sortBy, setSortBy] = useState<string>("date");
  
  const filteredQuotesSorted = [...filteredQuotes]

  if(sortBy === "date") { 
    filteredQuotesSorted.sort((a,b) => b.date.localeCompare(a.date)) 
  }

  if(sortBy === "amount") { 
    filteredQuotesSorted.sort((a,b) => b.total - a.total)
  }

  if(sortBy === "name") { 
    filteredQuotesSorted.sort((a,b) => a.clientData.name.localeCompare(b.clientData.name)) 
  }

  const params = new URLSearchParams(window.location.search);
  const quoteParam = params.get("quote");

  const sharedQuote: Quote | null  = quoteParam ? JSON.parse(quoteParam) : null;


  function handleShare(quote: Quote) {
    const encodedQuote = encodeURIComponent(JSON.stringify(quote));
    const shareUrl = `${window.location.origin}/?quote=${encodedQuote}`;
    window.location.assign(shareUrl);
  }

    if (sharedQuote !== null) {
      return (
        <div className="shared-quote">
          <h2>Shared Quote</h2>
      
          <ServiceAdded
            key={sharedQuote.id}
            quote={sharedQuote}
            clientData={sharedQuote.clientData}
            seo={sharedQuote.seo}
            ads={sharedQuote.ads}
            web={sharedQuote.web}
            extraPage={sharedQuote.extraPage}
            extraLanguage={sharedQuote.extraLanguage}
            total={sharedQuote.total}
            date={sharedQuote.date}
            onShare={handleShare}
          />
        </div>
      );
    }

  return (


    <div className='container'>
      <div className='service-item'>
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
      <div className='total-budget'>
        <div className='total-budget-text'>Estimated price:</div>
        <div className='total-budget-value'>
          <div className='total-budget-price'>{total}</div>
          <span className='total-budget-currency'>€</span>
        </div>
      </div>
      <div>
        <QuoteForm
          data={clientData}
          seo={seo}
          ads={ads}
          web={web}
          onSubmit={handleSubmit}
          onNameChange={handleNameChange}
          onPhoneChange={handlePhoneChange}
          onEmailChange={handleEmailChange}
         />
      </div>
      <div>
        {quotes.length !== 0 && 
        <h2>Quotes in progress:</h2>
        }
        <QuoteSearch
          searchText={searchText}
          onSearchChange={setSearchText}
          onSortChange={setSortBy}
        />
        {filteredQuotesSorted.map((filteredQuoteSorted) => (
          <ServiceAdded
            key={filteredQuoteSorted.id}
            clientData={filteredQuoteSorted.clientData}
            seo={filteredQuoteSorted.seo}
            ads={filteredQuoteSorted.ads}
            web={filteredQuoteSorted.web}
            extraPage={filteredQuoteSorted.extraPage}
            extraLanguage={filteredQuoteSorted.extraLanguage}
            total={filteredQuoteSorted.total}
            date={filteredQuoteSorted.date}
            quote={filteredQuoteSorted}
            onShare={handleShare}  
          />
        ))}
      </div>
    </div>       
  );
}





