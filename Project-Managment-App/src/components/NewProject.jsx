import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
    }
    return <div className="mt-16 w-[35rem]">
        <menu className="flex justify-end items-center gap-8">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="rounded-md px-4 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea/>
            <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
    </div>
}