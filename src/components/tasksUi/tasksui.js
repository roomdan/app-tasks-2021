import "./tasksui.scss"

export default function TasksUi ({index, name, task, status}) {


    return (<div className='tasksui md:w-1/2 w-full'>
            <div className='cntn-tsk-inf'>
                <div className='cntn-tsk-header pl-1'>
                    <div className='cntn-tsk-num'><p>{index}</p></div>
                    <div className='cntn-tsk-'><p>{name} this task is {status}. <a className='text-blue font-semibold underline' href='/resolve'>Resolve now</a></p></div>
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