import React, { useState } from "react";

const Counter2 = function () {
  const [count, setCount] = useState(0);
  // useState возыращает состояние (user) и функцию для изменения состояния (setUser). Когда меняется состояние
  // реакт понимает что нужно перерисовать компонент с новым состоянием
  const [user, setUser] = useState(null);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function luser() {
    setUser({
      name: "loh",
      surname: "piska",
      age: 233,
    });
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={luser}>luser</button>
      {user === null ? (
        <div> пользователя ещё нет </div>
      ) : (
        <div>
          <div>{user.name}</div>
          <div>{user.surname}</div>
        </div>
      )}
    </div>
  );
};

export default Counter2;
