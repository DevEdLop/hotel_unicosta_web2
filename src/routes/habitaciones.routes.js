import { Router } from 'express';
import {
    getHabitacionByCodigo,
    getHabitaciones
} from '../controllers/habitaciones.controller.js';

const route = Router();
route.get('/rooms', getHabitaciones)

route.get('/rooms/:codigo', getHabitacionByCodigo)


export default route;