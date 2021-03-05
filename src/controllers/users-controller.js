import { userDb } from '../data-access/index.js';

async function listUsers() {
  try {
    const users = await userDb.index();

    return {
      data: {
        users,
      },
    };
  } catch (e) {
    console.log(e);

    return undefined;
  }
}

const usersController = {
  listUsers,
};

export default usersController;

