ALTER TABLE `reservas`
	ADD COLUMN `fecha_inicio` DATETIME NULL DEFAULT NULL AFTER `fecha_reserva`,
	ADD COLUMN `fecha_fin` DATETIME NULL DEFAULT NULL AFTER `fecha_inicio`,
	DROP COLUMN `observaciones`;


ALTER TABLE `habitaciones`
	ADD COLUMN `cantidad_camas` INT NULL DEFAULT NULL AFTER `estado`,
	ADD COLUMN `cantidad_camas_disponibles` INT NULL DEFAULT NULL AFTER `cantidad_camas`;
