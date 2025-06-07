import type { RequestInstance } from '@stacksjs/types'
import { Action } from '@stacksjs/actions'
import { EmailSubscription } from '@stacksjs/orm'

export default new Action({
  name: 'StoreEmailSubscriptions',
  description: 'Store Email Subscriptions',
  method: 'POST',
  async handle(request: RequestInstance) {
    const email = request.get('email')

    const emailSubscription = await EmailSubscription.create({ email })

    return emailSubscription
  },
})
