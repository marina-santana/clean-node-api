import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { HttpRequest } from '../../protocols'

export class LoginController {
  async handle (httpRequest: HttpRequest): Promise<HttpRequest> {
    return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
  }
}
