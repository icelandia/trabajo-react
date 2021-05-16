import React from "react";


const counters = ({ todos }) => {
  
  let itemCountSpan = todos.length

  // Recuerden el metodo .reduce de la Interfaz Array en Javascript.
  // Este metodo nos permite recorrer los elementos de un array y segun una condicion devolver un valor dado por el segundo argumento (En este caso un contador que inicia en `0`)
  let uncheckedCountSpan = todos.reduce((counter, nextTodo) => {
    return (!nextTodo.checked) ? counter + 1 : counter
  }, 0)

  return (
    <div className="flow-right controls">
      <span>
        Item count: <span id="item-count">{itemCountSpan}</span>
      </span>
      <span>
        Unchecked count: <span id="unchecked-count">{uncheckedCountSpan}</span>
      </span>
    </div>
  );
};

export default counters;
