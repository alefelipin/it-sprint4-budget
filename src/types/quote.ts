import type {QuoteFormInputs} from '../types/form.ts'

export interface Quote {
  id: number;
  date: string;
  clientData: QuoteFormInputs;
  seo: boolean;
  ads: boolean;
  web: boolean;
  total: number;
  extraPage: number;
  extraLanguage: number;
}