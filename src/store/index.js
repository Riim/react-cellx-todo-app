import { EventEmitter, cellx } from 'cellx';
import { observable, computed } from 'cellx-decorators';
import Todo from './types/Todo';

class Store extends EventEmitter {
	@observable todos = cellx.list([
		new Todo('Primum', true),
		new Todo('Secundo'),
		new Todo('Tertium')
	]);

	@computed doneTodos = function() {
		return this.todos.filter(todo => todo.done);
	};
}

export default new Store();
