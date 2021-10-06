import { useContext, useEffect, useState } from "react"
// import { AppLog } from "../../context/logs/LogSesion";
import { dtsks, uptsks } from "../../context/others/data/pts"
import { GetTasks } from "../../context/others/data/tasks";
import "./tasksui.scss"


export default function TasksUi ({index, name, task, status, id}) {

    const [out, setOut] = useState('init');
    const [data, setData] = useContext(GetTasks);

    const cntnBtn = ()=>status==='Resolved'?<button onClick={del} className='text-yellow font-semibold underline'>Delete</button>:(
        <button onClick={resolve} className='text-blue font-semibold underline'>Resolve </button>
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


    function resolve () {
            let nt = data.filter(e=>e.id===id)
            nt = {...nt[0], isCompleted: true}
            setData([...data.filter(e=>e.id!==id), nt])
            return true
  
    }

    function unresolve () {
        let nt = data.filter(e=>e.id===id)
        nt = {...nt[0], isCompleted: false}
        setData([...data.filter(e=>e.id!==id), nt])
        return true

}

    useEffect(()=>{
        if(status === 'Resolved'){
            setOut('ended')
        }
        else {setOut('tasksui')}
    },[status])

    const btnCont = ()=>{if(status === 'Unresolved') {return 'OK'} else {return 'END'}}
    const ok = ()=>{
        if(status === 'Unresolved'){resolve(); uptsks([...data, {id, isCompleted:true,  student:name, task}])}
        else {unresolve()}}

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
                <button onClick={ok} className='w-full h-full font-bold'>{btnCont()}</button>
            </div>
    </div>)
}