import type { RequestInstance } from '@stacksjs/types'
import { Action } from '@stacksjs/actions'
import { Auth, register } from '@stacksjs/auth'
import { response } from '@stacksjs/router'
import { schema } from '@stacksjs/validation'

export default new Action({
  name: 'RegisterAction',
  description: 'Register a new user',
  method: 'POST',
  async handle(request: RequestInstance) {
    const email = request.get('email')
    const password = request.get('password')
    const name = request.get('name')
    const passwordConfirmation = request.get('password_confirmation')

    await request.validate({
      email: {
        rule: schema.string().email(),
        message: {
          email: 'Email must be a valid email address',
        },
      },

      password: {
        rule: schema.password().minLength(6).matches(passwordConfirmation),
        message: {
          min: 'Password must have a minimum of 6 characters',
          matches: 'Password must match password confirmation',
        },
      },

      name: {
        rule: schema.string().min(2).max(255),
        message: {
          min: 'Name must have a minimum of 2 characters',
          max: 'Name must have a maximum of 255 characters',
        },
      },
    })

    const result = await register({ email, password, name })

    if (result) {
      const user = await Auth.getUserFromToken(result.token)

      return response.json({
        token: result.token,
        user: {
          id: user?.id,
          email: user?.email,
          name: user?.name,
        },
      })
    }

    return response.error('Registration failed')
  },
})
