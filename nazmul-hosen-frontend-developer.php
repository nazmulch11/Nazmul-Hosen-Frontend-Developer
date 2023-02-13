<?php

/**
 * Plugin Name:       Nazmul Hosen Frontend Developer
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nazmul Hosen
 * Author URI:		  https://nazmul.xyz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nazmul-hosen-frontend-developer
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_nazmul_hosen_frontend_developer_block_init()
{
	register_block_type(__DIR__ . '/build', []);
}
add_action('init', 'create_block_nazmul_hosen_frontend_developer_block_init');

/**
 * rest_api_init
 *
 * Register Rest api endpoints
 *
 * @since 1.0.0
 */
add_action('rest_api_init', function () {
	register_rest_route('spacex/v1', '/capsules', array(
		'methods' => 'GET',
		'callback' => 'get_spacex_capsules',
		'permission_callback' => 'permission_check',
	));
});

/**
 * get_spacex_capsules
 *
 * Get capsule from spacex api
 *
 * @since 1.0.0
 *
 * @return type json
 */
function get_spacex_capsules()
{
	$response = wp_remote_get('https://api.spacexdata.com/v3/capsules');

	if (is_wp_error($response)) {
		return $response;
	}

	$result = json_decode(wp_remote_retrieve_body($response));

	return rest_ensure_response($result);
}

/**
 * permission_check
 *
 * permission check for the endpoints
 *
 * @since 1.0.0
 */
function permission_check()
{
	if (!is_user_logged_in()) {
		return new WP_Error('rest_forbidden', 'You must be logged in to access this endpoint.', array('status' => 401));
	}
	return true;
}

/**
 * load_scripts
 *
 * Load javascript file
 *
 * @since 1.0.0
 */
function load_scripts()
{
	wp_enqueue_script('custom', plugins_url('assets/js/scripts.js', __FILE__),[],time());
	// wp_register_style('style', plugins_url('assets/css/style.css',__FILE__ ) );
}

add_action('wp_enqueue_scripts', 'load_scripts');

/**
 * enqueue_styles
 *
 * Enqueue Style
 *
 * @since 1.0.0
 */
function enqueue_styles() {
    wp_enqueue_style( 'style', plugins_url('assets/css/style.css', __FILE__),[],time() );
}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
