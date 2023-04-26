import { Router } from 'express';
import {
    crearReserva,
    editarReserva,
    eliminarReserva,
    getReservas
} from '../controllers/reservas.controller.js';

const route = Router();


route.get('/bookings', getReservas)

route.post('/bookings', crearReserva)

route.patch('/bookings/:codigo', editarReserva)

route.delete('/bookings/:codigo', eliminarReserva)

export default route;