import Footer from "./footer"
import Header from "./header"

export default function main({children}){
    return(
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}