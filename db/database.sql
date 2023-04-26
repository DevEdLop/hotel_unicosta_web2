CREATE DATABASE IF NOT EXISTS hotel_unicosta;

use hotel_unicosta;

CREATE TABLE HABITACIONES(
    codigo INT(10) NOT NULL AUTO_INCREMENT,
    numero INT(10) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    valor INT(10) NOT NULL,
    PRIMARY KEY (codigo)
);

show tables;

CREATE TABLE RESERVAS(
    codigo INT(10) NOT NULL AUTO_INCREMENT,
    codigo_habitacion INT(10) NOT NULL,
    nombre_cliente VARCHAR(255) NOT NULL,
    telefono_cliente VARCHAR(255) NOT NULL,
    fecha_reservación DATE ,
    fecha_entrada DATE,
    fecha_salida DATE
);


