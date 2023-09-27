<?php

/**
 * Plugin Name: Breakdance - Hide Topbar & Always Show Sidebars
 * Plugin URI: https://codersotmer.com
 * Description: This Breakdance website builder plugin dynamically toggles the visibility of the top bar and ensures that sidebars are consistently displayed upon page load. It is ideal for users seeking a more streamlined and personalized UI/UX within their WordPress admin pages. This plugin utilizes jQuery for front-end interactions. For more information, visit <a href="https://codestormer.com" target="_blank">codersotmer.com</a>.
 * Version: 1.0
 * Author: Codestormer.com
 * Author URI: https://codersotmer.com
 */

/**
 * Adds jQuery and a custom script to the head of the document.
 *
 * @throws Some_Exception_Class A description of the exception that could be thrown.
 * @return void
 */
function add_jquery_and_custom_script_to_head()
{
    // Add jQuery for iframe (this window)
    echo '<script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" crossorigin="anonymous"></script>';

    // Enqueue your external JS file
    wp_enqueue_script('breakdance-hide-topbar-script', plugin_dir_url(__FILE__) . 'breakdance-hide-topbar-script.js', array('jquery'), '1.0', true);
}

// Hook into WordPress
add_action('wp_head', 'add_jquery_and_custom_script_to_head');
