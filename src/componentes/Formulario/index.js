import CampoTexto from "../CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Crossfiteiro(a): </h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Exercício favorito" placeholder="Digite seu exercício favorito" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}
export default Formulario