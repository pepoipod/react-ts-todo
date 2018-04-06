import * as React from 'react';
import './App.css';
import Input from './Input';


interface AppState {
  todo: Todo[];
}

interface ListProps {
  todo: Todo[];
  removeTodo: (i: number) => void;
}

interface Todo {
  title: string;
}

const List = (props: ListProps) => (
  <ul>
    {props.todo.map((todo: Todo, i: number) => (
      <li key={i}><input type="button" value="X" onClick={() => { props.removeTodo(i); }} /> {todo.title}</li>
    ))}
  </ul>
);

class App extends React.Component<object, AppState> {
  inputText: HTMLInputElement | null;

  constructor(props: object) {
    super(props);

    this.state = {
      todo: [
        { title: 'JavaScript覚える' },
        { title: 'jQuery覚える' },
        { title: 'ES2015覚える' },
        { title: 'React覚える' },
      ]
    };

    this.inputText = null;

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(title: string) {
    const todo = this.state.todo.slice();
    todo.push({ title });

    this.setState({ todo });
  }

  removeTodo(i: number) {
    const todo = this.state.todo.slice();
    todo.splice(i, 1);

    this.setState({ todo });
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <List  todo={this.state.todo} removeTodo={this.removeTodo} />
        <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
