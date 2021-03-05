import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import mariadb from 'mariadb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pool = mariadb.createPool({
  host: 'proveedores-back-mariadb',
  database: 'proveedores',
  user: 'root',
  password: 'proveedores',
  connectionLimit: 10,
});

const conn = await pool.getConnection();

const sellersMigration = readFileSync(
  join(__dirname, '../migrations/sellers.sql')).toString();
const productsMigration = readFileSync(
  join(__dirname, '../migrations/products.sql')).toString();
const usersMigration = readFileSync(
  join(__dirname, '../migrations/users.sql')).toString();

try {
  await conn.query(sellersMigration);
  await conn.query(productsMigration);
  await conn.query(usersMigration);

  console.log('Migrations executed successfully.');
} catch (e) {
  console.log(e);

} finally {
  if (conn) conn.end();
}

process.exit(0);
