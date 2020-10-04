import image from './assets/image.png';
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

export const model = [
	new TitleBlock('Website Contsructor', {
		tag: 'h1',
		styles: {
			color: 'red',
			padding: '1rem',
			'text-align': 'center'
		}
	}),
	new TextBlock('Simple text block', {
		styles: {
			border: '1px solid #2196f3',
			'border-radius': '10px'
		}
	}),
	new ColumnsBlock([ 'Some Text', 'Another', 'And One' ], {
		styles: {
			border: '1px solid red',
			'border-radius': '10px',
			margin: '2rem 0'
		}
	}),
	new ImageBlock(image, {
		styles: {
			display: 'flex',
			'justify-content': 'center',
			'max-width': '100%'
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'Image'
	})
];
