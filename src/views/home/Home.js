import { useContext, useEffect, useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import {AppLog} from "../../context/logs/LogSesion"
import "./home.styles.scss"
import "./animation.css"
import TasksUi from "../../components/tasksUi/tasksui"
import { GetTasks } from "../../context/others/data/tasks"
import { settsks } from "../../context/others/data/pts"
import LoaderGeneral from "../../components/loaders/loaderGlobal"

const Home = ({charging})=>{

    const [anim, setAnim ] = useState('');
    const [regs, setRegs ]= useState({task:''})
    const [complete, setComplete] = useState(true)

    const history = useHistory()
    const [log] = useContext(AppLog)

    const objC = {
        isCompleted:true,
        student:log.name,
        task:regs.task
    }

    useEffect(
        ()=>{
            if(charging){
                setAnim('0')
            }
        },[charging]
    )

    const [data, setData] = useContext(GetTasks);
    const [taskings, setTaskings] = useState('')

    useEffect(()=>{
        if(data){setTaskings(data)}
    },[data])

    function AddT () {
        setData([...data, {...objC}])
        settsks(objC)
    }

    const ctta = taskings   ?taskings.filter(e=>e.isCompleted !== complete).map((e,i)=>{
        const result = ()=>e.isCompleted === true?'Resolved':'Unresolved'
            return  <TasksUi index={i+1} name={log.name} task={e.task} id={e.id} status={result()} key={e.id}/>
    }):<div className='w-screen flex justify-center items-center h-64 bg-transparent'><LoaderGeneral/></div>

    return (
        log.onSesion?(
            <div className='w-full min-h-full md:p-3 p-1 all-page'>
                <div id='animation' style={{top:anim}} className='h-hd-tsks'>
                    <div className='items-laterals'><button className='logo-btn md:h-12 h-8' onClick={()=>{history.goBack()}}></button></div>
                    <form className='form-add'>
                        <label className='add-task rounded md:w-1/2 w-full'>
                            <div className='img-ux'></div>
                            <input value={regs.task} onChange={e=>{setRegs({task:e.target.value})}} className='input-task md:w-80 w-36 '/>
                            <button onClick={AddT} type='button' className='btn-task rounded'>Add</button>
                        </label>
                    </form>
                    <div className='items-laterals'><button className='config-btn md:h-12 h-8' onClick={()=>{console.log('config')}}></button></div>
                </div>
                <div className='w-full flex justify-center items-center mt-2 h-12 bg-transparent rounded'>
                    <button className='p-3 bg-yellow font-bold m-3 rounded' onClick={()=>{setComplete(true)}}>Pending Tasks </button>
                    <button className='p-3 bg-green font-bold m-3 rounded' onClick={()=>{setComplete(false)}}>See Completed</button>
                </div>
                <section className='w-screen heigth section-tasks p-3'>
                    {ctta}
                </section>
            </div>
        ):<Redirect to='/'/>
    )
}

export default Home