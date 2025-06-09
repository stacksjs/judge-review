import { Action } from '@stacksjs/actions'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'Judge Index',
  description: 'Judge Index ORM Action',
  method: 'GET',
  async handle() {
    const results = await Judge.all()

    return response.json(results)
  },
})
