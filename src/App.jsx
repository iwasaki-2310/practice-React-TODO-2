import "./styles.css";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [ todoText, setTodoText ] = useState('');//入力テキスト
  const [ inCompleteTodos, setInCompleteTodos ] = useState([]);
  const [ completeTodos, setCompleteTodos ] = useState([]);

  // 入力内容を取得
  const onChangeTodoText = (event) => {setTodoText(event.target.value)}

  // 追加処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  }

  //削除処理
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];//最新の未完了リストを取得
    newTodos.splice(index, 1);//押したTodoのインデックスのみ削除
    setInCompleteTodos(newTodos);
  }

  // 完了処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);
    
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    
    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    console.log(newCompleteTodos);
  }

  // 戻す処理
  const onClickRemove = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...inCompleteTodos, completeTodos[index]]

    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  return (
    <>
      {/* 入力エリア */}
      <div className="area input-area">
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加する</button>
      </div>

      {/* 未完了リスト */}
      <div className="incomplete-area">
        <p className="title-area">未完了リスト</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 完了リスト */}
      <div className="complete-area">
        <p className="title-area">完了リスト</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickRemove(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
