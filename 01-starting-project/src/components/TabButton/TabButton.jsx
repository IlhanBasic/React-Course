export default function TabButton({children,onSelect}){
    return <li><button onClick={onSelect}>{children}</button></li>
    //mozes i samo children ako radis preko drestrukturisanja
}