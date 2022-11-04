import { useState } from 'react'
import './CampoTexto.css'
/* props é o nome dado geralmente a uma propriedade, mas pode ser qualquer nome  */
const CampoTexto = (props) => {
  
/* Exemplo de como chamar uma propriedade juntamente com uma string.
Se declara uma constante fora do return

const placeholdermodificada = `${props.placeholder}Texto a ser exibido junto`

depois so chamar  <input placeholder={props.placeholderModificada}/>*/

/*onChange é disparado quando os valores são inseridos na entrada
O target é uma referência ao objeto que enviou o evento. Por exemplo, 
quando você quer capturar o que foi digitado em um campo input de um form , você utiliza o event. */

/*useState prepara uma pseudo variavel, gerando o objeto valor, para lermos e setValor para escrever e setar valores 
quando passado pelo setValor ele passa por diversas verificações
do ciclo de vida do objeto*/


const aoDigitado = (evento)=>{
   props.aoAlterado(evento.target.value)
}



return(
    <div className="campo-texto">
        <label>{props.label}</label>
       <input value={props.valor} onChange= {aoDigitado}required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
)
}

export default CampoTexto