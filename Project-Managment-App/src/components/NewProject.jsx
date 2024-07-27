import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle === "" ||
            enteredDescription === "" ||
            enteredDueDate === "") {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return
    <>
        <Modal ref={modal} ButtonCaption="Close">
            <h2>Invali input</h2>
            <p>Oops , you must enter some in inputs</p>
            <p>Please make sure that you enter all inputs correctly</p>
        </Modal>
        <div className="mt-16 w-[35rem]">
            <menu className="flex justify-end items-center gap-8">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="rounded-md px-4 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    </>

}