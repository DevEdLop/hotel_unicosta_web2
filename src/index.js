import express from 'express';
import habitacionesRoutes from './routes/habitaciones.routes.js';
import reservasRoutes from './routes/reservas.routes.js';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

//habitaciones
app.use(habitacionesRoutes)

//reservas
app.use(reservasRoutes)





app.listen(port, () => console.log(`Server listening on [${port} 😎🤙]`))