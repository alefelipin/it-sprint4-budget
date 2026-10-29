import type { SubmitEvent } from 'react';
import type {QuoteFormInputs} from '../types/form.ts'
import './QuoteForm.css'

interface QuoteFormProps {
  data: QuoteFormInputs;
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
  onNameChange: (newName: string) => void;
  onPhoneChange: (newPhone: string) => void;
  onEmailChange: (newEmail: string) => void;
}

export default function QuoteForm({data, onSubmit, onNameChange}: QuoteFormProps) {
  return (
    <div  className='form-container'>
      <h2>Request a Quote</h2>
      <form 
        className='form'
        onSubmit={onSubmit}
      >
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
      </form>
    </div>
  ) 
} 