import './index.css';

import { computed } from 'cellx-decorators';
import { observer } from 'cellx-react';
import React from 'react';
import store from '../../store';
import addTodo from '../../actions/addTodo';
import TodoView from '../TodoView';

@observer
export default class TodoApp extends React.Component {
	@computed nextNumber = function() {
		return store.todos.length + 1;
	};

	@computed leftCount = function() {
		return store.todos.length - store.doneTodos.length;
	};

	render() {
		return (<div className="todo-app">
			<form className="todo-app__new-todo-form" onSubmit={ this.onNewTodoFormSubmit.bind(this) }>
				<input className="todo-app__new-todo-input" ref={ input => this.newTodoInput = input }
						placeholder="What needs to be done?" />
				<button className="todo-app__btn-add" type="submit">Add #{ this.nextNumber }</button>
			</form>
			<div className="todo-app__summary-info">
				All: { store.todos.length },
				Done: { store.doneTodos.length },
				Left: { this.leftCount }
			</div>
			<ul className="todo-app__todo-list">{
				store.todos.map(todo => <TodoView key={ todo.text } todo={ todo } />)
			}</ul>
		</div>);
	}

	onNewTodoFormSubmit(evt) {
		evt.preventDefault();

		let newTodoInput = this.newTodoInput;

		addTodo(newTodoInput.value);

		newTodoInput.value = '';
		newTodoInput.focus();
	}
}
