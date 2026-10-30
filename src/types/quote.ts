import type {QuoteFormInputs} from '../types/form.ts'

export interface Quote {
  id: number;
  date: string;
  data: QuoteFormInputs;
  seo: boolean;
  ads: boolean;
  web: boolean;
  total: number;
  pages: number;
  languages: number;
}