alter table `beutylab`.`medicos` 
   add column `identificacion` varchar(50) NULL after `id_usuario`, 
   add column `nombres` varchar(200) NULL after `identificacion`, 
   add column `apellidos` varchar(200) NULL after `nombres`, 
   add column `celular` varchar(20) NULL after `apellidos`, 
   add column `email` varchar(100) NULL after `celular`;
   
   
alter table `beutylab`.`medicos` 
   add column `esp_senos` varchar(1) NULL after `email`, 
   add column `esp_caderas` varchar(1) NULL after `esp_senos`, 
   add column `esp_liposuccion` varchar(1) NULL after `esp_caderas`, 
   add column `esp_rinoplastia` varchar(1) NULL after `esp_liposuccion`, 
   add column `esp_sonrisa` varchar(1) NULL after `esp_rinoplastia`;
   
   
ALTER TABLE consultorios
DROP FOREIGN KEY FK_consultorios;

ALTER TABLE consultorios DROP COLUMN id_medico;

DROP TABLE estudios;
DROP TABLE experiencia_laboral;

ALTER TABLE `beutylab`.`medicos` 
   CHANGE `id_medico` `id_medico` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT;   