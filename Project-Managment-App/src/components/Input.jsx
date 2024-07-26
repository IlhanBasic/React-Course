export default function Input({label,textarea,...props}){
    const classes = 'bg-stone-200 text-stone-600 rounded-sm p-1 border-b-2 border-stone-300 w-full focus:border-stone-600 focus:outline-none';
    return <p className="flex flex-col gap-1 my-4">
        <label className="font-bold text-stone-500 uppercase">{label}</label>
        {textarea ? <textarea className={classes} {...props}/> : <input className={classes} {...props}/>}
    </p>
}