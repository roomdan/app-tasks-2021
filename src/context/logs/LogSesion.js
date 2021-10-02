import { createContext, useState } from "react"

export default function LogIn (props) {

    
    const user = {
        name:'',
        pass:'',
        onSesion:false
    }
    const [log, setLog] = useState(user)

    return (
        <AppLog.Provider value={[log, setLog]}>
            {props.children}
        </AppLog.Provider>
    )
}

export const AppLog = createContext()