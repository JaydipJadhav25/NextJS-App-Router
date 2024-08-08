


const layoutdashbord  = (
    {children} : { children : React.ReactNode}
) =>{

    return (
        <div style={{backgroundColor :  "blueviolet"}}>
           <nav>
            <h1>Navbar</h1>
           </nav>
             <div>
                {children }
             </div>
             <footer>
                <h1>Footer</h1>
             </footer>
        </div>
    )


}
export default layoutdashbord;