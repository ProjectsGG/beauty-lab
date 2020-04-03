ALTER TABLE `usuarios`
	ADD COLUMN `peso` INT(11) NOT NULL DEFAULT 0 AFTER `admin`,
	ADD COLUMN `estatura` INT(11) NOT NULL DEFAULT 0 AFTER `peso`,
	ADD COLUMN `medicamentos` VARCHAR(2000) NOT NULL DEFAULT '0' AFTER `estatura`,
	ADD COLUMN `alucinogenos` VARCHAR(2000) NOT NULL DEFAULT '0' AFTER `medicamentos`,
	ADD COLUMN `alergias` VARCHAR(2000) NOT NULL DEFAULT '0' AFTER `alucinogenos`,
	ADD COLUMN `cirugias_genarales` VARCHAR(2000) NOT NULL DEFAULT '0' AFTER `alergias`;
	
ALTER TABLE `usuarios`
	ADD COLUMN `cirugias_plasticas` VARCHAR(2000) NOT NULL DEFAULT '0' AFTER `cirugias_genarales`,
	ADD COLUMN `infartos` VARCHAR(2) NOT NULL DEFAULT '0' AFTER `cirugias_plasticas`;
	
ALTER TABLE `usuarios`
	ADD COLUMN `diabetes` VARCHAR(2) NOT NULL DEFAULT '0' AFTER `infartos`,
	ADD COLUMN `vih` VARCHAR(2) NOT NULL DEFAULT '0' AFTER `diabetes`,
	ADD COLUMN `presion_alta` VARCHAR(2) NOT NULL DEFAULT '0' AFTER `vih`;	