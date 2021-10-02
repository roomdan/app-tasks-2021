import { useContext, useEffect, useState } from "react"
// import { useReducer } from "react"
import { Redirect, useHistory } from "react-router-dom"
import {AppLog} from "../../context/logs/LogSesion"
import "./home.styles.scss"
import "./animation.css"

// const initialState = {
//     go:true
// }

const Home = ({charging})=>{

    const [anim, setAnim ] = useState('');

    const history = useHistory()
    const [log] = useContext(AppLog)

    // const reducer = (state, action)=>{
    //     switch (action.type){
    //         case 'GO':
    //             return state.go = false
    //         default:
    //             return state.go = true
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(
        ()=>{
            if(charging){
                setAnim('0')
            }
        },[charging]
    )

    return (
        log.onSesion?(
            <div className='w-screen h-screen  md:p-3 p-1 all-page'>
                <div id='animation' style={{top:anim}} className='h-hd-tsks'>
                    <div className='items-laterals'><button className='logo-btn' onClick={()=>{history.goBack()}}></button></div>
                    <form className='form-add'>
                        <label className='add-task rounded md:w-1/2 w-full'>
                            <div className='img-ux'></div>
                            <input className='input-task md:w-80 w-36 '/>
                            <button type='button' className='btn-task'>Add</button>
                        </label>
                    </form>
                    <div className='items-laterals'><button className='config-btn' onClick={()=>{console.log('config')}}></button></div>
                </div>
                <section className='w-full section-tasks'></section>
            </div>
        ):<Redirect to='/'/>
    )
}

export default Home