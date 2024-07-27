import NewTask from "./NewTask"
export default function Tasks({tasks,onAdd,onDelete}){
    return (
        <section>
            <h2 className="text-2xl text-stone-700 mb-4 text-bold">Tasks</h2>
            <NewTask onAdd={onAdd}/>
           {tasks.length===0 &&  <p className="text-stone-800 mb-4">
                This project does not have any tasks yet !
            </p>}
            {tasks.length>0 && <ul className="p-4 mt-8 rounded-sm bg-stone-100">
                {tasks.map(task=><li key={task.id} className="my-4 flex justify-between">
                    <span>{task.text}</span>
                    <button className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>)}
                </ul>}
        </section>
    )
}