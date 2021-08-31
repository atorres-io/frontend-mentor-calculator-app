class OperationsService {
	constructor(operator) {
		this.operator = operator;
		this.display = document.querySelector('.screen');

		this.operation();
	}

	operation() {
		switch (this.operator) {
			case '=':
				this.result();
				break;
			case 'del':
				this.delete();
				break;
			case 'C':
				this.reset();
				break;
			default:
				this.default();
				break;
		}
	}

	result() {
		if (this.display.textContent !== '') {
			this.display.textContent = eval(this.display.textContent);
		}
	}

	delete() {
		this.display.textContent = this.display.textContent.slice(0, -1);
	}

	reset() {
		this.display.textContent = '';
	}

	default() {
		this.display.textContent += this.operator;
	}
}

export default OperationsService;
