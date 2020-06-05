import { EventEmitter } from 'cellx';
import { Observable } from 'cellx-decorators';

export default class Todo extends EventEmitter {
	@Observable text = undefined;
	@Observable done = undefined;

	constructor(text = '', done = false) {
		super();

		this.text = text;
		this.done = done;
	}
}
