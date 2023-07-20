import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/anunciartedb';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

export default mongoose.connection;

