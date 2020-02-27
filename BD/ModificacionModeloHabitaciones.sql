ALTER TABLE `planes`
	DROP COLUMN `id_habitacion`,
	DROP FOREIGN KEY `fk_planes_habtaciones1`;


create table `tipo_habitaciones` (
  `id_tipo_habitacion` int not null,
  `nombre` varchar(45) null,
  primary key (`id_tipo_habitacion`))
;

ALTER TABLE `habitaciones`
	ADD COLUMN `id_tipo_habitacion` INT(11) NULL DEFAULT NULL AFTER `cantidad_camas_disponibles`,
	ADD CONSTRAINT `fk_tipo_habitacion` FOREIGN KEY (`id_tipo_habitacion`) REFERENCES `tipo_habitaciones` (`id_tipo_habitacion`);
