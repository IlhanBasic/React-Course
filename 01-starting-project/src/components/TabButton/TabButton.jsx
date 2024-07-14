export default function TabButton({children,onSelect,isSelect}){
    return <li><button className={isSelect?'active':null} onClick={onSelect}>{children}</button></li>
    //mozes i samo children ako radis preko drestrukturisanja
}