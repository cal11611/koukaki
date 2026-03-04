<?php
get_header();
?>
    <main id="primary" class="site-main">
        <section class="banner">
            <img class="myImg" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </section>
            <div class="banner_video">
                <video controls muted autoplay loop>
                    <source src=<?php echo get_stylesheet_directory_uri() . '/videos/koukaki.mp4'; ?> type="video/mp4" />
                </video>
            </div>
        <section id="#story" class="story">
            <h2>L'histoire</h2>
            <article class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <article id="myCharacters">
               <?php get_template_part( '/templates/characters' ); ?> 
            </article>
            <article id="place">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                    <div class="big_cloud"><img src="<?php echo get_stylesheet_directory_uri() . '/images/big_cloud.png'; ?>"></div>
                    <div class="little_cloud"><img src="<?php echo get_stylesheet_directory_uri() . '/images/little_cloud.png'; ?>"></div>
                </div>
            </article>
        </section>
        <section id="studio">
            <h2>Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>            
            <div class="oscars">                
                <div class="oscars_img"><img src="<?php echo get_stylesheet_directory_uri() . '/images/oscars.png'; ?>"></div>               
            </div>            
        </section>           
    </main><!-- #main -->
<?php
get_footer();
