CREATE TABLE `beutylab`.`comentarios` ( `id` INT NOT NULL AUTO_INCREMENT , `id_blog` INT NOT NULL , `id_usuario` INT NOT NULL , `comentario` VARCHAR(500) NOT NULL , `estado` BOOLEAN NOT NULL , PRIMARY KEY (`id`), FOREIGN KEY (`id_blog`) REFERENCES `blog`(`id`), FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ) ENGINE = InnoDB

CREATE TABLE `beutylab`.`likes` ( `id` INT NOT NULL AUTO_INCREMENT , `id_blog` INT NOT NULL , `id_usuario` INT NOT NULL , PRIMARY KEY (`id`), FOREIGN KEY (`id_blog`) REFERENCES `blog`(`id`), FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ) ENGINE = InnoDB

ALTER TABLE `comentarios` CHANGE `estado` `estado` TINYINT(1) NULL;