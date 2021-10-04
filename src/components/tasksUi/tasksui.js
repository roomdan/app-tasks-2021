import { useContext, useEffect, useState } from "react"
// import { AppLog } from "../../context/logs/LogSesion";
import { dtsks } from "../../context/others/data/pts"
import { GetTasks } from "../../context/others/data/tasks";
import "./tasksui.scss"


export default function TasksUi ({index, name, task, status, id}) {

    const [out, setOut] = useState('init');
    const [data, setData] = useContext(GetTasks);
    // const [user] = useContext(AppLog)
    const [btn, setBtn] = useState({s:false, cn:'OK'})

    const cntnBtn = ()=>status==='Resolved'?<button onClick={del} className='text-yellow font-semibold underline'>Delete</button>:(
        <button onClick={resolve} className='text-blue font-semibold underline'>Resolve Now.</button>
    )

    function del (){
        const act = ()=>{
           setData(data.filter(e=>e.id!==id));
           return true
        }
        if(act()){
            dtsks(id)
        }
    }

    //actualizate task
    // const objC = {
    //     isCompleted:true,
    //     student:user.name,
    //     task:task
    // }



    function resolve () {
        const act = ()=>{
            let nt = data.filter(e=>e.id===id)
            nt = {...nt[0], isCompleted: true}
            setData([...data.filter(e=>e.id!==id), nt])
            return true
        }
        if(act()) {
            act()
            setBtn({s:true, cn:'End'})
        }
    }

    function Unresolve () {
        const act = ()=>{
            let nt = data.filter(e=>e.id===id)
            nt = {...nt[0], isCompleted: true}
            setData([...data.filter(e=>e.id!==id), nt])
            return true
        }
        if(act()) {
            act()
        }
    }


    const OnOk = ()=>{
        if(!btn.s) {
            setBtn({s:true, cn:'End'})
            resolve()
        }
        else {
            setBtn({s:false, cn:'OK'})
            Unresolve()
        }
    }

    useEffect(()=>{
        if(status === 'Resolved'){
            setOut('ended')
        }
        else {setOut('tasksui')}
    },[status])

    return (<div className={`${out} md:w-1/2 w-full`}>
            <div className='cntn-tsk-inf'>
                <div className='cntn-tsk-header pl-1'>
                    <div className='cntn-tsk-num'><p>{index}</p></div>
                    <div className='pt-1'><p>{name} this task is {status}. {cntnBtn()}</p></div>
                </div>
                <div className='cntn-tsk-body pl-10 pb-1'>
                    <p>{task}</p><button className='m-2 text-red font-semibold btn-edit'></button>
                </div>
            </div>
            <div className='btn-resolve'>
                <button onClick={OnOk} className='w-full h-full font-bold'>{btn.cn}</button>
            </div>
    </div>)
}