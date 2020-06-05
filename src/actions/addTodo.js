import store from '../store';
import Todo from '../store/types/Todo';

export default function addTodo(text) {
	if (!store.todos.find((todo) => todo.text == text)) {
		store.todos.add(new Todo(text));
	}
}
