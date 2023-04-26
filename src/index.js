import express from 'express';
import habitacionesRoutes from './routes/habitaciones.routes.js';
import reservasRoutes from './routes/reservas.routes.js';
import { PORT } from './config.js'

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//habitaciones
app.use(habitacionesRoutes)

//reservas
app.use(reservasRoutes)


app.listen(PORT, () => console.log(`Server listening on [${PORT} 😎🤙]`))