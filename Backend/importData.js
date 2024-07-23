import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './app/model/user.js'; // Adjust the path as necessary
import config from './app/config/config.js'; // Adjust the path as necessary

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin123", 10),
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("john123", 10),
  },
  {
    name: "Alice Smith",
    email: "alice@email.com",
    password: bcrypt.hashSync("alice123", 10),
  },
  {
    name: "Eva Brown",
    email: "eva@email.com",
    password: bcrypt.hashSync("eva123", 10),
  },
  {
    name: "David Miller",
    email: "david@email.com",
    password: bcrypt.hashSync("david123", 10),
  },
];

async function importData() {
  try {
    await mongoose.connect(config.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    
    await User.deleteMany({});
    console.log('Old users removed');
    
    await User.insertMany(users);
    console.log('Sample users added');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
  }
}

importData();
