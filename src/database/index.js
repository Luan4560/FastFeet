import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import Recipients from '../app/models/Recipient';
import databaseConfig from '../config/database';

const models = [User, Recipients, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
