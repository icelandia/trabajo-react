import React from "react";
import Button from '../Button'

/**
 * Otra forma de declarar componentes y exportarlos directamente 
 * 
 */
export default ({ todo, toggleCheckbox, onDelete }) => {
  /**
   * Aqui hay algo interesante: El `input checkbox` tiene un atributo llamado `checked`.
   * Este atributo puede ser verdadero o falso. Entonces yo lo bindeo con el valor de todo.checked. 
   * 
   * El problema con esto es que para que el componente renderice este cambio es preciso asignarle un callback para que efectivamente se actualice este valor. 
   * Asi que le agrego un evento `onChange` al checkbox
   */
  const clickCheckbox = ()=>{

    // Este callback que estoy invocando corresponde al cambio que realizo en el componente padre. 
    // De esta forma podemos actualizar el lista y los contadores segun sea el caso
    toggleCheckbox({...todo, checked: !todo.checked})
  }

  const clickButton = () =>{
    // Este onDelete es el callback del componente padre para eliminar el elemento de la lista. Le paso el todo a eliminar
    onDelete(todo)
  }



  return (
    <li className="todo-container">
      <input type="checkbox" className="todo-checkbox" checked={todo.checked} onChange={clickCheckbox} />
      <span className="todo-text">{todo.title}</span>
      <Button title={' Eliminar '} callback={clickButton} className={'todo-delete'} />
    </li>
  )
};

