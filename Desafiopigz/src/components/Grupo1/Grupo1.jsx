import "./Grupo1.css"
import assets from "../../assets/burguer_2.png"
function Grupo1() {

    return (

        <div className="grupo1">

            <div className="pigz">
                <h2>Pigz: tudo que você precisa pra vender ainda mais!</h2>
                <img src={assets} alt="burguer" />
            </div>
            <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>


            <div1>

                <h3>Quero vender no Pigz</h3>
                <h4>Dê o primeiro passo para aumentar suas vendas</h4>

                <form>
                    <div>
                        <label htmlFor="Nome">Nome</label>
                        <input type="Nome" id="Nome" />
                    </div>
                    <div>
                        <label htmlFor="Email">E-mail</label>
                        <input type="Email" id="Email" />
                    </div>
                    <div>
                        <label htmlFor="Telefone">Telefone</label>
                        <input type="Telefone" id="Telefone" />
                    </div>
                </form>

                <h6>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</h6>
                <button>Continuar</button>
            </div1>




        </div>





    )


}

export { Grupo1 }