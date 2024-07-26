import NoProjectImg from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected(){

    return <div className="mt-24 text-center w-2/3">
        <img src={NoProjectImg} className="object-contain h-16 w-16 mx-auto"/>
        <h2 className="font-bold my-4 text-stone-500 text-xl">No project selected</h2>
        <p className='text-stone-400 mb-4'>Select the project or create a new one</p>
        <p className='mt-8'>
            <Button>Create a new project</Button>
        </p>
    </div>
}