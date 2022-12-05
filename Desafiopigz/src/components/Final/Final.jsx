import "./Final.css"
import assets from "../../assets/pigz-logotipo-colorido.svg"
import selo1 from "../../assets/Image/selo-app-store.svg"
import selo2 from "../../assets/Image/selo-google-play.svg"
import icone from "../../assets/Image/icone-fale-conosco.svg"
import linked from "../../assets/Image/linkedin-with-circle.svg"
import instagram from "../../assets/Image/instagram-with-circle.svg"
import facebook from "../../assets/Image/facebook-with-circle.svg"
import youtube from "../../assets/Image/youtube-with-circle.svg"
import orange from "../../assets/Image/logo-orange-horizontal-branco.svg"


function Final() {

    return (

        <div className="book">
            <img src={assets} alt="logo" />
            <p>Tudo que você precisa.</p>
            <h3>Baixe o APP</h3>

            <div className="selo">
                <img src={selo1} alt="" />
                <img src={selo2} alt="" />
                <p>Pigz</p>
                <p>Sobre o Pigz</p>
                <p>Portal do Parceiro</p>
                <p>Quero ser um Pigz Partner</p>
                <div className="fone">
                    <img src={icone} alt="fone" />
                    <h3>Fale conosco</h3>
                </div>

                <p>falecom@pigz.com.br</p>
                <p>(95) 3224-2603</p>
                <h3>Pigz nas redes</h3>
                <div className="icones">
                    <img src={linked} alt="" />
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                </div>






            </div>
            <hr />

            <div className="final">
                <p>Nossos termos</p>
                <p>Privacidade</p>
                <p>Ajuda</p>
            </div>

            <div className="copy">
                <p>&copy; Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
                <img src={orange} alt="" />

            </div>
        </div>


    )
}

export { Final }