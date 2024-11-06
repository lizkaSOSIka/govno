import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import "./App.css";
import axios from "axios";

function App() {
  // массив с объектами постов
  const [posts, setPosts] = useState([
    {
      title: "привет я лох",
      body: "алввм",
      id: 1,
    },
    {
      title: "привет я мяу",
      body: "алввм",
      id: 2,
    },
    {
      title: "привет я мяу",
      body: "алввм",
      id: 3,
    },
    {
      title: "привет я мяу",
      body: "алввм",
      id: 4,
    },
    {
      title: "привет я мяу",
      body: "алввм",
      id: 5,
    },
    {
      title: "привет я мяу",
      body: "алввм",
      id: 6,
    },
  ]);

  function deletePost(idPost) {
    setPosts(posts.filter((el) => el.id !== idPost));
  }

  function addPost() {
    if (title !== "" && text !== "") {
      // так мы создаем новый пост через post запрос на сервер
      // axios.post("https://jsonplaceholder.typicode.com/posts", {
      //   title: title,
      //   body: text,
      // })
      setPosts([
        //...posts,//добавляем ещё один пост, копируя старые (добавляется внизу)
        {
          title: title,
          body: text,
          id: Date.now(), //количество секунд в данный момент времени от 1 января 1970 года Unix-time
        },
        ...posts, //добавляется вверху
      ]);
      setTitle("");
      setText("");
    }
  }
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function onTitleChange(event) {
    setTitle(event.target.value);
  }

  function onTextareaChange(event) {
    setText(event.target.value);
  }

  // useEffect - это хук. Он всегда выполняется после того, как отрисовалась компонента
  // первым парметром передаётся эффект (стрелочная функция,которая выполняется) Вторым параметром мы
  // передаём массив зависимостей при изменении которых срабатывает эффект. Если мы не передали ничего
  // то эффект вызовится ровно один раз сразу после первой отрисовки компонента.

  // axios.get - асинхронный запрос на сервер. Асинхронные запросы выполняются параллельно, то есть
  // независимо от основного потока программы. Когда асинхронный запрос успешно выполнится, мы попадем в then
  // Если запрос завершится с ошибкой, то попадем в catch

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => console.log("ERROR::", error));
  }, []);

  // пример создания асинхронной функции
  // async function f () {
  //   return 'aboba'
  // }
  // дожидаемся (await) когда axios.get выполнится
  // const data = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1 style={{ color: "gray" }}> Какая-то параша </h1>
      {/*placeholder - подсказка (надпись внутри)*/}
      <input
        placeholder={"введите заголовок"}
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        placeholder={"введите текст"}
        value={text}
        onChange={onTextareaChange}
      />
      <button onClick={addPost}>Добавить</button>

      {/*  Сначала фильтруем массив постов (то есть не пропускаем те посты, у которых нет заголовка)*/}
      {/*  Затем перегоняем все объекты в компоненты с помощью map. То есть получаем из массива
      объектов массив компонент*/}
      {/*  map - это метод массива, который принимает функцию (в нашем случае стрелочную). Эта функция
      применяется к каждому элементу массива. То есть в нашем случае мы принимаем объект поста (el) и передаем
      его компоненте <Post/> */}
      <div className={"my_posts"}>
        {posts
          .filter((el) => el.title !== null)
          .map((el) => (
            <Post postElement={el} deletePost={deletePost} />
          ))}
      </div>
    </div>
  );
}

export default App;
