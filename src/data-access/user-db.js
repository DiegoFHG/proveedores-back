import db from './index.js';

async function index() {
  try {
    const conn = await db.getConnection();
    const users = await conn.query("SELECT * FROM users");
  } catch (e) {
    
  } 
}

const userDb = {
  index,
};

export default userDb;
