import { useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from "../../common/headerSlice"


const INITIAL_INTEGRATION_LIST = [
    {
        name : "Cashback Points", 
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none"><path d="M39.1668 35.25C39.1668 39.5762 32.1526 43.0833 23.5002 43.0833C14.8477 43.0833 7.8335 39.5762 7.8335 35.25V27.3657C8.817 28.5732 10.2128 29.5764 11.7653 30.3527C14.8444 31.8922 18.9954 32.8021 23.5002 32.8021C28.005 32.8021 32.1559 31.8922 35.235 30.3527C36.7876 29.5764 38.1833 28.5732 39.1668 27.3657V35.25Z" fill="#1C274C"/>
                    <path d="M23.5002 21.0521C28.005 21.0521 32.1559 20.1422 35.235 18.6027C36.7876 17.8264 38.1833 16.8232 39.1668 15.6157V23.5C39.1668 24.4792 35.6698 26.6159 33.9213 27.7253C31.3302 29.0209 27.6478 29.8646 23.5002 29.8646C19.3525 29.8646 15.6701 29.0209 13.079 27.7253C10.771 26.5713 7.8335 24.4792 7.8335 23.5V15.6157C8.817 16.8232 10.2128 17.8264 11.7653 18.6027C14.8444 20.1422 18.9954 21.0521 23.5002 21.0521Z" fill="#1C274C"/>
                    <path d="M33.9213 15.9753C31.3302 17.2709 27.6478 18.1146 23.5002 18.1146C19.3525 18.1146 15.6701 17.2709 13.079 15.9753C12.071 15.5804 9.8043 14.325 8.2281 12.2971C7.95989 11.952 7.84477 11.5121 7.9116 11.0802C7.95654 10.7898 8.01914 10.4907 8.09941 10.3053C9.4553 6.66917 15.8348 3.91666 23.5002 3.91666C31.1655 3.91666 37.545 6.66917 38.9009 10.3053C38.9812 10.4907 39.0438 10.7898 39.0887 11.0802C39.1556 11.5121 39.0404 11.952 38.7722 12.2971C37.196 14.325 34.9293 15.5804 33.9213 15.9753Z" fill="#1C274C"/>
                </svg>, 
        isActive : true, 
        description : "1 point for every 1 USD spent"
    },
    {
        name : "Referrals", 
        icon : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                    <path d="M30.8543 14.6875C30.8543 18.473 27.7856 21.5417 24.0002 21.5417C20.2147 21.5417 17.146 18.473 17.146 14.6875C17.146 10.9021 20.2147 7.83334 24.0002 7.83334C27.7856 7.83334 30.8543 10.9021 30.8543 14.6875Z" fill="#3D4057"/>
                    <path d="M35.75 32.3125C35.75 36.098 30.4893 39.1667 24 39.1667C17.5107 39.1667 12.25 36.098 12.25 32.3125C12.25 28.5271 17.5107 25.4583 24 25.4583C30.4893 25.4583 35.75 28.5271 35.75 32.3125Z" fill="#3D4057"/>
                    <path d="M14.4472 9.79166C14.7947 9.79166 15.134 9.82576 15.4616 9.89068C14.6635 11.3083 14.2082 12.9447 14.2082 14.6875C14.2082 16.3878 14.6416 17.9869 15.4039 19.3804C15.0942 19.4381 14.7744 19.4683 14.4472 19.4683C11.6773 19.4683 9.43184 17.3021 9.43184 14.63C9.43184 11.9578 11.6773 9.79166 14.4472 9.79166Z" fill="#3D4057"/>
                    <path d="M11.1675 37.1808C10.0554 35.8514 9.31234 34.2199 9.31234 32.3125C9.31234 30.4634 10.0106 28.8736 11.0666 27.5669C7.33657 27.8562 4.4165 29.8963 4.4165 32.37C4.4165 34.867 7.38789 36.9221 11.1675 37.1808Z" fill="#3D4057"/>
                    <path d="M33.7915 14.6875C33.7915 16.3878 33.3581 17.9869 32.5958 19.3804C32.9055 19.4381 33.2253 19.4683 33.5525 19.4683C36.3224 19.4683 38.5679 17.3021 38.5679 14.63C38.5679 11.9578 36.3224 9.79166 33.5525 9.79166C33.205 9.79166 32.8657 9.82576 32.5381 9.89068C33.3362 11.3083 33.7915 12.9447 33.7915 14.6875Z" fill="#3D4057"/>
                    <path d="M36.8322 37.1808C40.6118 36.9221 43.5832 34.867 43.5832 32.37C43.5832 29.8963 40.6631 27.8562 36.9331 27.5669C37.9891 28.8736 38.6874 30.4634 38.6874 32.3125C38.6874 34.2199 37.9443 35.8514 36.8322 37.1808Z" fill="#3D4057"/>
                </svg>, 
        isActive : false, 
        description : "Customer gets 10% Off - Friend gets 10% Off"
    },
    // {name : "Linkedin", icon : "https://cdn-icons-png.flaticon.com/512/174/174857.png", isActive : true, description : "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps."},
    // {name : "Google Ads", icon : "https://cdn-icons-png.flaticon.com/512/2301/2301145.png", isActive : false, description : "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings"},
    // {name : "Gmail", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", isActive : false, description : "Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide."},
    // {name : "Salesforce", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968880.png", isActive : false, description : "It provides customer relationship management software and applications focused on sales, customer service, marketing automation."},
    // {name : "Hubspot", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968872.png", isActive : false, description : "American developer and marketer of software products for inbound marketing, sales, and customer service."},
]

function Integration(){

    const dispatch = useDispatch()

    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST)


    const updateIntegrationStatus = (index) => {
        let integration = integrationList[index]
        setIntegrationList(integrationList.map((i, k) => {
            if(k===index)return {...i, isActive : !i.isActive}
            return i
        }))
        dispatch(showNotification({message : `${integration.name} ${integration.isActive ? "disabled" : "enabled"}` , status : 1}))
    }


    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                integrationList.map((i, k) => {
                    return(
                        <TitleCard key={k} topMargin={"mt-2"}> 
                           <div className="w-full h-full flex items-start justify-between">
                            <div className="flex flex-col gap-2">
                                    {i.icon}
                                    <div className={`text-xl font-semibold dark:text-slate-500`}>
                                        {i.name}
                                    </div>
                                    {/* <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" /> */}
                                    {i.description}
                                </div>
                                <div className="mt-6 text-right">
                                <input
                                    type="checkbox"
                                    className={`toggle toggle-lg ${i.isActive ? 'bg-accent' : 'bg-slate-500'}`}
                                    checked={i.isActive}
                                    onChange={() => updateIntegrationStatus(k)}
                                />
                                </div>
                           </div>
                            
                        </TitleCard>
                    )
                
                })
            }
            </div>
        </>
    )
}

export default Integration