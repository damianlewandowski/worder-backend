import { Language } from '../../languages/models/language.model';

export class CreateWordDto {
  literal: string;
  language: Language;
}
