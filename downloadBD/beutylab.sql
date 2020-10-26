-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2020 a las 22:45:54
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `beutylab`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `antes_despues`
--

CREATE TABLE `antes_despues` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `cirugias` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `antes_despues`
--

INSERT INTO `antes_despues` (`id`, `id_usuario`, `cirugias`) VALUES
(1, 1, 'Description'),
(2, 1, 'Description'),
(3, 1, 'Description'),
(4, 1, 'Description');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  `reportado` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `id_usuario`, `descripcion`, `estado`, `fecha`, `hora`, `likes`, `reportado`) VALUES
(1, 1, '💻🌐📲', 1, '2020-04-07', '02:04:52', 0, NULL),
(2, 1, '😁😁😁', 1, '2020-04-07', '02:04:14', 0, NULL),
(3, 1, '🙄🙄🙄', 1, '2020-04-07', '02:04:33', 0, NULL),
(4, 1, '🏠📸🗃️', 1, '2020-04-07', '02:04:21', 0, NULL),
(5, 5, 'breakfast', 1, '2020-04-10', '05:04:42', 0, NULL),
(6, 5, 'prueba ios', 1, '2020-04-10', '11:04:38', 0, NULL),
(7, 5, 'prueba', 1, '2020-04-10', '11:04:08', 0, NULL),
(8, 5, 'prueba', 1, '2020-04-11', '05:04:52', 0, NULL),
(9, 5, 'r', 1, '2020-04-11', '05:04:06', 0, NULL),
(10, 5, 'Dog Quarentine', 1, '2020-04-15', '01:04:19', 0, NULL),
(11, 4, '🌞☀️GG', 1, '2020-04-25', '02:04:40', 0, NULL),
(14, 5, 'hello test', 1, '2020-06-18', '05:06:38', 0, NULL),
(15, 5, 'working Hard', 1, '2020-07-22', '12:07:16', 0, NULL),
(16, 1, 'test', 1, '2020-07-25', '11:07:42', 0, NULL),
(17, 23, 'IOS', 1, '2020-07-29', '05:07:15', 0, NULL),
(18, 23, 'ios camera', 1, '2020-07-30', '04:07:59', 0, NULL),
(19, 23, 'ios', 1, '2020-08-01', '07:08:50', 0, NULL),
(20, 23, 'ios', 1, '2020-08-01', '07:08:05', 0, NULL),
(21, 23, 'test', 1, '2020-08-01', '07:08:29', 0, NULL),
(22, 23, 'test', 1, '2020-08-01', '07:08:33', 0, NULL),
(23, 23, 'test', 1, '2020-08-02', '12:08:41', 0, NULL),
(24, 23, 'test', 1, '2020-08-05', '02:08:04', 0, NULL),
(25, 23, 'test', 1, '2020-08-16', '10:08:14', 0, NULL),
(26, 4, 'soccer', 1, '2020-09-16', '04:09:36', 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog_user_block`
--

CREATE TABLE `blog_user_block` (
  `user_id` int(11) NOT NULL,
  `user_blocked_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `id_blog` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `comentario` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_blog`, `id_usuario`, `comentario`, `estado`) VALUES
(1, 4, 5, 'creidos', NULL),
(2, 22, 23, '10', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultorios`
--

CREATE TABLE `consultorios` (
  `id_consultorio` int(11) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `descripcion` varchar(100) NOT NULL,
  `consultorioscol` varchar(45) NOT NULL,
  `id_medico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizaciones`
--

CREATE TABLE `cotizaciones` (
  `id_cotizacion` int(11) NOT NULL,
  `fec_registro` date DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `fecha_procedimiento` date DEFAULT NULL,
  `id_habitacion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizaciones_x_procedimiento`
--

CREATE TABLE `cotizaciones_x_procedimiento` (
  `id_cotizacion` int(11) NOT NULL,
  `id_cirujia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudios`
--

CREATE TABLE `estudios` (
  `id_estudio` int(11) NOT NULL,
  `universidad` varchar(300) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `titulo` varchar(300) DEFAULT NULL,
  `id_medico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia_laboral`
--

CREATE TABLE `experiencia_laboral` (
  `id_experienci` int(11) NOT NULL,
  `cargo` varchar(200) DEFAULT NULL,
  `entidad` varchar(200) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `id_medico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `forgot_password`
--

CREATE TABLE `forgot_password` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `token` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `forgot_password`
--

INSERT INTO `forgot_password` (`id`, `id_usuario`, `token`, `created_at`, `updated_at`) VALUES
(1, 4, '682sbdm72u993hlf24x0nj1e80drgvp1oew5ezab5ck6qcity', '2020-04-07 03:03:46', '2020-04-07 03:03:46'),
(2, 4, '55ty6695gbas0e0cxnk4ue3efedvipmw5798d8j6qrlz2oh21', '2020-04-14 16:03:46', '2020-04-14 16:03:46'),
(3, 14, 'btw8uz52bm5es8ohrc4l1cv8n5f1878qixkgdfp6jea98003y', '2020-05-04 21:25:44', '2020-05-04 21:25:44'),
(4, 17, '7a1jwtz3f304ufo35lpddrbnygece19sm0bek6v9hqx2i5b98', '2020-05-14 12:27:37', '2020-05-14 12:27:37'),
(5, 17, '6zpe9gybb3kedb05o8s9f19tdrv41hwb5quan29783mlbixjc', '2020-05-14 12:29:45', '2020-05-14 12:29:45'),
(6, 4, '5eee25k170ds5n5gv0icw6m3885jfxa8rc9u6pzboql407yht', '2020-05-16 22:25:28', '2020-05-16 22:25:28'),
(7, 4, '8qzdnpa99671ikac5gu3lbw7j4meot5fbfs82xy5r52vbch40', '2020-09-30 14:55:22', '2020-09-30 14:55:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id_habitacion` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `comodidades` varchar(2000) DEFAULT NULL,
  `precio_noche` double DEFAULT NULL,
  `imagen` varchar(80) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `cantidad_camas` int(11) DEFAULT NULL,
  `cantidad_camas_disponibles` int(11) DEFAULT NULL,
  `id_tipo_habitacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id_habitacion`, `nombre`, `comodidades`, `precio_noche`, `imagen`, `estado`, `cantidad_camas`, `cantidad_camas_disponibles`, `id_tipo_habitacion`) VALUES
(1, 'Habitación Simple', 'Cama 1.40, tocador, Televisor, Wifi, Cable, Baño, Mini Bar', 500, 'r1.jpg', '1', NULL, NULL, NULL),
(2, 'Vip', 'muchas', 1000, 'r4.jpg', '1', NULL, NULL, NULL),
(3, 'Deluxe', 'mas', 1200, 'r3.jpg', '1', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones_img`
--

CREATE TABLE `habitaciones_img` (
  `id_habitacion_img` int(11) NOT NULL,
  `img` varchar(200) DEFAULT NULL,
  `id_habitacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `id` int(11) NOT NULL,
  `id_reserva` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 0,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`id`, `id_reserva`, `fecha`, `hora`, `titulo`, `descripcion`, `estado`, `usuario_id`) VALUES
(1, 1, '2020-03-31', NULL, 'Your acquired: Super Star Plan', 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience', 0, 1),
(2, 1, '2020-06-11', NULL, 'Surgery date', 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.', 0, 1),
(3, 1, '2020-06-19', NULL, 'Last Day', 'Until this day you can have accommodation in our center, to have more days you must pay for it.', 0, 1),
(4, 2, '2020-03-31', NULL, 'Your acquired: Chin', 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience', 0, 1),
(5, 2, '2020-06-12', NULL, 'Surgery date', 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.', 0, 1),
(6, 2, '2020-06-20', NULL, 'Last Day', 'Until this day you can have accommodation in our center, to have more days you must pay for it.', 0, 1),
(7, 3, '2020-03-31', NULL, 'Your acquired: 3D Plan', 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience', 0, 1),
(8, 3, '2020-06-12', NULL, 'Surgery date', 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.', 0, 1),
(9, 3, '2020-06-20', NULL, 'Last Day', 'Until this day you can have accommodation in our center, to have more days you must pay for it.', 0, 1),
(10, 4, '2020-03-31', NULL, 'Your acquired: Super Model Plan ', 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience', 0, 1),
(11, 4, '2020-06-12', NULL, 'Surgery date', 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.', 0, 1),
(12, 4, '2020-06-20', NULL, 'Last Day', 'Until this day you can have accommodation in our center, to have more days you must pay for it.', 0, 1),
(13, 5, '2020-03-31', NULL, 'Your acquired: Icon Plan', 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience', 0, 1),
(14, 5, '2020-06-12', NULL, 'Surgery date', 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.', 0, 1),
(15, 5, '2020-06-20', NULL, 'Last Day', 'Until this day you can have accommodation in our center, to have more days you must pay for it.', 0, 1),
(16, 6, '2020-05-05', NULL, 'Your acquired: Icon Plan', 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience', 0, 1),
(17, 6, '2020-07-10', NULL, 'Surgery date', 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.', 0, 1),
(18, 6, '2020-07-18', NULL, 'Last Day', 'Until this day you can have accommodation in our center, to have more days you must pay for it.', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenesxantes_despues`
--

CREATE TABLE `imagenesxantes_despues` (
  `id` int(11) NOT NULL,
  `id_referencia` int(11) NOT NULL,
  `imagen` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `imagenesxantes_despues`
--

INSERT INTO `imagenesxantes_despues` (`id`, `id_referencia`, `imagen`, `tipo`) VALUES
(1, 4, '1-beforeAfter-01589228968.jpeg', 1),
(2, 4, '1-beforeAfter-11589228968.jpeg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenesxblog`
--

CREATE TABLE `imagenesxblog` (
  `id` int(11) NOT NULL,
  `id_blog` int(11) NOT NULL,
  `imagen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagenesxblog`
--

INSERT INTO `imagenesxblog` (`id`, `id_blog`, `imagen`) VALUES
(1, 1, '1-user-image-01586224972.jpeg'),
(2, 1, '1-user-image-11586224972.jpeg'),
(3, 4, '1-user-image-01586225121.jpeg'),
(4, 4, '1-user-image-11586225121.jpeg'),
(5, 5, '5-user-image-01586538102.jpeg'),
(6, 7, '5-user-image-01586561468.jpeg'),
(7, 9, '5-user-image-01586627646.jpeg'),
(8, 10, '5-user-image-01586912539.jpeg'),
(9, 11, '4-user-image-01587781180.jpeg'),
(12, 15, '5-user-image-01595379496.jpeg'),
(13, 17, '23-user-image-01596001935.jpeg'),
(14, 18, '23-user-image-01596083339.jpeg'),
(15, 23, '23-user-image-01596329441.jpeg'),
(16, 24, '23-user-image-01596595864.jpeg'),
(17, 25, '23-user-image-01597617074.jpeg'),
(18, 26, '4-user-image-01600230996.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `id_blog` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `id_blog`, `id_usuario`) VALUES
(2, 4, 5),
(3, 7, 5),
(4, 6, 5),
(5, 4, 4),
(6, 5, 4),
(7, 6, 4),
(8, 7, 4),
(9, 9, 4),
(10, 10, 5),
(12, 9, 5),
(13, 11, 5),
(14, 6, 2),
(15, 7, 2),
(16, 8, 2),
(17, 9, 2),
(18, 10, 2),
(19, 11, 2),
(21, 10, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `id_medico` int(11) NOT NULL,
  `presentacion` varchar(4000) DEFAULT NULL,
  `img_perfil` varchar(2000) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `observaciones_medicas`
--

CREATE TABLE `observaciones_medicas` (
  `id_observacion_medica` int(11) NOT NULL,
  `id_tipo_observacion` int(11) NOT NULL COMMENT 'este campo contiene el tipo de observaci�n medica.\n1. enfermada\n2. alergia\n3. procedimiento anterior',
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id_pais` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id_pais`, `nombre`) VALUES
(1, 'U.S'),
(2, 'Canada'),
(3, 'Colombia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE `planes` (
  `id_plan` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `dias_hospedaje` int(11) NOT NULL DEFAULT 8,
  `valor` double DEFAULT NULL,
  `img_plan` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `planes`
--

INSERT INTO `planes` (`id_plan`, `nombre`, `descripcion`, `dias_hospedaje`, `valor`, `img_plan`) VALUES
(1, '3D Plan', '3D Plan', 8, 10000, '3dplan.png'),
(3, 'Super Star Plan', 'Super Star Plan', 8, 7000, 'superstar1.png'),
(4, 'Icon Plan', 'Icon Plan ', 8, 20000, 'iconplan.png'),
(5, 'Mega Combo Plan', 'All in One', 25, 45000, NULL),
(6, 'Hiper Mega Combo', 'All in One All', 30, 40000, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan_x_procedimientos`
--

CREATE TABLE `plan_x_procedimientos` (
  `id_plan` int(11) NOT NULL,
  `id_procedimiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plan_x_procedimientos`
--

INSERT INTO `plan_x_procedimientos` (`id_plan`, `id_procedimiento`) VALUES
(1, 2),
(1, 3),
(1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procedimientos`
--

CREATE TABLE `procedimientos` (
  `id_procedimiento` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `procedimientos`
--

INSERT INTO `procedimientos` (`id_procedimiento`, `nombre`, `descripcion`, `precio`, `imagen`) VALUES
(2, '360Lipo', '360 Lipo is a more advanced liposuction procedure that removes fat from various parts of your body. is a fat reduction and body contouring treatment in which you get a contoured body\n', 3000, '360lipoexp.png'),
(3, 'Teeths', 'Enhance your smile with the latest dental trend Using specialized techniques, Beauty Lab will give you a more natural smile with our porcelain veneers. It only takes a 3-hour appointment to give you a full mouth procedure that results in straighter, whiter, fuller, and healthier teeth.\n', 6000, 'teethsexp.png'),
(4, 'Abs', 'The latest trend in plastic surgery for men and women: the abdominal engraving procedure. This method uses energy-assisted liposuction that focuses on removing and thinning fat cells in the stomach, resulting in more sculpted, more prominent abs. Now it is possible to achieve that body that you have always dreamed of.', 1500, 'absexp.png'),
(5, 'Cheek Slimming', 'No more puffy cheeks or angular jaws in one procedure. With our treatment, you will achieve that slim, contoured, V-shaped face you have always wanted.', 2500, 'cheeksexp.png'),
(6, 'Chin', 'With the advent of the newest 3D technology, we offer chin surgeries that will give you a well-shaped chin, perfectly proportionate to your facial structure. This enhancement can either be done with an implant (Genioplasty) or bone-reduction surgery (Mentoplasty). ', 2500, 'chinexp.png'),
(7, 'Botox', 'Get rid of all those forehead lines, crow’s feet, frown lines, and facial creases. Botox injections block signals from the nerves to muscles relaxing your wrinkles. We strive to make you look fresh and youthful, not plastic or fake. Perfect balance is our aim. ', 1000, 'botoxexp.png'),
(9, 'Biopolimeros', 'Aumenta Gluteos', 1500, NULL),
(10, 'Pecho Hombre', 'Silicona Hombre', 1350, NULL),
(11, 'Silicona Pectoral Hombres', 'Pectoral Silicona', 25000, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_reserva` int(11) NOT NULL,
  `fecha_reserva` datetime DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `id_cotizacion` int(11) DEFAULT NULL,
  `id_plan` int(11) DEFAULT NULL,
  `id_procedimiento` int(11) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_reserva`, `fecha_reserva`, `fecha_inicio`, `fecha_fin`, `estado`, `id_cotizacion`, `id_plan`, `id_procedimiento`, `id_usuario`) VALUES
(1, '2020-03-31 00:00:00', '2020-06-11 00:00:00', '2020-06-19 00:00:00', NULL, NULL, 3, NULL, 1),
(2, '2020-03-31 00:00:00', '2020-06-12 00:00:00', '2020-06-20 00:00:00', NULL, NULL, NULL, 6, 1),
(3, '2020-03-31 00:00:00', '2020-06-12 00:00:00', '2020-06-20 00:00:00', NULL, NULL, 1, NULL, 1),
(4, '2020-03-31 00:00:00', '2020-06-12 00:00:00', '2020-06-20 00:00:00', NULL, NULL, 2, NULL, 1),
(5, '2020-03-31 00:00:00', '2020-06-12 00:00:00', '2020-06-20 00:00:00', NULL, NULL, 4, NULL, 1),
(6, '2020-05-05 00:00:00', '2020-07-10 00:00:00', '2020-07-18 00:00:00', NULL, NULL, 4, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_identificacion`
--

CREATE TABLE `tipos_identificacion` (
  `id_tipo_id` int(11) NOT NULL,
  `short_name` varchar(10) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `tipos_identificacioncol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_habitaciones`
--

CREATE TABLE `tipo_habitaciones` (
  `id_tipo_habitacion` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_habitaciones`
--

INSERT INTO `tipo_habitaciones` (`id_tipo_habitacion`, `nombre`) VALUES
(1, 'Vip'),
(2, 'Sencilla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `email_verified_at` datetime DEFAULT NULL,
  `movil` varchar(50) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `identificacion` varchar(50) DEFAULT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `id_tipo_id` int(11) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `fec_registro` datetime DEFAULT current_timestamp(),
  `fecha_cumpleanos` date DEFAULT NULL,
  `ciudad` varchar(200) DEFAULT NULL,
  `img_perfil` varchar(200) DEFAULT NULL,
  `bl_points` int(11) NOT NULL DEFAULT 0,
  `nombre_contacto` varchar(100) DEFAULT NULL,
  `telefono_contacto` varchar(100) DEFAULT NULL,
  `rh` varchar(1) DEFAULT NULL,
  `verify_token` varchar(500) DEFAULT NULL,
  `verify` tinyint(1) NOT NULL DEFAULT 0,
  `admin` int(11) NOT NULL DEFAULT 0,
  `peso` int(11) NOT NULL DEFAULT 0,
  `estatura` int(11) NOT NULL DEFAULT 0,
  `medicamentos` varchar(2000) NOT NULL DEFAULT '0',
  `alucinogenos` varchar(2000) NOT NULL DEFAULT '0',
  `alergias` varchar(2000) NOT NULL DEFAULT '0',
  `cirugias_genarales` varchar(2000) NOT NULL DEFAULT '0',
  `cirugias_plasticas` varchar(2000) NOT NULL DEFAULT '0',
  `infartos` varchar(2) NOT NULL DEFAULT '0',
  `diabetes` varchar(2) NOT NULL DEFAULT '0',
  `vih` varchar(2) NOT NULL DEFAULT '0',
  `presion_alta` varchar(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `email`, `email_verified_at`, `movil`, `direccion`, `identificacion`, `id_pais`, `id_tipo_id`, `username`, `password`, `estado`, `fec_registro`, `fecha_cumpleanos`, `ciudad`, `img_perfil`, `bl_points`, `nombre_contacto`, `telefono_contacto`, `rh`, `verify_token`, `verify`, `admin`, `peso`, `estatura`, `medicamentos`, `alucinogenos`, `alergias`, `cirugias_genarales`, `cirugias_plasticas`, `infartos`, `diabetes`, `vih`, `presion_alta`) VALUES
(0, 'Blank', NULL, 'blank@gmail.com', NULL, '000000', NULL, NULL, NULL, NULL, NULL, '$2y$10$JYiIRF5mhqywf/QfDiU4EOzferHjyGQzgWl6fV6.Kgfxdgi0r8e0K', NULL, '2020-06-12 16:35:35', NULL, NULL, NULL, 0, NULL, NULL, NULL, '1rke9ges3iecewh1pd80bx4tm3qb7na6elu7o53yjfd5a2zve', 1, 1, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(1, 'Andres', 'Gutiérrez', 'pipe64910@gmail.com', NULL, '3217926491', 'calle 66', '1192791487', 1, NULL, 'andrew', '$2y$10$OWaoTxecq4BcxJZBqufCYOQrWSkN1dOuJs2Kvx47SBWMlMPj.yake', NULL, '2020-03-30 22:16:53', NULL, 'Medellín', 'user_avatar1586040464.jpeg', 80, NULL, NULL, NULL, '0w2261gy46k82jpnsbezhuqftdcrmed5xlaif859d13v7fo35', 1, 1, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(2, 'Miguel Angel', 'Garcia Rojas', 'miguelhito54@gmail.com', NULL, '3043279161', 'cll 39 b sur #19 a 15', '1000747114', 3, NULL, 'Miguelhito', '$2y$10$niwsXUeF7L4eyizjhnXH4OIlYVq3Z4kcQMWImf7C3zB7LMBMpHueK', NULL, '2020-03-31 18:33:24', NULL, 'Medellín', 'user_avatar1588825148.jpeg', 5, NULL, NULL, NULL, 'kve460cx2i5958f5f7m4wjal8sgzenuqy4h3e98r3p10tdcob', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(3, 'Maria Fernanda Torres', NULL, 'mafetorres3110@gmail.com', NULL, '3004844169', NULL, NULL, NULL, NULL, NULL, '$2y$10$UT0pyF7/8NnVCvfP.8dymuFqdXDKW8P3nHzom1E.oIvwrluh/22iy', NULL, '2020-03-31 23:17:01', NULL, NULL, NULL, 5, NULL, NULL, NULL, '8c55rfjey6pd27ge18hfxci5lkd403bv3zm464o5ucs9nwtqa', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(4, 'Daniel Emru', NULL, 'danielemru@gmail.com', NULL, '2133733898', NULL, NULL, NULL, NULL, NULL, '$2y$10$WsTFDE1HHpQgKsuPx5B5OORzudwQeMAuXaVEy11DH.OVpheHCJX7q', NULL, '2020-04-03 18:36:58', NULL, NULL, 'user_avatar1585955708.jpeg', 15, NULL, NULL, NULL, '0bxqwji13ps523v47nc9a4y8de527e7fb2mrthgoz8u6ka58l', 1, 1, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(5, 'Richard Alexander', NULL, 'richard.betancur@gmail.com', NULL, '3116370583', NULL, NULL, NULL, NULL, NULL, '$2y$10$d8uOn0rRnStudRPmlq5FU.wJRhxl//XT7WOoCFZUafr8pqQbOmqG2', NULL, '2020-04-04 17:10:52', NULL, NULL, NULL, 40, NULL, NULL, NULL, 'wtcksfn5uihycaq1gmve9785jle28obx0zf7bb8054cdr3p69', 1, 1, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(6, 'diego velez', 'velez', 'Dveleze@gmail.com', NULL, '3016040849', 'cll 27 sur # 27 15', '98888776', 3, NULL, 'cirujo', '$2y$10$AtuBnuge5KsrWlpffD7bZOYvYxApAAn1D7Suj5vHHERI.n9frZ9RK', NULL, '2020-04-04 22:17:58', NULL, 'Medellín', 'user_avatar1586897614.jpeg', 0, NULL, NULL, NULL, 'i90alye4195rubdk05wh5q8g6ct9m86j7zxf86nsbp837ev2o', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(7, 'Alexander', NULL, 'rbetancur@misena.edu.co', NULL, '3116370583', NULL, NULL, NULL, NULL, NULL, '$2y$10$wFM9lFS7mWEj/sN67xdeeuczhKvq8kkXtEwvU6qkXBKTe12MMUQlK', NULL, '2020-04-12 02:10:05', NULL, NULL, NULL, 0, NULL, NULL, NULL, '6dy2tgnsdzc983xm4lu7rfea075kp8v25bo781hi1jew09q87', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(8, 'Dream', NULL, 'i.dream.iq@gmail.com', NULL, '2133733898', NULL, NULL, NULL, NULL, NULL, '$2y$10$eCAVyxioeJjx8.q3FLpln.amkdudivL8E3O6dk3jV9FklaACASFsm', NULL, '2020-04-13 02:43:17', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'd13a08717b5vd8h4otjwy9xqzi586em2fpbs5ulnrgekc396c', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(9, 'Arielle', NULL, 'galileo.arielle@gmail.com', NULL, '+639277634834', NULL, NULL, NULL, NULL, NULL, '$2y$10$HSBYxcAxDOvYHbZUhoY8dOGfmjrJymzXKVO0M8/mSQsvXE2EDU6sq', NULL, '2020-04-16 02:34:28', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'p53k0v6ria8q9dsh5woxbtn3al4415c72u6zgeeff7m4c4j9y', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(10, 'ehitelisted018@gmail.com', NULL, 'ehitelisted018@gmail.com', NULL, 'ehitelisted018@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$MbUpXItoxRCHJL5qu4D7TemCAM24d9Aq3vQgo0/ADqbYA/6eRbVNK', NULL, '2020-05-04 08:58:41', NULL, NULL, NULL, 0, NULL, NULL, NULL, '34pnfgi8dect1b69sqzj27ew50a54m54cvkfuxayld1990ohr', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(11, 'Whitelisted018@gmail.com', NULL, 'Whitelisted018@gmail.com', NULL, 'Whitelisted018@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$DDMlaVF9e6BYeVwHqfoXR.82Y8JzwrA2z8EtV5WeINDFJUWgHv49y', NULL, '2020-05-04 09:00:32', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'lnzet03j7ve74akp05ho3brsfixc858ad2gbqfy6w9u199dem', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(12, 'victoria', NULL, 'viictormotorhead@gmail.com', NULL, '+573104193851', NULL, NULL, NULL, NULL, NULL, '$2y$10$lFcODCyWoNJaqKt0M.hwCuDd9p9bGy5rvmxuHNDaOyGdgvHTCkRk6', NULL, '2020-05-04 16:17:30', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'bka03f20pc6cl5duhw3niday0x41tzme57o9s168bqvrg4je6', 1, 0, 0, 0, '0', '0', '0', '0', '0', '1', '1', '1', '1'),
(13, 'Andres Serna', NULL, 'andresuchimaserna@gmail.com', NULL, '3508743058', NULL, NULL, NULL, NULL, NULL, '$2y$10$LKI7uHHU49748JrMbzVt2O1JTYriLngteht8N1EZpvofaZnjgCyY.', NULL, '2020-05-04 17:57:12', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'd0ear61ne2c73i9qkm8buv0pdh4ots5eb2577z3gjcx85ylwf', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(14, 'zayda  jimenez', NULL, 'zaydajimenez05@gmail.com', NULL, '3216758870', NULL, NULL, NULL, NULL, NULL, '$2y$10$v.jcRjfe/rB/V3xCdAiZoeRpOICH6prax0giQJeeb2V.ZNh4qQ7Ga', NULL, '2020-05-04 21:24:09', NULL, NULL, NULL, 0, NULL, NULL, NULL, '13i94d6r8p6dfycexj88qek9o2705n9vl0fbmut7f5wzabgsh', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(15, 'Alejandra Londoño', NULL, 'squintero@softi.com.co', NULL, '3500908978', NULL, NULL, NULL, NULL, NULL, '$2y$10$nvbfFv0L1ldN4wPoMpZb2OXI5s8Cf17r9tbfGsBIxD65Bq3BXoH0O', NULL, '2020-05-04 23:01:23', NULL, NULL, NULL, 0, NULL, NULL, NULL, '8o94nja09h3q1d5eauw0lcg4if7x56bs9ecr93bvemp22zkty', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(16, 'David', NULL, 'dbaena15@gmail.com', NULL, '57 3195982836', NULL, NULL, NULL, NULL, NULL, '$2y$10$IDF/GZUZA.6wugWiiqczw.Oht6i4rCR9bvaNotTfzYPzR0Z.Teg8u', NULL, '2020-05-12 04:17:32', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'i98ckabo2l1s4udq3zy7acv3frpf0xh5m5856edwatgej2nba', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(17, 'khatia', NULL, 'khatimosidze@gmail.com', NULL, '599249084', NULL, NULL, NULL, NULL, NULL, '$2y$10$P0X1JWx7Lyv.CgsBgXPNuuFLKreedebtdrp.IJxf3td9ZvcYH.v9W', NULL, '2020-05-14 12:26:37', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'ovr3e8yu0dhw5c46befd2tp039jd1qixlngam0c5bs8f7kzde', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(18, 'suranjan kumar', NULL, 'suranjankumarsuranjankumar5@gmail.com', NULL, '7565092980', NULL, NULL, NULL, NULL, NULL, '$2y$10$f7zy/A2KyIEqbpIq//B1heD5gOR.NxFuvMxIJMT8rkZHVFOiNaf/u', NULL, '2020-05-15 06:33:14', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'e78tobv4z1b5e8dwy3l6akug0ceixa21mafrjsq6hp7953bn2', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(19, 'Dori', NULL, 'andreamartinglez@gmail.com', NULL, '651383747', NULL, NULL, NULL, NULL, NULL, '$2y$10$HL2T1mRyxQTT5vziIZG0dOW70yT7H0tB.genYgN7cLFE78buHQbfa', NULL, '2020-05-17 22:32:17', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'vfqc1bei9c5b14p2yegaus0cj75k1xlne7rbz8wat32odh7m6', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(20, 'anna', NULL, 'anciko@mail.ru', NULL, '597444455', NULL, NULL, NULL, NULL, NULL, '$2y$10$c2KZKIhaDzGOihYI3U0UXO9sZSovP3tIzsWCaDlqIFhL1HXO2xfJK', NULL, '2020-05-28 12:03:10', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'v29f5fyc1d77ehc8fmze8t5x4o2u2ik0plw1sjnb6e34aqarg', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(21, 'Gustavo', NULL, 'gustavomacias06@yahoo.es', NULL, '3148744041', NULL, NULL, NULL, NULL, NULL, '$2y$10$.otk./KvXtRU.74y5UsXdOHcPYGPMcY8Cm2hhoVofEY7dc8srRhAW', NULL, '2020-06-03 17:20:29', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'at81uz8es75dovy62fbpldidk465mx7j6qhcdbg7erdn03w9d', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(22, 'lynne', NULL, 'juve_panget@yahoo.com', NULL, '09451985786', NULL, NULL, NULL, NULL, NULL, '$2y$10$FzMWcLsF0Pr4tL/z6LOK0e2dto1OHs1ni.2Yje/G55.eEsCM9cMNS', NULL, '2020-06-11 00:33:37', NULL, NULL, NULL, 0, NULL, NULL, NULL, '1s5xebf69cupm5n8tbiz2lgw0eqe3co67rykda41jbfc7hve1', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(23, 'steven', NULL, 'stiven.betancur@gmail.com', NULL, '3155200285', NULL, NULL, NULL, NULL, NULL, '$2y$10$4ej/rDXNc6AUv5YBAapjyet0agvYGVu2LSDJPNQ953SaGCRkQqPyq', NULL, '2020-06-11 03:32:12', NULL, NULL, NULL, 25, NULL, NULL, NULL, 'xg3cu50n4ecta8z58dbq1vc1y5kj2c6irc4ehwbopel7s9fma', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(25, 'nomusa', NULL, 'nomsa6872@gmail.com', NULL, '0604742343', NULL, NULL, NULL, NULL, NULL, '$2y$10$tPAITqzAcB486t3hdo7xxuFCWRV3RPh/sZplRltvIv7uW3cVjZtMy', NULL, '2020-07-10 20:31:03', NULL, NULL, NULL, 0, NULL, NULL, NULL, '78c9smb57hndtzar1802c4fwl6dkbj0x53fuiqdcyp0vgeo01', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(26, 'johan alexis perez mendoza', NULL, 'johanpemendoza@gmail.com', NULL, '3232498172', NULL, NULL, NULL, NULL, NULL, '$2y$10$Of3myEihiTI9IpH0bjpsgOC5mt.OSZdhMjorOcaY1sImT73OHgpQ.', NULL, '2020-07-20 22:45:17', NULL, NULL, 'user_avatar1595285256.jpeg', 0, NULL, NULL, NULL, 'c7dvp36e2b2ats1hmkx85ydrog74we59n1fz01li1ffq4j6bu', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(27, 'Yhon Montoya', NULL, 'alexmontoyau@gmail.com', NULL, '3106432512', NULL, NULL, NULL, NULL, NULL, '$2y$10$qE3kb1.3VrlGhms55UTFGuUeafj16QdsZrITRnHXDGHWvKoFnVMMK', NULL, '2020-07-24 02:08:39', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'xilyf4k2837eofum11wpj17asdznrqaheb7a0c3vg5d6t5294', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(28, 'Turana Pashayeva', NULL, 'turana.pasha@gmail.com', NULL, '0556105497', NULL, NULL, NULL, NULL, NULL, '$2y$10$SmuuOM7kmozKdrpsgUy19umxIVAypi1FffLEdD1BvWtEPyaHoazM2', NULL, '2020-08-22 17:26:10', NULL, NULL, NULL, 0, NULL, NULL, NULL, '5yia1296okgut3eqc4550z5hb1j0rplf132dwv48m4s67xnfe', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(29, 'Nagaraj Bilagi', NULL, 'nagarajbilagilxr@gmail.com', NULL, '7619533293', NULL, NULL, NULL, NULL, NULL, '$2y$10$Jw3KBQbXK9TGqqsO4/LuU.E.r3XZmSTvJH1bguXqQo2kvZS.ByZl2', NULL, '2020-09-02 02:51:47', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'dzu345jrv91mfa537clo8wcndyq6fig5xb040s8h22pak0tfe', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(30, 'sinta', NULL, 'sintadewiazka@gmail.com', NULL, '089611464967', NULL, NULL, NULL, NULL, NULL, '$2y$10$Hy5T6BCHN1ywchzm6IGBh.GMD.sWdJDPluC.8eEAK9d0dLz6oY38y', NULL, '2020-09-03 14:09:18', NULL, NULL, NULL, 0, NULL, NULL, NULL, '176p0gjl02qfnct6s5dyxekfrzu5ov99w953i58chfem4bab0', 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(31, 'mariko', NULL, 'marikorazmadze1@gmail.com', NULL, '015758120783', NULL, NULL, NULL, NULL, NULL, '$2y$10$Ohf9dznCKb07TNzi4gy5z.oQoJsFm95AgXDKA2nmzTIL5QmOMB7uS', NULL, '2020-09-18 05:53:39', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'pce9v5l713gd0b564aoh2uyjrft5ib7d46d8z4wx9kqn3sm6f', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(32, 'Prince', NULL, 'yungprince333@gmail.com', NULL, '2133733898', NULL, NULL, NULL, NULL, NULL, '$2y$10$VP0gMJ/vMjZkC6zqUOJdTuKsSsOJE7z7UvpSdeugrkMnJf6tvztAi', NULL, '2020-09-30 14:53:58', NULL, NULL, NULL, 0, NULL, NULL, NULL, 'of700wf9mile4vk8cxc57gha537rdp65s22nt6j9cqzbu4y13', 1, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_img_zona_afectada`
--

CREATE TABLE `usuarios_img_zona_afectada` (
  `id_imagen` int(11) NOT NULL,
  `imagen` text DEFAULT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_observaciones_medica`
--

CREATE TABLE `usuarios_observaciones_medica` (
  `usuarios_id_usuario` int(11) NOT NULL,
  `id_observacion_medica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `antes_despues`
--
ALTER TABLE `antes_despues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `blog_user_block`
--
ALTER TABLE `blog_user_block`
  ADD PRIMARY KEY (`user_id`,`user_blocked_id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_blog` (`id_blog`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `consultorios`
--
ALTER TABLE `consultorios`
  ADD PRIMARY KEY (`id_consultorio`,`descripcion`,`consultorioscol`),
  ADD KEY `fk_consultorios_medicos1_idx` (`id_medico`);

--
-- Indices de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  ADD PRIMARY KEY (`id_cotizacion`),
  ADD KEY `fk_cotizaciones_habtaciones1_idx` (`id_habitacion`),
  ADD KEY `fk_cotizaciones_usuarios1_idx` (`id_usuario`);

--
-- Indices de la tabla `cotizaciones_x_procedimiento`
--
ALTER TABLE `cotizaciones_x_procedimiento`
  ADD PRIMARY KEY (`id_cotizacion`,`id_cirujia`),
  ADD KEY `fk_cotizaciones_x_cirujia_cotizaciones1_idx` (`id_cotizacion`),
  ADD KEY `fk_cotizaciones_x_cirujia_cirujias1_idx` (`id_cirujia`);

--
-- Indices de la tabla `estudios`
--
ALTER TABLE `estudios`
  ADD PRIMARY KEY (`id_estudio`),
  ADD KEY `fk_estudios_medicos1_idx` (`id_medico`);

--
-- Indices de la tabla `experiencia_laboral`
--
ALTER TABLE `experiencia_laboral`
  ADD PRIMARY KEY (`id_experienci`),
  ADD KEY `fk_experiencia_laboral_medicos1_idx` (`id_medico`);

--
-- Indices de la tabla `forgot_password`
--
ALTER TABLE `forgot_password`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id_habitacion`),
  ADD KEY `fk_tipo_habitacion` (`id_tipo_habitacion`);

--
-- Indices de la tabla `habitaciones_img`
--
ALTER TABLE `habitaciones_img`
  ADD PRIMARY KEY (`id_habitacion_img`),
  ADD KEY `fk_habitaciones_img_habtaciones1_idx` (`id_habitacion`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `id_reserva` (`id_reserva`);

--
-- Indices de la tabla `imagenesxantes_despues`
--
ALTER TABLE `imagenesxantes_despues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_referenca` (`id_referencia`);

--
-- Indices de la tabla `imagenesxblog`
--
ALTER TABLE `imagenesxblog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_blog` (`id_blog`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_blog` (`id_blog`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`id_medico`),
  ADD KEY `fk_medicos_usuarios1_idx` (`id_usuario`);

--
-- Indices de la tabla `observaciones_medicas`
--
ALTER TABLE `observaciones_medicas`
  ADD PRIMARY KEY (`id_observacion_medica`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id_pais`);

--
-- Indices de la tabla `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id_plan`);

--
-- Indices de la tabla `plan_x_procedimientos`
--
ALTER TABLE `plan_x_procedimientos`
  ADD PRIMARY KEY (`id_plan`,`id_procedimiento`),
  ADD KEY `fk_plan_x_procedimientos_planes1_idx` (`id_plan`),
  ADD KEY `fk_plan_x_procedimientos_procedimientos1_idx` (`id_procedimiento`);

--
-- Indices de la tabla `procedimientos`
--
ALTER TABLE `procedimientos`
  ADD PRIMARY KEY (`id_procedimiento`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `fk_reservas_cotizaciones1_idx` (`id_cotizacion`),
  ADD KEY `fk_reservas_planes1_idx` (`id_plan`),
  ADD KEY `fk_reservas_usuarios1_idx` (`id_usuario`),
  ADD KEY `id_procedimiento` (`id_procedimiento`);

--
-- Indices de la tabla `tipos_identificacion`
--
ALTER TABLE `tipos_identificacion`
  ADD PRIMARY KEY (`id_tipo_id`);

--
-- Indices de la tabla `tipo_habitaciones`
--
ALTER TABLE `tipo_habitaciones`
  ADD PRIMARY KEY (`id_tipo_habitacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personas_paises1_idx` (`id_pais`),
  ADD KEY `fk_personas_tipos_identificacion1_idx` (`id_tipo_id`);

--
-- Indices de la tabla `usuarios_img_zona_afectada`
--
ALTER TABLE `usuarios_img_zona_afectada`
  ADD PRIMARY KEY (`id_imagen`),
  ADD KEY `fk_usuarios_img_zona_afectada_usuarios1_idx` (`id_usuario`);

--
-- Indices de la tabla `usuarios_observaciones_medica`
--
ALTER TABLE `usuarios_observaciones_medica`
  ADD PRIMARY KEY (`usuarios_id_usuario`,`id_observacion_medica`),
  ADD KEY `fk_usuarios_observaciones_medica_usuarios1_idx` (`usuarios_id_usuario`),
  ADD KEY `fk_usuarios_observaciones_medica_observaciones_medicas1_idx` (`id_observacion_medica`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `antes_despues`
--
ALTER TABLE `antes_despues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `forgot_password`
--
ALTER TABLE `forgot_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `imagenesxantes_despues`
--
ALTER TABLE `imagenesxantes_despues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagenesxblog`
--
ALTER TABLE `imagenesxblog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id_plan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `usuarios_img_zona_afectada`
--
ALTER TABLE `usuarios_img_zona_afectada`
  MODIFY `id_imagen` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `antes_despues`
--
ALTER TABLE `antes_despues`
  ADD CONSTRAINT `antes_despues_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_blog`) REFERENCES `blog` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `consultorios`
--
ALTER TABLE `consultorios`
  ADD CONSTRAINT `fk_consultorios_medicos1` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  ADD CONSTRAINT `fk_cotizaciones_habtaciones1` FOREIGN KEY (`id_habitacion`) REFERENCES `habitaciones` (`id_habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cotizaciones_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cotizaciones_x_procedimiento`
--
ALTER TABLE `cotizaciones_x_procedimiento`
  ADD CONSTRAINT `fk_cotizaciones_x_cirujia_cirujias1` FOREIGN KEY (`id_cirujia`) REFERENCES `procedimientos` (`id_procedimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cotizaciones_x_cirujia_cotizaciones1` FOREIGN KEY (`id_cotizacion`) REFERENCES `cotizaciones` (`id_cotizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `estudios`
--
ALTER TABLE `estudios`
  ADD CONSTRAINT `fk_estudios_medicos1` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `experiencia_laboral`
--
ALTER TABLE `experiencia_laboral`
  ADD CONSTRAINT `fk_experiencia_laboral_medicos1` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `forgot_password`
--
ALTER TABLE `forgot_password`
  ADD CONSTRAINT `forgot_password_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `fk_tipo_habitacion` FOREIGN KEY (`id_tipo_habitacion`) REFERENCES `tipo_habitaciones` (`id_tipo_habitacion`);

--
-- Filtros para la tabla `habitaciones_img`
--
ALTER TABLE `habitaciones_img`
  ADD CONSTRAINT `fk_habitaciones_img_habtaciones1` FOREIGN KEY (`id_habitacion`) REFERENCES `habitaciones` (`id_habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`id_reserva`) REFERENCES `reservas` (`id_reserva`);

--
-- Filtros para la tabla `imagenesxantes_despues`
--
ALTER TABLE `imagenesxantes_despues`
  ADD CONSTRAINT `imagenesXantes_despues_ibfk_1` FOREIGN KEY (`id_referencia`) REFERENCES `antes_despues` (`id`);

--
-- Filtros para la tabla `imagenesxblog`
--
ALTER TABLE `imagenesxblog`
  ADD CONSTRAINT `imagenesXblog_ibfk_1` FOREIGN KEY (`id_blog`) REFERENCES `blog` (`id`);

--
-- Filtros para la tabla `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_blog`) REFERENCES `blog` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD CONSTRAINT `fk_medicos_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `plan_x_procedimientos`
--
ALTER TABLE `plan_x_procedimientos`
  ADD CONSTRAINT `fk_plan_x_procedimientos_procedimientos1` FOREIGN KEY (`id_procedimiento`) REFERENCES `procedimientos` (`id_procedimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `fk_reservas_cotizaciones1` FOREIGN KEY (`id_cotizacion`) REFERENCES `cotizaciones` (`id_cotizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reservas_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_procedimiento`) REFERENCES `procedimientos` (`id_procedimiento`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_personas_paises1` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personas_tipos_identificacion1` FOREIGN KEY (`id_tipo_id`) REFERENCES `tipos_identificacion` (`id_tipo_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_img_zona_afectada`
--
ALTER TABLE `usuarios_img_zona_afectada`
  ADD CONSTRAINT `fk_usuarios_img_zona_afectada_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_observaciones_medica`
--
ALTER TABLE `usuarios_observaciones_medica`
  ADD CONSTRAINT `fk_usuarios_observaciones_medica_observaciones_medicas1` FOREIGN KEY (`id_observacion_medica`) REFERENCES `observaciones_medicas` (`id_observacion_medica`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuarios_observaciones_medica_usuarios1` FOREIGN KEY (`usuarios_id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
