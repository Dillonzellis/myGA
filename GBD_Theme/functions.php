<?php
function gbd_equeue_scripts(){
    wp_enqueue_style('parent-style', get_stylesheet_directory_uri(). '/dist/main.css');
    wp_enqueue_script('theme-js', get_stylesheet_directory_uri() . '/dist/main.js', array(), null, true);
    
}

add_action('wp_enqueue_scripts', 'gbd_equeue_scripts' );