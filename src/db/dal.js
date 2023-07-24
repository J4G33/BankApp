const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your SQLite database credentials
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Define the 'users' table schema
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

// Connect to the SQLite database
async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Connected successfully to the database');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


// Create user account
async function create(name, email, password) {
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    return user;
  } catch (error) {
    throw error;
  }
}

// Find user account by email
async function find(email) {
  try {
    const users = await User.findAll({
      where: {
        email: email,
      },
    });
    return users;
  } catch (error) {
    throw error;
  }
}

// Find user account by email and return a single result
async function findOne(email) {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

// Update user's balance (deposit/withdraw amount)
async function update(email, amount) {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    user.balance += amount;
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

// Return all users
async function all() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = { create, findOne, find, update, all, connect };
