-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla beutylab.consultorios: ~0 rows (aproximadamente)
DELETE FROM `consultorios`;
/*!40000 ALTER TABLE `consultorios` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultorios` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.cotizaciones: ~0 rows (aproximadamente)
DELETE FROM `cotizaciones`;
/*!40000 ALTER TABLE `cotizaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `cotizaciones` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.cotizaciones_x_procedimiento: ~0 rows (aproximadamente)
DELETE FROM `cotizaciones_x_procedimiento`;
/*!40000 ALTER TABLE `cotizaciones_x_procedimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `cotizaciones_x_procedimiento` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.estudios: ~0 rows (aproximadamente)
DELETE FROM `estudios`;
/*!40000 ALTER TABLE `estudios` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudios` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.experiencia_laboral: ~0 rows (aproximadamente)
DELETE FROM `experiencia_laboral`;
/*!40000 ALTER TABLE `experiencia_laboral` DISABLE KEYS */;
/*!40000 ALTER TABLE `experiencia_laboral` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.habitaciones_img: ~0 rows (aproximadamente)
DELETE FROM `habitaciones_img`;
/*!40000 ALTER TABLE `habitaciones_img` DISABLE KEYS */;
/*!40000 ALTER TABLE `habitaciones_img` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.habtaciones: ~1 rows (aproximadamente)
DELETE FROM `habtaciones`;
/*!40000 ALTER TABLE `habtaciones` DISABLE KEYS */;
INSERT INTO `habtaciones` (`id_habitacion`, `nombre`, `comodidades`, `precio_noche`, `estado`) VALUES
	(1, 'Habitación Simple', 'Cama 1.40, tocador, Televisor, Wifi, Cable, Baño, Mini Bar', 500, '1');
/*!40000 ALTER TABLE `habtaciones` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.medicos: ~0 rows (aproximadamente)
DELETE FROM `medicos`;
/*!40000 ALTER TABLE `medicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicos` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.observaciones_medicas: ~0 rows (aproximadamente)
DELETE FROM `observaciones_medicas`;
/*!40000 ALTER TABLE `observaciones_medicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `observaciones_medicas` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.paises: ~0 rows (aproximadamente)
DELETE FROM `paises`;
/*!40000 ALTER TABLE `paises` DISABLE KEYS */;
/*!40000 ALTER TABLE `paises` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.planes: ~1 rows (aproximadamente)
DELETE FROM `planes`;
/*!40000 ALTER TABLE `planes` DISABLE KEYS */;
INSERT INTO `planes` (`id_plan`, `nombre`, `descripcion`, `valor`, `img_plan`, `id_habitacion`) VALUES
	(1, '3D Plan', '3D Plan', 10000, NULL, 1);
/*!40000 ALTER TABLE `planes` ENABLE KEYS */;


-- Volcando datos para la tabla beutylab.procedimientos: ~4 rows (aproximadamente)
DELETE FROM `procedimientos`;
/*!40000 ALTER TABLE `procedimientos` DISABLE KEYS */;
INSERT INTO `procedimientos` (`id_procedimiento`, `nombre`, `descripcion`, `precio`) VALUES
	(1, 'Breasts', 'Breasts', 1000),
	(2, '360Lipo', '360Lipo', 1000),
	(3, 'Booty', 'Booty', 1500),
	(4, 'Abs', 'Abs', 1500);
/*!40000 ALTER TABLE `procedimientos` ENABLE KEYS */;


-- Volcando datos para la tabla beutylab.plan_x_procedimientos: ~4 rows (aproximadamente)
DELETE FROM `plan_x_procedimientos`;
/*!40000 ALTER TABLE `plan_x_procedimientos` DISABLE KEYS */;
INSERT INTO `plan_x_procedimientos` (`id_plan`, `id_procedimiento`) VALUES
	(1, 1),
	(1, 2),
	(1, 3),
	(1, 4);
/*!40000 ALTER TABLE `plan_x_procedimientos` ENABLE KEYS */;


-- Volcando datos para la tabla beutylab.reservas: ~0 rows (aproximadamente)
DELETE FROM `reservas`;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.tipos_identificacion: ~0 rows (aproximadamente)
DELETE FROM `tipos_identificacion`;
/*!40000 ALTER TABLE `tipos_identificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipos_identificacion` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.usuarios: ~1 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `email`, `email_verified_at`, `movil`, `direccion`, `identificacion`, `id_pais`, `id_tipo_id`, `username`, `password`, `estado`, `fec_registro`, `fecha_cumpleanos`, `ciudad`, `img_perfil`, `nombre_contacto`, `telefono_contacto`, `rh`) VALUES
	(1, 'steven', NULL, 'stiven.betancur6@gmail.com', NULL, '3155200285', NULL, NULL, NULL, NULL, NULL, '$2y$10$c5LWuqlUsMRI4X5qw/39NuT8ekEWJwBJY8c9ANyBvHpg4FGhkP8Dq', NULL, '2020-01-27 22:46:52', NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.usuarios_img_zona_afectada: ~0 rows (aproximadamente)
DELETE FROM `usuarios_img_zona_afectada`;
/*!40000 ALTER TABLE `usuarios_img_zona_afectada` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_img_zona_afectada` ENABLE KEYS */;

-- Volcando datos para la tabla beutylab.usuarios_observaciones_medica: ~0 rows (aproximadamente)
DELETE FROM `usuarios_observaciones_medica`;
/*!40000 ALTER TABLE `usuarios_observaciones_medica` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_observaciones_medica` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
