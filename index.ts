import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios
    .get(url)
    .then((res) => {
        const todo = res.data as Todo;

        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed);
    })
    .catch((err) => {
        console.error(err);
    });

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
          The Todo with id: ${id}
          Has a title of: ${title}
          Is it completed? ${completed}
        `);
};
