import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '03021177ASH',
    port: 3306,
    database: 'hotel_unicosta',
})