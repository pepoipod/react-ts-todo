import * as React from 'react';

interface InputProps {
  addTodo: (title: string) => void;
}

class Input extends React.Component<InputProps, object> {
  inputText: HTMLInputElement | null;

  constructor(props: InputProps) {
    super(props);

    this.inputText = null;

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    if (this.inputText === null) {
      return;
    }

    this.props.addTodo(this.inputText.value);
    this.inputText.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref={v => this.inputText = v} />
        <input type="button" value="追加" onClick={this.addTodo} />
      </div>
    );
  }
}

export default Input;
