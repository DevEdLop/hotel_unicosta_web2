import { pool } from '../db.js';


export const crearReserva = (req, res) => {
    res.send('reservas')
}

export const editarReserva = (req, res) => {
    res.send('actualizar la reserva por codigo')
}


export const eliminarReserva = (req, res) => {
    res.send('Eliminar la reserva por codigo')
}