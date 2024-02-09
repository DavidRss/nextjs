function DashboardStats({title, icon, value, description, colorIndex}){

    const COLORS = ["accent", "accent"]

    const getDescStyle = () => {
        if(description.includes("↗︎"))return "font-bold text-green-500 dark:text-green-300"
        else if(description.includes("↙"))return "font-bold text-red-500 dark:text-red-400"
        else return ""
    }

    return(
        <div className="stats shadow hover:shadow-md transition-shadow">
            <div className="stat">
                <div className={`stat-figure dark:text-accent text-${COLORS[colorIndex%2]}`}>{icon}</div>
                <div className="stat-title dark:text-slate-300">{title}</div>
                <div className={`stat-value dark:text-accent text-${COLORS[colorIndex%2]}`}>{value}</div>
                <div className={"stat-desc  " + getDescStyle()}>{description}</div>
            </div>
        </div>
    )
}

export default DashboardStats