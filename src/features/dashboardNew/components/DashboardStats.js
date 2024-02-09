function DashboardStats({title, icon, value, description, colorIndex}){

    const COLORS = ["accent", "accent"]

    const getDescStyle = () => {
        if(description.includes("↗︎"))return "font-bold text-green-700 dark:text-green-300"
        else if(description.includes("↙"))return "font-bold text-rose-500 dark:text-red-400"
        else return ""
    }

    return(
        <div className="stats shadow">
            <div className="stat gap-4">
                <div className={`stat-figure dark:text-primary text-${COLORS[colorIndex%2]}`}></div>
                <div className="stat-title font-semibold text-lg dark:text-slate-500">{title}</div>
                <div className={`stat-value dark:text-accent text-${COLORS[colorIndex%2]} text-5xl`}>{value}</div>
                <div className={"stat-desc text-primary dark:text-slate-500 " + getDescStyle()}>{description}</div>
            </div>
        </div>
    )
}

export default DashboardStats