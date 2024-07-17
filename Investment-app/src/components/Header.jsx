
const src = '../../public/investment-calculator-logo.png';
export default function Header (){
    return (
        <header id="header">
            <img src={src}/>
            <h1>Investment Calculator</h1>
        </header>
    )
}