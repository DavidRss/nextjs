import HomeIcon from '../assets/icons/Home.svg';
import NotesIcon from '../assets/icons/Notes Minimalistic.svg';
import PieIcon from '../assets/icons/Pie Chart 2.svg';
import CommunityIcon from '../assets/icons/Users Group Rounded.svg';

const iconClasses = `h-6 w-6`

const routes = [
  {
    path: '/app/dashboard', 
    icon: <img src={HomeIcon} alt="Home Icon" className={iconClasses} />,
    name: 'Home', 
  },
  {
    icon: <img src={NotesIcon} alt="Campaign Icon" className={iconClasses} />,
    name: 'Campaign', 
    submenu : [
      {
        path: '/app/shop',
        name: 'Shop page',
      },
      {
        path: '/app/products', 
        name: 'Products',
      },
    ]
  },
  {
    path: '/app/analytics', 
    icon: <img src={PieIcon} alt="Analytics Icon" className={iconClasses} />,
    name: 'Analytics', 
  },
  {
    path: '/app/community', 
    icon: <img src={CommunityIcon} alt="Community Icon" className={iconClasses} />,
    name: 'Community', 
    submenu : [
      {
        path: '/app/earn',
        name: 'Way to earn',
      },
      {
        path: '/app/redeem', 
        name: 'Way to redeem',
      },
    ]
  },  
]

export default routes




/** Icons are imported separatly to reduce build time */
// import BellIcon from '@heroicons/react/24/outline/BellIcon'
// import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
// import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
// import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
// import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
// import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
// import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
// import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
// import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
// import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
// import UserIcon from '@heroicons/react/24/outline/UserIcon'
// import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
// import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
// import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
// import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
// import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
// import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
// import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
// import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
