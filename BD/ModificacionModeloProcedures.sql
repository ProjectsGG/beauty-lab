ALTER TABLE `cotizaciones_x_procedimiento`
	DROP FOREIGN KEY `fk_cotizaciones_x_cirujia_cirujias1`;

ALTER TABLE `plan_x_procedimientos`
	DROP FOREIGN KEY `fk_plan_x_procedimientos_procedimientos1`;	
	
ALTER TABLE `reservas`
	DROP FOREIGN KEY `reservas_ibfk_1`;
	
	
ALTER TABLE `procedimientos`
	CHANGE COLUMN `id_procedimiento` `id_procedimiento` INT(11) NOT NULL AUTO_INCREMENT FIRST;	
	
	
ALTER TABLE `reservas`
	ADD CONSTRAINT `fk_reserva_procedure` FOREIGN KEY (`id_procedimiento`) REFERENCES `procedimientos` (`id_procedimiento`);
	

ALTER TABLE `planes`
	ADD COLUMN `id_tipo_habitacion` INT NULL DEFAULT NULL AFTER `img_plan`,
	ADD CONSTRAINT `fk_plan_tipo_habitacion` FOREIGN KEY (`id_tipo_habitacion`) REFERENCES `tipo_habitaciones` (`id_tipo_habitacion`);
	
	
DROP TABLE `habitaciones_img`;

ALTER TABLE `cotizaciones`
	DROP COLUMN `id_habitacion`,
	DROP FOREIGN KEY `fk_cotizaciones_habitaciones1`;
	
	
ALTER TABLE `habitaciones`
	CHANGE COLUMN `id_habitacion` `id_habitacion` INT(11) NOT NULL AUTO_INCREMENT FIRST,
	CHANGE COLUMN `nombre` `nombre` VARCHAR(100) NULL DEFAULT NULL AFTER `id_habitacion`;	