import React, {useState } from "react";
import "./style.css";

import Button from './components/Button'
import Counters from './components/Counters'
import Todo from './components/Todo'
import inputField from './components/InputField'


/**
 * 
 */
export default function todoApp() {

  const [todos, updateTodos] = useState([])

  const addTodo = () => {
    const title = prompt('Nombre de Tarea: ')

    if (title){

      const todo = {
        id: new Date().getTime(), // Con esto tengo un valor unico basado en el unixTime para manipular el ID.
        title, // Esto es equivalente a `title: title`. Estoy destructurando el atributo de este objeto todo.
        checked: false, // Este attributo lo uso como controlador para saber si esta o no lista la tarea
      }
      console.log({todo})

      // Esto que estoy haciendo a continuacion es lo mismo que si creara un array nuevo con el valor del `todos` anterior y llamara al .push()
      // Esta tecnica se conoce como Spread Elements: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
      updateTodos([...todos, todo])
    }
  }

  const toggleCheckbox = (todo)=>{

    // Al actualizar este estado por supuesto que se renderiza la lista
    // Utilizo el .map() metodo que recorre un array y me devuelve otro array con las modificaciones que requiera. En este caso solamente modifica el objeto `todo` que fue cliqueado
    updateTodos(todos.map(item => (item.id === todo.id) ? todo : item))

  }

  const onDelete = (todo) => {

    // Estoy haciendo uso del metodo .filter() de la interfaz de Arrays. 
    //Este metodo recorre todos los elementos de un array y los devuelve (en un nuevo array) segun su condicion. En este caso me interesa devolver todos los elementos menos el que estoy eliminando.
    updateTodos(todos.filter(item => todo.id !== item.id))
  }


  return (
    <div className="container center">
      <h1 className="center title">TODO App</h1>
      {/* Componente counters: Lo utilizo simplemente para mostrar los contadores de Tareas. */}
      <Counters todos={todos} />

      <inputField></inputField>
 
      {/* Componente Button: Este componente lo utilizo varias veces (ver componente 'Todo'). Y no es mas que un ejemplo para mostrar el comportamiento de un componente usado en distintas ocasiones */}
      <Button className={'button center'} title={'Add Todo'} callback={addTodo} />
      <ul className="todo-list">        
        {
          todos.map((item) => (
            <Todo todo={item} key={item.id} toggleCheckbox={toggleCheckbox} onDelete={onDelete} />
          ))
        }
      </ul> 
    </div>
  );
}
