ALTER TABLE `plan_x_procedimientos`
	DROP FOREIGN KEY `fk_plan_x_procedimientos_planes1`;
	
ALTER TABLE `reservas`
	DROP FOREIGN KEY `fk_reservas_planes1`;
	
ALTER TABLE `planes`
	CHANGE COLUMN `id_plan` `id_plan` INT(11) NOT NULL AUTO_INCREMENT FIRST;	