import store from '../store';

export default function removeTodo(todo) {
	store.todos.remove(todo);
}
