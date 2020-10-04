import { row, col, css } from '../utils';

class Block {
	constructor(value, options) {
		this.value = value;
		this.options = options;
	}

	toHTML() {
		throw new Error('The toHTML method must be implemented');
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const { tag = 'h3', styles } = this.options;
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
	}
}

export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		return row(col(`<p>${this.value}</p>`), css(this.options.styles));
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const html = this.value.map(col).join('');
		return row(html, css(this.options.styles));
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const { imageStyles: is, alt = '', styles } = this.options;
		return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles));
	}
}
