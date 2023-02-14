function capsulefilter() {
	let td, i, txtValue;
	const input = document.querySelector( '.capsule' );
	const filter = input.value.toUpperCase();
	const table = document.getElementById( 'data-grid' );
	const tr = table.getElementsByTagName( 'tr' );

	for ( i = 0; i < tr.length; i++ ) {
		td = tr[ i ].getElementsByTagName( 'td' )[ 0 ];
		if ( td ) {
			txtValue = td.textContent || td.innerText;
			if ( txtValue.toUpperCase().indexOf( filter ) > -1 ) {
				tr[ i ].style.display = '';
			} else {
				tr[ i ].style.display = 'none';
			}
		}
	}
}

function statusfilter() {
	let td, i, txtValue;
	const input = document.querySelector( '.status' );
	const filter = input.value.toUpperCase();
	const table = document.getElementById( 'data-grid' );
	const tr = table.getElementsByTagName( 'tr' );

	for ( i = 0; i < tr.length; i++ ) {
		td = tr[ i ].getElementsByTagName( 'td' )[ 1 ];
		if ( td ) {
			txtValue = td.textContent || td.innerText;
			if ( txtValue.toUpperCase().indexOf( filter ) > -1 ) {
				tr[ i ].style.display = '';
			} else {
				tr[ i ].style.display = 'none';
			}
		}
	}
}

function typefilter() {
	let td, i, txtValue;
	const input = document.querySelector( '.type' );
	const filter = input.value.toUpperCase();
	const table = document.getElementById( 'data-grid' );
	const tr = table.getElementsByTagName( 'tr' );

	for ( i = 0; i < tr.length; i++ ) {
		td = tr[ i ].getElementsByTagName( 'td' )[ 2 ];
		if ( td ) {
			txtValue = td.textContent || td.innerText;
			if ( txtValue.toUpperCase().indexOf( filter ) > -1 ) {
				tr[ i ].style.display = '';
			} else {
				tr[ i ].style.display = 'none';
			}
		}
	}
}
