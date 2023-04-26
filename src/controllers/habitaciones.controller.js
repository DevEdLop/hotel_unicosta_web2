import { pool } from '../db.js';
import { request, response } from 'express';

export const getHabitaciones = async (_req = request, res = response) => {

    try {
        const [rows] = await pool.query('SELECT * FROM Habitaciones')
        if (rows == 0) {
            return res.status(404).json({
                message: 'No hay habitaciones registradas'
            })
        }
        res.send(rows)
    } catch (error) {
        console.log(error.sqlMessage)
        return res.status(500).json({
            message: 'Ha ocrrudo un error comuniquese con el administrador',
            msgSql: error.sqlMessage
        })
    }
}

export const getHabitacionByCodigo = async (req = request, res = response) => {
    const { codigo } = req.params
    try {

        const [rows] = await pool.query('SELECT * FROM Habitaciones WHERE codigo=?', [codigo])
        if (rows == 0) {
            return res.status(404).json({
                message: 'No hay habitaciones con este codigo'
            })
        }
        res.send(rows)
    } catch (error) {
        console.log(error.sqlMessage)
        return res.status(500).json({
            message: 'Ha ocrrudo un error comuniquese con el administrador',
            msgSql: error.sqlMessage
        })
    }
}