import { Router } from 'express';
import {
    crearReserva,
    editarReserva,
    eliminarReserva
} from '../controllers/reservas.controller.js';

const route = Router();


route.post('/bookings', crearReserva)

route.patch('/bookings/:codigo', editarReserva)

route.delete('/bookings/:codigo', eliminarReserva)

export default route;