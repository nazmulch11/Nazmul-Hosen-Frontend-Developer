<?php
/**
 * Plugin Name:       Nazmul Hosen Frontend Developer
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nazmul Hosen
 * Author URI:		  nazmul.xyz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nazmul-hosen-frontend-developer
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_nazmul_hosen_frontend_developer_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_nazmul_hosen_frontend_developer_block_init' );

add_action( 'rest_api_init', function() {
	register_rest_route( 'spacex/v1', '/capsules', array(
		'methods' => 'GET',
		'callback' => 'get_spacex_capsules',
		'permission_callback' => '__return_true',
	) );
} );

function get_spacex_capsules() {
	$response = wp_remote_get( 'https://api.spacexdata.com/v3/capsules' );

	if ( is_wp_error( $response ) ) {
		return $response;
	}

	$data = json_decode( wp_remote_retrieve_body( $response ) );

	return $data;
}
