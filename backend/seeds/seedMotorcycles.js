require('dotenv').config(); 
const mongoose = require('mongoose');
const Motorcycle = require('../models/inventoryItem'); 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('MongoDB connection error:', err));


const motorcycles = [
  {
    title:'Kawasaki Ninja 400',
    model: '',
    price: 4999,
    description: 'Lightweight, sharp-looking, high-performance sport model',
    image: "/seeds/bikepic/aprilia.jpg", 
    inStock: true
  },
  {
    title:'Harley Davidson Street 750',
    model: '',
    price: 7500,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://example.com/path/to/another-image.jpg',
    inStock: false
  },
  {
    title:'Harley Davidson Street 750',
    model: '',
    price: 7500,
    description: 'Urban cruiser with authentic Harley-Davidson style',
    image: 'http://example.com/path/to/another-image.jpg',
    inStock: false
  },
];

// Function to seed motorcycles
const seedMotorcycles = async () => {
  try {
    await Motorcycle.deleteMany({}); // Optional: Clear the collection first
    await Motorcycle.insertMany(motorcycles);
    console.log('Motorcycles have been added successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding motorcycles:', error);
    mongoose.disconnect();
  }
};

seedMotorcycles();