// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
// const Welcome = lazy(() => import('../pages/protected/Welcome'))
// const Page404 = lazy(() => import('../pages/protected/404'))
// const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
// const Leads = lazy(() => import('../pages/protected/Leads'))
// const Integration = lazy(() => import('../pages/protected/Integration'))
// const Calendar = lazy(() => import('../pages/protected/Calendar'))
// const Team = lazy(() => import('../pages/protected/Team'))
// const Transactions = lazy(() => import('../pages/protected/Transactions'))
// const Bills = lazy(() => import('../pages/protected/Bills'))
// const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
// const GettingStarted = lazy(() => import('../pages/GettingStarted'))
// const DocFeatures = lazy(() => import('../pages/DocFeatures'))
// const DocComponents = lazy(() => import('../pages/DocComponents'))

// const Dashboard = lazy(() => import('../pages/protected/DashboardNew'))
const Community = lazy(() => import('../pages/protected/Community'))
const Earn = lazy(() => import('../pages/protected/Earn'))
const AddWayToEarn = lazy(() => import('../pages/protected/AddWayToEarn'))
const followChannel = lazy(() => import('../pages/protected/followChannel'))
const Redeem = lazy(() => import('../pages/protected/Redeem'))
const AddWayToRedeem = lazy(() => import('../pages/protected/AddWayToRedeem'))
const Shop = lazy(() => import('../pages/protected/Shop'))
const Products = lazy(() => import('../pages/protected/Products'))
const AddDigitalProduct = lazy(() => import('../pages/protected/AddDigitalProduct'))
const AddPhysicalProduct = lazy(() => import('../pages/protected/AddPhysicalProduct'))
const AddExclusiveProduct = lazy(() => import('../pages/protected/AddExclusiveProduct'))
const ChangeProduct = lazy(() => import('../pages/protected/ChangeProduct'))

const CreateProduct = lazy(() => import('../pages/protected/CreateProduct'))

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/add-digital-product',
    component: AddDigitalProduct,
  },
  {
    path: '/products/add-exclusive-product',
    component: AddExclusiveProduct,
  },
  {
    path: '/products/create-physical-product',
    component: CreateProduct,
  },
  {
    path: '/products/change-physical-product',
    component: ChangeProduct,
  },
  {
    path: '/products/add-physical-product',
    component: AddPhysicalProduct,
  },
  {
    path: '/analytics', 
    component: Charts, 
  },
  {
    path: '/community', 
    component: Community, 
  },
  {
    path: '/earn', 
    component: Earn, 
  },
  {
    path: '/add-way-to-earn', 
    component: AddWayToEarn, 
  },
  {
    path: '/follow-channel', 
    component: followChannel, 
  },
  {
    path: '/redeem', 
    component: Redeem, 
  },  
  {
    path: '/add-way-to-redeem', 
    component: AddWayToRedeem, 
  },
]

// const routes = [
//   {
//     path: '/dashboard', 
//     component: Dashboard, 
//   },
//   {
//     path: '/welcome', 
//     component: Welcome, 
//   },
//   {
//     path: '/leads',
//     component: Leads,
//   },
//   {
//     path: '/settings-team',
//     component: Team,
//   },
//   {
//     path: '/calendar',
//     component: Calendar,
//   },
//   {
//     path: '/transactions',
//     component: Transactions,
//   },
//   {
//     path: '/settings-profile',
//     component: ProfileSettings,
//   },
//   {
//     path: '/settings-billing',
//     component: Bills,
//   },
//   {
//     path: '/getting-started',
//     component: GettingStarted,
//   },
//   {
//     path: '/features',
//     component: DocFeatures,
//   },
//   {
//     path: '/components',
//     component: DocComponents,
//   },
//   {
//     path: '/integration',
//     component: Integration,
//   },
//   {
//     path: '/charts',
//     component: Charts,
//   },
//   {
//     path: '/404',
//     component: Page404,
//   },
//   {
//     path: '/blank',
//     component: Blank,
//   },
// ]

export default routes
