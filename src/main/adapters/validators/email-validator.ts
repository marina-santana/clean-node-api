import validator from 'validator'
import { EmailValidator } from '../../../presentation/protocols'

export class EmailValidatorApapter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
