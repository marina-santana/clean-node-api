import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { EmailValidator, HttpRequest } from '../../protocols'

export class LoginController {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpRequest> {
    const { email, password } = httpRequest.body

    if (!email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }

    if (!password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }

    this.emailValidator.isValid(email)
  }
}
