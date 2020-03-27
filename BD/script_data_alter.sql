ALTER TABLE `beutylab`.`procedimientos` ADD COLUMN `imagen` VARCHAR(500) NULL;


INSERT INTO beutylab.procedimientos (id_procedimiento,nombre,descripcion,precio,imagen) VALUES 
(1,'Breasts','Breasts',1000,'breast.jpg')
,(2,'360Lipo','360Lipo',1000,'360lipo.jpg')
,(3,'Booty','Booty',1500,'booty.jpg')
,(4,'Abs','Abs',1500,'abs.jpg')
;