import "./Grupo1.css"
import assets from "../../assets/burguer_2.png"
function Grupo1 () {

    return (

        <div className="grupo1">
        
        <div className="pigz">
            <h2>Pigz: tudo que você precisa pra vender ainda mais!</h2>
            <img src={assets} alt="burguer" />
        </div>
        <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
        </div>


    )


}

export { Grupo1 }