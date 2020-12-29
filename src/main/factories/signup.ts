import { DbAddAccount } from '../../data/usecases/db-add-account'
import { BcryptAdapater } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorApapter } from '../../utils/email-validator'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorApapter()
  const bcryptAdapter = new BcryptAdapater(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
