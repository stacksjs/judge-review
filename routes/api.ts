import { route } from '@stacksjs/router'

/**
 * This file is the entry point for your application's API routes.
 * The routes defined here are automatically registered. Last but
 * not least, you may also create any other `routes/*.ts` files.
 *
 * @see https://docs.stacksjs.org/routing
 */

route.get('/foo/bar/{id}', () => 'hello world, foo bar') // $API_URL/hello/world
route.get('/', () => 'hello world') // $API_URL
route.get('/hello/world', () => 'hello world, buddy') // $API_URL/hello/world

route.post('/email/subscribe', 'Actions/SubscriberEmailAction')
route.post('/login', 'Actions/Auth/LoginAction')
route.post('/register', 'Actions/Auth/RegisterAction')
route.post('/logout', 'Actions/Auth/LogoutAction')
route.get('/generate-registration-options', 'Actions/Auth/GenerateRegistrationAction')
route.post('/verify-registration', 'Actions/Auth/VerifyRegistrationAction')
route.get('/generate-authentication-options', 'Actions/Auth/GenerateAuthenticationAction')
route.post('/verify-authentication', 'Actions/Auth/VerifyAuthenticationAction')

route.get('/coming-soon', 'Controllers/ComingSoonController@index')

// route.email('/welcome')
route.health() // adds a GET `/health` route
route.get('/install', 'Actions/InstallAction')
route.post('/ai/ask', 'Actions/AI/AskAction')
route.post('/ai/summary', 'Actions/AI/SummaryAction')

route.post('/password/send-password-reset-email', 'Actions/Password/SendPasswordResetEmailAction')
route.post('/password/reset', 'Actions/Password/PasswordResetAction')

