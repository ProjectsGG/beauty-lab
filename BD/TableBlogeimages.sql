CREATE TABLE `beutylab`.`blog` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `id_usuario` INT NOT NULL , 
    `descripcion` VARCHAR(300) NULL , 
    `estado` BOOLEAN NOT NULL DEFAULT '1', 
    `fecha` DATE NULL , 
    `hora` TIME NULL,
    `likes` INT NOT NULL DEFAULT '0' , 
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`)
) ENGINE = InnoDB;	


CREATE TABLE `beutylab`.`imagenesXblog` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `id_blog` INT NOT NULL , 
    `imagen` VARCHAR(50) NOT NULL , 
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_blog`) REFERENCES `blog`(`id`)
) ENGINE = InnoDB;