import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export default function Edit( { attributes, setAttributes } ) {
	const [ capsules, setCapsules ] = useState( [] );

	if ( ! capsules.length ) {
		apiFetch( { path: '/spacex/v1/capsules' } ).then( ( response ) => {
			setCapsules( response );
			setAttributes( { res: response } );
		} );
	}

	const capsule_data = capsules.map( ( value, key ) => {
		return (
			<tr key={ key }>
				<td>{ value.capsule_serial }</td>
				<td>{ value.status }</td>
				<td>{ value.type }</td>
				<td>{ value.original_launch }</td>
			</tr>
		);
	} );

	return (
		<div { ...useBlockProps() }>
			{ ! capsules.length ? (
				<p>
					{ __( 'Loading.....', 'nazmul-hosen-frontend-developer' ) }
				</p>
			) : (
				<table id="data-grid">
					<thead>
						<tr className="header">
							<th>
								{ __(
									'Capsule_serial',
									'nazmul-hosen-frontend-developer'
								) }
							</th>
							<th>
								{ __(
									'Status',
									'nazmul-hosen-frontend-developer'
								) }
							</th>
							<th>
								{ __(
									'Type',
									'nazmul-hosen-frontend-developer'
								) }
							</th>
							<th>
								{ __(
									'Original_launch',
									'nazmul-hosen-frontend-developer'
								) }
							</th>
						</tr>
					</thead>
					<tbody id="grid-body">{ capsule_data }</tbody>
				</table>
			) }
		</div>
	);
}
