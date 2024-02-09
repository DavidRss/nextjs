import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {name : "Nick Carrots", date : "Feb 2nd", value : 180},
    {name : "Nick Carrots", date : "Feb 2nd", value : -80},
    {name : "Nick Carrots", date : "Feb 2nd", value : 180},
    {name : "Nick Carrots", date : "Feb 2nd", value : -80},
    {name : "Nick Carrots", date : "Feb 2nd", value : 180},
    {name : "Nick Carrots", date : "Feb 2nd", value : 180},
]

const getValStyle = (value) => {
    if (value >= 0) {
      return <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M20.6277 14.7276L12.0208 23.3345L10.6066 21.9203L19.2135 13.3134L11.6277 13.3134L11.6277 11.3137H22.6274V22.3135L20.6277 22.3135V14.7276Z" fill="#98D77B"/>
    </svg>;
    } else {
      return <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M19.2724 20.6277L10.6655 12.0208L12.0797 10.6066L20.6866 19.2135L20.6866 11.6277L22.6863 11.6277L22.6863 22.6274L11.6865 22.6274L11.6865 20.6277L19.2724 20.6277Z" fill="#D77B7B"/>
      </svg>;
    }
};

function UserChannels(){
    return(
        <TitleCard title={"Transactions"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case"></th>
                        <th className="normal-case"></th>
                    </tr>
                    </thead> */}
                    <tbody>
                        {
                            userSourceData.map((u) => {
                                return(
                                    <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                                        <td>{u.name}</td>
                                        <td>{u.date}</td>
                                        <td className="flex items-center">{getValStyle(u.value)} {`${u.value} USD`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels