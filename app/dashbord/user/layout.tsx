
const layoutUserPage = (
    {children} : {children : React.ReactNode}
) =>{

    return(
        <div style={{backgroundColor : "chocolate"}}>
            <h1>This is Uer LayoutPAge</h1>
            <div>
                {children}
            </div>
        </div>
    )


}
export default layoutUserPage;