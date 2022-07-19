<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'site' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'mso' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'Mso..261195' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'R:bcbJOM3mNg%k F=~[X+U|/@!7`UbpqhK*PjQJ_M#3=^^I|]&OL|o&Y4%B5}^wN' );
define( 'SECURE_AUTH_KEY',  'BLxz8(Vt&=XNcKa&Yk=3=(}IMTnV^n.6n}^j*3`*/`Oqz%B0xm4RFJEYzrH^ki=5' );
define( 'LOGGED_IN_KEY',    'v|5Z*89:s,sND0OaBF*If!byJb i@e Ut>yoSoSl;0l] @cc+qKX[dUnt#g}68zH' );
define( 'NONCE_KEY',        ']<>*[+Y~F8@I99bQfk:E,s]gU}p9,CMSG(zDX$b-8ud#{<:jGV[:piq0HjprKZZx' );
define( 'AUTH_SALT',        'np A(+=uA@]=Yz+A$=H.OD!ecKU/3PA,3`O6e>^ZiteFwLlAaW`8J^i<[^dfF}dP' );
define( 'SECURE_AUTH_SALT', ':*NWkkpv,L }][RUsa#dWZJfK5xNty9`+kX,{>Hc:BvU]6^m?tv,9?Is E6x/b8l' );
define( 'LOGGED_IN_SALT',   ',Ni#^w=mHAYwb;%loOs.C-B/O4xXs8k]7+OF7=y`29eQrP&(RnNjco)o0._Or_y6' );
define( 'NONCE_SALT',       '^+)(GYNPr0&,Y1?2FqOG^{e6%#=v.!7a&ndkj(P{lV?k.`N*+p5xjO,Met8mvu^9' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );

