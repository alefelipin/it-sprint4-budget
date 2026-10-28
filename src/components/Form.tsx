import type {Form} from '../types/form.ts'

export default function Form() {
  return (
    <>
      <h2>Request a Quote</h2>
      <form>
        <input
        type='text'
        placeholder='Name'
        />
        <input
        type='text'
        placeholder='Phone Number'
        />
        <input
        type='email'
        placeholder='Email'
        />
        <button
          type='submit'
        >
          Request a Quote
        </button>
      </form>
    </>
  ) 
} 