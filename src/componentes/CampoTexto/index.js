import './CampoTexto.css'
/* props é o nome dado geralmente a uma propriedade, mas pode ser qualquer nome  */
const CampoTexto = (props) => {
  
/* Exemplo de como chamar uma propriedade juntamente com uma string.
Se declara uma constante fora do return

const placeholdermodificada = `${props.placeholder}Texto a ser exibido junto`

depois so chamar  <input placeholder={props.placeholderModificada}/>*/


return(
    <div className="campo-texto">
        <label>{props.label}</label>
       <input required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
)
}

export default CampoTexto