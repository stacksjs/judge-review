import type { CourtHousesTable } from '../src/models/CourtHouse'
import type { JudgesTable } from '../src/models/Judge'
import type { JudgeReviewsTable } from '../src/models/JudgeReview'
import type { OauthAccessTokensTable } from '../src/models/OauthAccessToken'
import type { OauthClientsTable } from '../src/models/OauthClient'
import type { EmailSubscriptionsTable } from '../src/models/EmailSubscription'
import type { UsersTable } from '../src/models/User'
import type { PersonalAccessTokensTable } from '../src/models/PersonalAccessToken'
import type { PrintDevicesTable } from '../src/models/PrintDevice'
import type { CategoriesTable } from '../src/models/Category'
import type { PaymentsTable } from '../src/models/Payment'
import type { DriversTable } from '../src/models/Driver'
import type { WaitlistProductsTable } from '../src/models/WaitlistProduct'
import type { DigitalDeliveriesTable } from '../src/models/DigitalDelivery'
import type { ManufacturersTable } from '../src/models/Manufacturer'
import type { OrderItemsTable } from '../src/models/OrderItem'
import type { ShippingZonesTable } from '../src/models/ShippingZone'
import type { CustomersTable } from '../src/models/Customer'
import type { ProductsTable } from '../src/models/Product'
import type { ReceiptsTable } from '../src/models/Receipt'
import type { ProductVariantsTable } from '../src/models/ProductVariant'
import type { LicenseKeysTable } from '../src/models/LicenseKey'
import type { WaitlistRestaurantsTable } from '../src/models/WaitlistRestaurant'
import type { ReviewsTable } from '../src/models/Review'
import type { ProductUnitsTable } from '../src/models/ProductUnit'
import type { GiftCardsTable } from '../src/models/GiftCard'
import type { OrdersTable } from '../src/models/Order'
import type { CouponsTable } from '../src/models/Coupon'
import type { TaxRatesTable } from '../src/models/TaxRate'
import type { TransactionsTable } from '../src/models/Transaction'
import type { LoyaltyPointsTable } from '../src/models/LoyaltyPoint'
import type { ProductItemsTable } from '../src/models/ProductItem'
import type { LoyaltyRewardsTable } from '../src/models/LoyaltyReward'
import type { ShippingMethodsTable } from '../src/models/ShippingMethod'
import type { ShippingRatesTable } from '../src/models/ShippingRate'
import type { CartsTable } from '../src/models/Cart'
import type { DeliveryRoutesTable } from '../src/models/DeliveryRoute'
import type { CartItemsTable } from '../src/models/CartItem'
import type { PaymentProductsTable } from '../src/models/PaymentProduct'
import type { FailedJobsTable } from '../src/models/FailedJob'
import type { PaymentMethodsTable } from '../src/models/PaymentMethod'
import type { PagesTable } from '../src/models/Page'
import type { AuthorsTable } from '../src/models/Author'
import type { PostsTable } from '../src/models/Post'
import type { PaymentTransactionsTable } from '../src/models/PaymentTransaction'
import type { WebsocketsTable } from '../src/models/Websocket'
import type { RequestsTable } from '../src/models/Request'
import type { JobsTable } from '../src/models/Job'
import type { LogsTable } from '../src/models/Log'
import type { SubscriptionsTable } from '../src/models/Subscription'
import type { ErrorsTable } from '../src/models/Error'
import type { Generated } from 'kysely'


export interface MigrationsTable {
  name: string
  timestamp: string
}

export interface PasswordResetsTable {
  email: string
  token: string
  created_at?: string
}

export interface PasskeysTable {
  id?: number
  cred_public_key: string
  user_id: number
  webauthn_user_id: string
  counter: number
  credential_type: string
  device_type: string
  backup_eligible: boolean
  backup_status: boolean
  transports?: string
  created_at?: string
  updated_at?: string
  last_used_at: string
}

