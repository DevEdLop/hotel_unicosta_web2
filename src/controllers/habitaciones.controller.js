import { pool } from '../db.js';
import { request, response } from 'express';

export const getHabitaciones = async (req = request, res = response) => {

    try {
        const [rows] = pool.query('SELECT * FROM HABITACIONES')
        console.log(rows)
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Ha ocrrudo un error comuniquese con el administrador'
        })
    }
}

export const getHabitacionByCodigo = async (req = request, res = response) => {
    const { codigo } = req.params
    try {

        const [rows] = pool.query('SELECT * FROM HABITACIONES WHERE codigo=?', [codigo])
        console.log(rows)

    } catch (error) {

    }
}