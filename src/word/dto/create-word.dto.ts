import { Language } from '../../language/models/language.model';

export class CreateWordDto {
  literal: string;
  language: Language;
}
