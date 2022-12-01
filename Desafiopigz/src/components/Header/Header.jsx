import Logo from "../../assets/Pigz Gestão - Logo.svg"
import "./Header.css"

function Header () {

    return (

        
        <div className="header">

        <img src={Logo} alt="logo-pigz" />
        
         <button className="button">Já sou Parceiro</button>

        </div>

    )

}

export { Header }