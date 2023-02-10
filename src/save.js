
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{
				'Nazmul Hosen Frontend Developer – hello from the saved content!'
			}
		</p>
	);
}
