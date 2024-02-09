/* eslint-disable no-empty-pattern */


function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow hover:shadow-md transition-shadow">
            <div className="stat">
                <div className="stat-title">Amount to be Collected</div>
                <div className="stat-value text-accent">$25,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Users</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Cash in hand</div>
                <div className="stat-value text-accent">$5,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats