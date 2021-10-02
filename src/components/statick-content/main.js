import GeneralHeader from "./header"
import GeneralFooter from "./footer"

export default function HeaderAndFooter ({children}){

    return (
        <>
        <GeneralHeader/>
        {children}
        <GeneralFooter/>
        </>
    )
}