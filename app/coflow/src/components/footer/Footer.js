import React from 'react'
import { Link } from 'react-router-dom';
// import smth from '';

export default function Footer() {
  return (
    <footer className='w-full text-white flex flex-col items-center bg-black bg-opacity-45'>
        <div className='w-full flex flex-col gap-5 2xl:flex-row items-center max-w-8xl 3xl:gap-40 pb-11 pt-14 px-4 3xl:px-0'>
        <div className='flex flex-col gap-8 items-center w-fit px-4 3xl:px-0'>
            <h1 className='text-white text-4xl font-black mb-6 xl:mb-0'>Coflow</h1>
            <div className='flex flex-col gap-1'>
                <span className='text-xl font-bold whitespace-nowrap'>© 2023, Coflow</span>
                <span className='text-base font-semibold whitespace-nowrap'>Powered by Shopify</span>
            </div>
        </div>
        <div className='flex flex-col w-full items-center 2xl:items-start px-4 3xl:px-0'>
            <ul className='flex items-center w-full xl:gap-10 h-full pb-7 max-w-fit border-b border-white gap-8 flex-wrap md:flex-nowrap'>
                <Link to="/about" className='h-full'>
                    <li className={`text-white hover:text-main nav__item hover:border-b-8 border-main rounded-b text-2xl font-semibold transition-all cursor-pointer  h-full sm:text-left`}>About</li>
                </Link>
                <span style={{color: '#595959'}}>•</span>
                <Link to="/about" className='h-full'>
                    <li className={`text-white hover:text-main nav__item hover:border-b-8 border-main rounded-b text-2xl font-semibold transition-all cursor-pointer h-ful sm:text-left`}>Merch</li>
                </Link>
                <span style={{color: '#595959'}}>•</span>
                <Link to="/leaderboard" className='h-full'>
                    <li className={`text-white hover:text-main nav__item hover:border-b-8 border-main rounded-b text-2xl font-semibold transition-all cursor-pointer  h-full sm:text-left`}>Leaderboard</li>
                </Link>
                <span style={{color: '#595959'}}>•</span>
                <Link to="/chat" className='h-full'>
                    <li className={`text-white hover:text-main nav__item hover:border-b-8 border-main rounded-b text-2xl font-semibold transition-all cursor-pointer  h-full sm:text-left`}>Chat</li>
                </Link>
                <span style={{color: '#595959'}}>•</span>
                <Link to="/reward" className='h-full'>
                    <li className={`text-white hover:text-main nav__item hover:border-b-8 border-main rounded-b text-2xl font-semibold transition-all cursor-pointer  h-full sm:text-left`}>Rewards</li>
                </Link>
            </ul>
            <div className='flex items-center gap-10 pt-6 max-w-fit'>
                <span className='text-base font-semibold cursor-pointer transition-colors hover:text-main'>
                    Privacy Policy
                </span>
                <span className='text-base font-semibold cursor-pointer transition-colors hover:text-main'>
                    Terms & Conditions
                </span>
            </div>
        </div>
        <div className='flex items-center gap-5 px-4 3xl:px-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className='hover:scale-105 transition-all cursor-pointer hover:shadow-lg hover:shadow-main/50 rounded-full'>
                <rect width="60" height="60" rx="30" fill="#3F3F3F"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8373 23.1599C40.1779 23.5111 40.4198 23.9459 40.5386 24.4205C40.8559 26.1792 41.0098 27.9634 40.9986 29.7505C41.0049 31.5108 40.851 33.2681 40.5386 35.0005C40.4198 35.4751 40.1779 35.9099 39.8373 36.2611C39.4966 36.6122 39.0694 36.8673 38.5986 37.0005C36.8786 37.4605 29.9986 37.4605 29.9986 37.4605C29.9986 37.4605 23.1186 37.4605 21.3986 37.0005C20.9374 36.8743 20.5166 36.6313 20.1768 36.295C19.8369 35.9586 19.5896 35.5403 19.4586 35.0805C19.1414 33.3218 18.9874 31.5375 18.9986 29.7505C18.9899 27.9768 19.1438 26.206 19.4586 24.4605C19.5774 23.9859 19.8193 23.5511 20.16 23.1999C20.5006 22.8487 20.9279 22.5937 21.3986 22.4605C23.1186 22.0005 29.9986 22.0005 29.9986 22.0005C29.9986 22.0005 36.8786 22.0005 38.5986 22.4205C39.0694 22.5537 39.4966 22.8087 39.8373 23.1599ZM28.7941 32.4257C28.3274 32.6911 27.748 32.354 27.748 31.8172V27.6839C27.748 27.1471 28.3274 26.8101 28.7941 27.0755L32.4281 29.1421C32.9 29.4105 32.9 30.0907 32.4281 30.3591L28.7941 32.4257Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className='hover:scale-105 transition-all cursor-pointer hover:shadow-lg hover:shadow-main/50 rounded-full'>
                <rect width="60" height="60" rx="30" fill="#3F3F3F"/>
                <path d="M35.998 20.0005H32.998C31.672 20.0005 30.4002 20.5273 29.4625 21.465C28.5248 22.4026 27.998 23.6744 27.998 25.0005V28.0005H24.998V32.0005H27.998V40.0005H31.998V32.0005H34.998L35.998 28.0005H31.998V25.0005C31.998 24.7353 32.1034 24.4809 32.2909 24.2934C32.4785 24.1058 32.7328 24.0005 32.998 24.0005H35.998V20.0005Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className='hover:scale-105 transition-all cursor-pointer hover:shadow-lg hover:shadow-main/50 rounded-full'>
                <rect width="60" height="60" rx="30" fill="#3F3F3F"/>
                <path d="M39.998 22.0095C39.1275 22.6118 38.1636 23.0724 37.1435 23.3737C36.596 22.7562 35.8684 22.3186 35.059 22.12C34.2496 21.9213 33.3976 21.9713 32.6181 22.2631C31.8387 22.5549 31.1694 23.0745 30.7008 23.7515C30.2322 24.4286 29.9869 25.2305 29.998 26.0488V26.9404C28.4004 26.9811 26.8174 26.6335 25.3899 25.9288C23.9624 25.224 22.7347 24.1839 21.8162 22.9011C21.8162 22.9011 18.1799 30.9262 26.3617 34.493C24.4894 35.7395 22.2591 36.3645 19.998 36.2763C28.1799 40.7347 38.1799 36.2763 38.1799 26.022C38.179 25.7736 38.1547 25.5259 38.1071 25.2819C39.035 24.3844 39.6897 23.2513 39.998 22.0095Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className='hover:scale-105 transition-all cursor-pointer hover:shadow-lg hover:shadow-main/50 rounded-full'>
                <rect width="60" height="60" rx="30" fill="#3F3F3F"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.998 21.0005C22.7889 21.0005 20.998 22.7913 20.998 25.0005V35.0005C20.998 37.2096 22.7889 39.0005 24.998 39.0005H34.998C37.2072 39.0005 38.998 37.2096 38.998 35.0005V25.0005C38.998 22.7913 37.2072 21.0005 34.998 21.0005H24.998ZM18.998 25.0005C18.998 21.6868 21.6843 19.0005 24.998 19.0005H34.998C38.3118 19.0005 40.998 21.6868 40.998 25.0005V35.0005C40.998 38.3142 38.3118 41.0005 34.998 41.0005H24.998C21.6843 41.0005 18.998 38.3142 18.998 35.0005V25.0005Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.482 26.9895C29.8579 26.8969 29.2204 27.0035 28.6603 27.2942C28.1002 27.5848 27.646 28.0446 27.3623 28.6083C27.0786 29.1719 26.9799 29.8107 27.0801 30.4336C27.1803 31.0566 27.4745 31.6322 27.9207 32.0784C28.3669 32.5245 28.9424 32.8187 29.5654 32.9189C30.1884 33.0192 30.8271 32.9204 31.3908 32.6367C31.9544 32.353 32.4142 31.8988 32.7049 31.3387C32.9955 30.7786 33.1021 30.1412 33.0095 29.517C32.9151 28.8803 32.6185 28.2908 32.1633 27.8357C31.7082 27.3806 31.1187 27.0839 30.482 26.9895ZM27.7391 25.5189C28.6726 25.0345 29.7351 24.8569 30.7754 25.0111C31.8366 25.1685 32.819 25.6629 33.5775 26.4215C34.3361 27.1801 34.8306 28.1625 34.9879 29.2236C35.1422 30.2639 34.9645 31.3264 34.4801 32.2599C33.9957 33.1934 33.2293 33.9504 32.2899 34.4232C31.3505 34.896 30.286 35.0606 29.2476 34.8935C28.2093 34.7265 27.2501 34.2362 26.5065 33.4926C25.7628 32.7489 25.2726 31.7897 25.1055 30.7514C24.9384 29.7131 25.103 28.6485 25.5758 27.7091C26.0486 26.7697 26.8056 26.0033 27.7391 25.5189Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7228 24.9471C35.7247 24.9462 35.7265 24.9452 35.7283 24.9443C35.8199 24.8968 35.8944 24.8222 35.9419 24.7308C35.9428 24.729 35.9437 24.7271 35.9447 24.7253C35.991 24.6332 36.0078 24.529 35.9926 24.4271C35.9923 24.4251 35.992 24.4231 35.9917 24.4211C35.975 24.3172 35.926 24.2213 35.8516 24.1469C35.7772 24.0726 35.6813 24.0235 35.5775 24.0068C35.5755 24.0065 35.5734 24.0062 35.5714 24.0059C35.4695 23.9908 35.3654 24.0075 35.2733 24.0539C35.2714 24.0548 35.2696 24.0557 35.2678 24.0567C35.1763 24.1041 35.1017 24.1787 35.0542 24.2702C35.0533 24.272 35.0524 24.2739 35.0514 24.2757C35.0051 24.3677 34.9883 24.4718 35.0035 24.5738C35.0038 24.5759 35.0041 24.5779 35.0044 24.5799C35.0211 24.6837 35.0701 24.7796 35.1445 24.854C35.2189 24.9284 35.3148 24.9774 35.4186 24.9941C35.4206 24.9945 35.4227 24.9948 35.4247 24.9951C35.5267 25.0102 35.6308 24.9934 35.7228 24.9471ZM34.8072 23.1691C35.0872 23.0237 35.406 22.9704 35.7181 23.0167C36.0364 23.0639 36.3311 23.2123 36.5587 23.4398C36.7863 23.6674 36.9346 23.9621 36.9818 24.2805C37.0281 24.5926 36.9748 24.9113 36.8295 25.1913C36.6842 25.4714 36.4543 25.6985 36.1724 25.8403C35.8906 25.9822 35.5712 26.0316 35.2597 25.9814C34.9482 25.9313 34.6605 25.7842 34.4374 25.5611C34.2143 25.3381 34.0672 25.0503 34.0171 24.7388C33.967 24.4273 34.0163 24.1079 34.1582 23.8261C34.3 23.5443 34.5271 23.3144 34.8072 23.1691Z" fill="white"/>
            </svg>
        </div>   
        </div>
        <div 
            className='w-full display justify-center flex items-center py-8 px-4 xl:px-0'
            style={{
                background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                boxShadow: ' 0px 4px 0px 0px #196700',
            }}
        >
            <div className='max-w-8xl w-full justify-between flex flex-col xl:flex-row items-center gap-5 xl:gap-0'>
                <div className='flex items-center gap-5 flex-col md:flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="39" viewBox="0 0 48 39" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1432 22.425C15.1432 17.5787 19.1083 13.65 23.9996 13.65C28.8909 13.65 32.856 17.5787 32.856 22.425C32.856 27.2713 28.8909 31.2 23.9996 31.2C19.1083 31.2 15.1432 27.2713 15.1432 22.425ZM23.9996 17.55C21.2822 17.55 19.0794 19.7326 19.0794 22.425C19.0794 25.1174 21.2822 27.3 23.9996 27.3C26.717 27.3 28.9198 25.1174 28.9198 22.425C28.9198 19.7326 26.717 17.55 23.9996 17.55Z" fill="#3F3F3F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9677 1.95C25.9677 0.873045 25.0866 0 23.9996 0C22.9127 0 22.0315 0.873045 22.0315 1.95V5.92946C19.9124 6.10066 17.9043 6.54005 16.02 7.16493L14.9985 4.38424C14.6267 3.37223 13.4974 2.85044 12.476 3.21878C11.4546 3.58712 10.9279 4.70611 11.2997 5.71812L12.3795 8.6575C8.64155 10.4869 5.53657 12.935 3.19995 15.1398C-1.06665 19.1656 -1.06665 25.6844 3.19995 29.7102C7.65403 33.9129 14.9 39 24 39C33.1 39 40.346 33.9129 44.8 29.7102C49.0666 25.6844 49.0666 19.1656 44.8001 15.1398C42.4631 12.9347 39.3576 10.4862 35.619 8.65676L36.6986 5.71804C37.0703 4.70603 36.5437 3.58704 35.5223 3.2187C34.5009 2.85036 33.3715 3.37215 32.9997 4.38416L31.9784 7.1644C30.0944 6.53973 28.0865 6.1005 25.9677 5.92939V1.95ZM24 9.75C16.391 9.75 10.0803 14.0332 5.91448 17.964C3.27676 20.4529 3.27676 24.3971 5.91448 26.886C10.0803 30.8168 16.391 35.1 24 35.1C31.609 35.1 37.9197 30.8168 42.0855 26.886C44.7232 24.3971 44.7232 20.4529 42.0855 17.964C37.9197 14.0332 31.609 9.75 24 9.75Z" fill="#3F3F3F"/>
                    </svg>
                    <span className='text-center md:text-left text-white'>
                        Our website uses cookies to ensure you have the best experience possible!
                    </span>
                    <Link to="/about" className='pb-1.5 border-b text-white'>Learn more</Link>
                </div> 
                <div className='flex gap-5 items-center'>
                    <button className='py-4 px-6 rounded-full hover:scale-105 transition-all bg-white text-main'>Accept Cookies</button>
                    <button className='bg-transparent border border-white text-white py-4 px-6 rounded-full hover:scale-105 transition-all'>Decline Cookies</button>
                </div>    
            </div>
        </div>
    </footer>
    
  )
}
