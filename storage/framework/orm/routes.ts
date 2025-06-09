import { route } from '@stacksjs/router'

route.get('court-houses', 'CourtHouseIndexOrmAction')

route.post('court-houses', 'CourtHouseStoreOrmAction')

route.get('court-houses/{id}', 'CourtHouseShowOrmAction')

route.get('judges', 'JudgeIndexOrmAction')

route.post('judges', 'JudgeStoreOrmAction')

route.get('judges/{id}', 'JudgeShowOrmAction')

route.get('judge-reviews', 'JudgeReviewIndexOrmAction')

route.post('judge-reviews', 'JudgeReviewStoreOrmAction')

route.get('judge-reviews/{id}', 'JudgeReviewShowOrmAction')

route.get('users', 'UserIndexOrmAction')

route.post('users', 'UserStoreOrmAction')

route.get('users/{id}', 'UserShowOrmAction')

route.get('authors', 'AuthorIndexOrmAction')

route.post('authors', 'AuthorStoreOrmAction')

route.get('authors/{id}', 'AuthorShowOrmAction')

route.get('posts', 'PostIndexOrmAction')

route.post('posts', 'PostStoreOrmAction')

route.get('posts/{id}', 'PostShowOrmAction')

route.patch('posts/{id}', 'PostUpdateOrmAction')

route.delete('posts/{id}', 'PostDestroyOrmAction')

route.get('websockets', 'WebsocketIndexOrmAction')

route.post('websockets', 'WebsocketStoreOrmAction')

route.get('websockets/{id}', 'WebsocketShowOrmAction')

route.get('requests', 'storage/framework/actions/src/RequestIndexOrmAction.ts')

route.get('requests/{id}', 'storage/framework/actions/src/RequestShowOrmAction.ts')

route.post('requests', 'storage/framework/actions/src/RequestStoreOrmAction.ts')

route.patch('requests/{id}', 'storage/framework/actions/src/RequestUpdateOrmAction.ts')

route.delete('requests/{id}', 'storage/framework/actions/src/RequestDestroyOrmAction.ts')
