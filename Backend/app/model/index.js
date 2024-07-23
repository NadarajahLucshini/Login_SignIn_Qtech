// index.js
import mongoose from 'mongoose';
import User from './user.js'; // Ensure the path is correct

const db = {};
db.mongoose = mongoose;
db.User = User;
db.url = 'mongodb://localhost:27017/qtech';

export default db;
