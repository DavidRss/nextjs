 function Subtitle({styleClass, children}){
    return(
        <div className={`text-xl font-semibold dark:text-slate-500 ${styleClass}`}>{children}</div>
    )
}

export default Subtitle