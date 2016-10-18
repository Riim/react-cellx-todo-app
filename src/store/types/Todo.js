import { EventEmitter } from 'cellx';
import { observable } from 'cellx-decorators';

export default class Todo extends EventEmitter {
	@observable text = void 0;
	@observable done = void 0;

	constructor(text = '', done = false) {
		super();

		this.text = text;
		this.done = done;
	}
}
