import store from '../store';

export default function toggleTodo(todo) {
	todo.done = !todo.done;
}
