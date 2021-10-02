import { useContext, useEffect, useState } from "react"
import { dtsks } from "../../context/others/data/pts"
import { GetTasks } from "../../context/others/data/tasks";
import "./tasksui.scss"

export default function TasksUi ({index, name, task, status, id}) {

    const [out, setOut] = useState('init');
    const [data, setData] = useContext(GetTasks)

    const cntnBtn = ()=>status==='Resolved'?<button onClick={del} className='text-yellow font-semibold underline'>Delete</button>:(
        <button onClick={resolve} className='text-blue font-semibold underline'>Resolved Now.</button>
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
        const act = ()=>{
            setData([...data, data.filter(e=>e.id!==id) ])
        }
        act()
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
                <button className='font-bold'>OK</button>
            </div>
    </div>)
}