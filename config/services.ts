import type { ServicesConfig } from '@stacksjs/types'
import { env } from '@stacksjs/env'

/**
 * **Services**
 *
 * This configuration defines all of your services. Because Stacks is fully-typed, you may
 * hover any of the options below and the definitions will be provided. In case you
 * have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default {
  algolia: {
    appId: '',
    apiKey: '',
  },

  aws: {
    accountId: env.AWS_ACCOUNT_ID || '',
    appId: env.AWS_ACCESS_KEY_ID || '',
    apiKey: env.AWS_SECRET_ACCESS_KEY || '',
    region: env.AWS_DEFAULT_REGION || 'us-east-1',
  },

  digitalOcean: {
    appId: '',
    apiKey: '',
  },

  mailgun: {
    apiKey: env.MAILGUN_API_KEY,
    domain: env.MAILGUN_DOMAIN,
    endpoint: env.MAILGUN_ENDPOINT || 'api.mailgun.net',
    maxRetries: env.MAILGUN_MAX_RETRIES ? Number.parseInt(env.MAILGUN_MAX_RETRIES) : 3,
    retryTimeout: env.MAILGUN_RETRY_TIMEOUT ? Number.parseInt(env.MAILGUN_RETRY_TIMEOUT) : 1000,
  },

  mailtrap: {
    host: env.MAILTRAP_HOST || '',
    token: env.MAILTRAP_TOKEN || '',
    inboxId: env.MAILTRAP_INBOX_ID || '',
    maxRetries: env.MAILTRAP_MAX_RETRIES ? Number.parseInt(env.MAILTRAP_MAX_RETRIES) : 3,
    retryTimeout: env.MAILTRAP_RETRY_TIMEOUT ? Number.parseInt(env.MAILTRAP_RETRY_TIMEOUT) : 1000,
  },

  hetzner: {
    appId: '',
    apiKey: '',
  },

  meilisearch: {
    appId: '',
    apiKey: '',
  },

  sendgrid: {
    apiKey: env.SENDGRID_API_KEY,
    maxRetries: env.SENDGRID_MAX_RETRIES ? Number.parseInt(env.SENDGRID_MAX_RETRIES) : 3,
    retryTimeout: env.SENDGRID_RETRY_TIMEOUT ? Number.parseInt(env.SENDGRID_RETRY_TIMEOUT) : 1000,
  },

  ses: {
    region: env.AWS_SES_REGION || 'us-east-1',
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  },

  // lemonSqueezy: {
  //   appId: '',
  //   apiKey: '',
  // },

  slack: {
    appId: env.SLACK_APP_ID || '',
    clientId: env.SLACK_CLIENT_ID || '',
    secretKey: env.SLACK_SECRET_KEY || '',
    maxRetries: env.SLACK_MAX_RETRIES ? Number.parseInt(env.SLACK_MAX_RETRIES) : 3,
    retryTimeout: env.SENDGRID_RETRY_TIMEOUT ? Number.parseInt(env.SENDGRID_RETRY_TIMEOUT) : 1000,
  },
  stripe: {
    secretKey: env.STRIPE_SECRET_KEY || '',
    publicKey: env.STRIPE_PUBLIC_KEY || '',
  },
} satisfies ServicesConfig
