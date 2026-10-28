import type {FormInputs} from '../types/form.ts'
import {validateName} from '../utils/validator.ts'
import './Form.css'


export default function Form() {
  return (
    <div  className='form-container'>
      <h2>Request a Quote</h2>
      <form className='form'>
        <input
        type='text'
        value=''
        placeholder='Name'
        />
        <input
        type='text'
        value=""
        placeholder='Phone Number +34'
        />
        <input
        type='email'
        value=''
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