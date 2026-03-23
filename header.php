<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
    />
   
    <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
    
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>
	<header id="masthead" class="site-header">		
        <nav id="nav">
            <span></span>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
                
       
            <div id="myDiv">
                <div id="top">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/images/logo.png'; ?>">
                </div>  
                <div id="middle">

                <ul id="ul1">
                    <li id = "li1"><div><a href="#story">Histoire</a></div></li>
                    <li id = "li2"><div><a href="#myCharacters">Personnages</a></div></li>
                    <li id = "li3"><div><a href="#place">Lieu</a></div></li>
                    <li id = "li4"><div><a href="#studio">Studio Koukaki</a></div></li>
                </ul>

                </div>
            </div>
            <div id="icons"></div>
        </nav>
	</header><!-- #masthead -->
