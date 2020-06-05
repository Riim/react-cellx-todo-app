import { EventEmitter, cellx, ObservableList } from 'cellx';
import { Observable, Computed } from 'cellx-decorators';
import Todo from './types/Todo';

class Store extends EventEmitter {
	@Observable todos = new ObservableList([
		new Todo('Primum', true),
		new Todo('Secundo'),
		new Todo('Tertium')
	]);

	@Computed
	get doneTodos() {
		return this.todos.filter((todo) => todo.done);
	};
}

export default new Store();
