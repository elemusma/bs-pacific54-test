<?php
/**
 * Plugin Name: Hero Nav Gutenberg Block
 * Plugin URI: https://example.com/my-custom-gutenberg-block
 * Description: A custom Gutenberg block that displays a Navbar and Hero section.
 * Version: 1.0.0
 * Author: John Doe
 * Author URI: https://example.com
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: my-custom-gutenberg-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue block assets for editor only.
 */
function bs_hero_block_block_editor_assets() {
	// Enqueue block editor JS.
	wp_enqueue_script(
		'my-custom-gutenberg-block-editor-script',
		plugins_url( 'index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'index.js' )
	);

	// Enqueue block editor CSS.
	wp_enqueue_style(
		'my-custom-gutenberg-block-editor-style',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'bs_hero_block_block_editor_assets' );

/**
 * Enqueue block assets for both editor and frontend.
 */
function bs_hero_block_block_assets() {
	// Enqueue block frontend CSS.
	wp_enqueue_style(
		'my-custom-gutenberg-block-style',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
add_action( 'enqueue_block_assets', 'bs_hero_block_block_assets' );
