import { pool } from '../db.js';
import { request, response } from 'express';



export const getReservas = async (req = request, res = response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM reservas')
        if (rows == 0) {
            return res.status(404).json({
                message: 'No hay reservas registradas'
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
export const crearReserva = async (req = request, res = response) => {
    console.log(req.body)
    try {
        const { codigoHabitacion, nombreCliente, telefonoCliente, fechaEntrada, fechaSalida } = req.body;
        await pool.query(`
    INSERT INTO reservas (codigo_habitacion, nombre_cliente, telefono_cliente, fecha_entrada, fecha_salida)
             VALUES (?,?,?,?,?)`, [codigoHabitacion, nombreCliente, telefonoCliente, fechaEntrada, fechaSalida])
        res.send('Reserva creada exitosamente')
    } catch (error) {
        console.log(error.sqlMessage)
        return res.status(500).json({
            message: 'Ha ocrrudo un error comuniquese con el administrador',
            msgSql: error.sqlMessage
        })
    }

}

export const editarReserva = async (req = request, res = response) => {
    console.log(req.body)
    const { codigo } = req.params
    console.log(codigo)
    try {
        const { codigoHabitacion, nombreCliente, telefonoCliente, fechaEntrada, fechaSalida } = req.body;
        const [rows] = await pool.query(`
        UPDATE reservas 
        SET codigo_habitacion =?, nombre_cliente =?, telefono_cliente =?, fecha_entrada =?, fecha_salida =?
        WHERE codigo =?;`, [codigoHabitacion, nombreCliente, telefonoCliente, fechaEntrada, fechaSalida, codigo])
        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Reserva no encontrada'
        })
        res.send('Reserva actulizada exitosamente')
        console.log(rows)
    } catch (error) {
        console.log(error.sqlMessage)
        return res.status(500).json({
            message: 'Ha ocrrudo un error comuniquese con el administrador',
            msgSql: error.sqlMessage
        })
    }
}


export const eliminarReserva = async (req = request, res = response) => {
    const { codigo } = req.params
    try {
        const [result] = await pool.query('DELETE FROM reservas WHERE codigo =?', [codigo])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'No hay reserva con este codigo'
        })
        res.send('Reserva eliminada correctamente')
    } catch (error) {
        console.log(error.sqlMessage)
        return res.status(500).json({
            message: 'Ha ocrrudo un error comuniquese con el administrador',
            msgSql: error.sqlMessage
        })
    }

}