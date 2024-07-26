import Input from "./Input";

export default function Project(){
    return <div className="mt-16 w-[35rem]">
        <menu className="flex justify-end items-center gap-8">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="rounded-md px-4 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50">Save</button></li>
        </menu>
        <div>
            <Input label="Title"/>
            <Input label="Description" textarea/>
            <Input label="Due Date"/>
        </div>
    </div>
}