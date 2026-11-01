import { useState } from 'react'
import type { SubmitEvent } from 'react';
import type {QuoteFormInputs} from '../types/form.ts'
import {validateName, validatePhone, validateEmail} from '../utils/validator.ts'
import './QuoteForm.css'

interface QuoteFormProps {
  data: QuoteFormInputs;
  seo : boolean;
  ads: boolean;
  web: boolean;
  onSubmit: () => void;
  onNameChange: (newName: string) => void;
  onPhoneChange: (newPhone: string) => void;
  onEmailChange: (newEmail: string) => void;
}

export default function QuoteForm({data, seo, ads, web, onSubmit, onNameChange, onPhoneChange, onEmailChange}: QuoteFormProps) {

  const [message, setMessage] = useState<string>("")

  function handleFormSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

  if(!seo && !ads && !web) {
    setMessage("Please select at least one service");
    return;
  }
  
  if(!validateName(data.name)) {
    setMessage("Please enter your name");
    return;
  }

  if(!validatePhone(data.phone)) {
    setMessage("Please enter a valid phone number (9 digits)");
    return;
  }

  if(!validateEmail(data.email)) {
    setMessage("Please enter a valid email");
    return;
  }

  setMessage("Quote requested successfully");

  onSubmit()

  }

  return (
    <div  className='form-container'>
      <h2>Request a Quote</h2>
      <form 
        className='form'
        onSubmit={handleFormSubmit}
      >
        <div className='form-fields'>
          <input
          type='text'
          value={data.name}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder='Name'
          />
          <input
          type='text'
          value={data.phone}
          onChange={(event) => onPhoneChange(event.target.value)}
          placeholder='Phone Number (+34)'
          />
          <input
          type='email'
          value={data.email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder='Email'
          />
          <button
            type='submit'
            className='form-button'
          >
            Request a Quote
          </button>
        </div>
        <p>
          {message}
        </p>
      </form>
    </div>
  ) 
} 