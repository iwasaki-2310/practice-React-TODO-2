import "./styles.css";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [ todoText, setTodoText ] = useState('');//入力テキスト
  const [ inCompleteTodos, setInCompleteTodos ] = useState([]);
  const [ completeTodos, setCompleteTodos ] = useState([]);

  const onChangeTodoText = (event) => {setTodoText(event.target.value)}

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  }
  return (
    <>
      <div className="area input-area">
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加する</button>
      </div>

      <div className="incomplete-area">
        <p className="title-area">未完了リスト</p>
        <ul>
          {inCompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="complete-area">
      <p className="title-area">完了リスト</p>
        <ul>
        </ul>
      </div>
    </>
  );
};
