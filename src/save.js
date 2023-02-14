import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
	const capsuleData = attributes.res.map( ( value, key ) => {
		return (
			<tr key={ key }>
				<td className="capsule">{ value.capsule_serial }</td>
				<td className="status">{ value.status }</td>
				<td className="type">{ value.type }</td>
				<td>{ value.original_launch }</td>
			</tr>
		);
	} );

	return (
		<div className="grid-container" { ...useBlockProps }>
			<h2 className="capsule-data-title">
				{ __(
					'Capsule data is here',
					'nazmul-hosen-frontend-developer'
				) }
			</h2>
			<div className="filtering">
				<input
					type="text"
					className="filter capsule"
					onKeyUp="capsulefilter()"
					placeholder="capsule"
				/>
				<input
					type="text"
					className="filter status"
					onKeyUp="statusfilter()"
					placeholder="status"
				/>
				<input
					type="text"
					className="filter type"
					onKeyUp="typefilter()"
					placeholder="type"
				/>
			</div>

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
							{ __( 'Type', 'nazmul-hosen-frontend-developer' ) }
						</th>
						<th>
							{ __(
								'Original_launch',
								'nazmul-hosen-frontend-developer'
							) }
						</th>
					</tr>
				</thead>
				<tbody id="grid-body">{ capsuleData }</tbody>
			</table>
		</div>
	);
}
