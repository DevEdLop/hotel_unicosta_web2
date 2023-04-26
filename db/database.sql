CREATE DATABASE IF NOT EXISTS hotel_unicosta;

use hotel_unicosta;

CREATE TABLE IF NOT EXISTS Habitaciones(
    codigo INT NOT NULL AUTO_INCREMENT,
    numero INT(10) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    valor int NOT NULL,
    PRIMARY KEY (codigo)
);

show tables;

CREATE TABLE IF NOT EXISTS reservas(
    codigo INT NOT NULL AUTO_INCREMENT,
    codigo_habitacion INT(10) NOT NULL,
    nombre_cliente VARCHAR(255) NOT NULL,
    telefono_cliente VARCHAR(255) NOT NULL,
  	fecha_reservacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_entrada TIMESTAMP,
    fecha_salida TIMESTAMP,
    PRIMARY KEY (codigo),
    FOREIGN KEY (codigo_habitacion) REFERENCES Habitaciones(codigo)
);


