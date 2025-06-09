import { Action } from '@stacksjs/actions'
import { response } from '@stacksjs/router'

export default new Action({
  name: 'CourtHouse Index',
  description: 'CourtHouse Index ORM Action',
  method: 'GET',
  async handle() {
    const results = await CourtHouse.all()

    return response.json(results)
  },
})
