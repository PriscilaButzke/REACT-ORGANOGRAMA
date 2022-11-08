import Colaborador from '../Colaborador'
import './Time.css'
const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    /*se o grupo de colaboradores estiver vazio, ele não retorna nada */
    if (!props.colaboradores.length) {
        return ''
    }
    return (
        
         <section className='time' style={css}>
            <h3 style={{ borderColor: props.destaque }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome}corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section>
        

      
    )
}
export default Time