import './index.css';

import { Observer } from 'cellx-react';
import React from 'react';
import toggleTodo from '../../actions/toggleTodo';
import removeTodo from '../../actions/removeTodo';

@Observer
export default class TodoView extends React.Component {
	render() {
		let todo = this.props.todo;

		return (
			<li className="todo-view">
				<input
					className="todo-view__cb-done"
					type="checkbox"
					checked={todo.done}
					onChange={this.onCbDoneChange.bind(this)}
				/>
				<span className="todo-view__text">{todo.text}</span>
				<button
					className="todo-view__btn-remove"
					onClick={this.onBtnRemoveClick.bind(this)}
				>
					remove
				</button>
			</li>
		);
	}

	onCbDoneChange() {
		toggleTodo(this.props.todo);
	}

	onBtnRemoveClick() {
		removeTodo(this.props.todo);
	}
}