export interface CommentablesTable {
  id?: number
  title: string
  body: string
  status: string
  approved_at: number | null
  rejected_at: number | null
  commentables_id: number
  commentables_type: string
  user_id: number | null
  created_at?: string
  updated_at?: string | null
}

export interface CommentableUpvotesTable {
  id?: number
  user_id: number
  upvoteable_id: number
  upvoteable_type: string
  created_at?: string
}

  export interface CategorizableTable {
    id?: number
    name: string
    slug: string
    description?: string
    is_active: boolean
    categorizable_type: string
    created_at?: string
    updated_at?: string
  }

  export interface TaggableTable {
    id?: number
    name: string
    slug: string
    description?: string
    is_active: boolean
    taggable_type: string
    created_at?: string
    updated_at?: string
  }

  export interface TaggableModelsTable {
    id?: number
    tag_id: number
    taggable_type: string
    created_at?: string
    updated_at?: string
  }

  export interface CategorizableModelsTable {
    id?: number
    category_id: number
    categorizable_type: string
    categorizable_id: number
    created_at?: string
    updated_at?: string
  }

  export interface QueryLogsTable {
    id?: number
    query: string
    normalized_query: string
    duration: number
    connection: string
    status: 'completed' | 'failed' | 'slow'
    error?: string
    executed_at?: string
    bindings?: string
    trace?: string
    model?: string
    method?: string
    file?: string
    line?: number
    memory_usage?: number
    rows_affected?: number
    transaction_id?: string
    tags?: string
    affected_tables?: string
    indexes_used?: string
    missing_indexes?: string
    explain_plan?: string
    optimization_suggestions?: string
  }
export interface Database {
  court_houses: CourtHousesTable
  judges: JudgesTable
  judge_reviews: JudgeReviewsTable
  oauth_access_tokens: OauthAccessTokensTable
  oauth_clients: OauthClientsTable
  email_subscriptions: EmailSubscriptionsTable
  users: UsersTable
  personal_access_tokens: PersonalAccessTokensTable
  print_devices: PrintDevicesTable
  categories: CategoriesTable
  payments: PaymentsTable
  drivers: DriversTable
  waitlist_products: WaitlistProductsTable
  digital_deliveries: DigitalDeliveriesTable
  manufacturers: ManufacturersTable
  order_items: OrderItemsTable
  shipping_zones: ShippingZonesTable
  customers: CustomersTable
  products: ProductsTable
  receipts: ReceiptsTable
  product_variants: ProductVariantsTable
  license_keys: LicenseKeysTable
  waitlist_restaurants: WaitlistRestaurantsTable
  reviews: ReviewsTable
  product_units: ProductUnitsTable
  gift_cards: GiftCardsTable
  orders: OrdersTable
  coupons: CouponsTable
  tax_rates: TaxRatesTable
  transactions: TransactionsTable
  loyalty_points: LoyaltyPointsTable
  product_items: ProductItemsTable
  loyalty_rewards: LoyaltyRewardsTable
  shipping_methods: ShippingMethodsTable
  shipping_rates: ShippingRatesTable
  carts: CartsTable
  delivery_routes: DeliveryRoutesTable
  cart_items: CartItemsTable
  payment_products: PaymentProductsTable
  failed_jobs: FailedJobsTable
  payment_methods: PaymentMethodsTable
  pages: PagesTable
  authors: AuthorsTable
  posts: PostsTable
  payment_transactions: PaymentTransactionsTable
  websockets: WebsocketsTable
  requests: RequestsTable
  jobs: JobsTable
  logs: LogsTable
  subscriptions: SubscriptionsTable
  errors: ErrorsTable
  migrations: MigrationsTable
  passkeys: PasskeysTable
  commentables: CommentablesTable
  taggables: TaggableTable
  commentable_upvotes: CommentableUpvotesTable
  categorizables: CategorizableTable
  categorizable_models: CategorizableModelsTable
  taggable_models: TaggableModelsTable
  password_resets: PasswordResetsTable
  query_logs: QueryLogsTable
}
