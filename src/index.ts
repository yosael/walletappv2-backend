import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  return res.json({ message: 'App setup' });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
