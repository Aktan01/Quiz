import express from 'express';
import mysql from 'mysql';



const app = express();
const port = 3000;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'opros',
});

app.use(express.json());

app.post('./main.js', (req, res) => {
  const { otvet1 } = req.body;

  if (!otvet1) {
    return res.status(400).json({ error: 'otvet1 is required' });
  }

  const query = 'INSERT INTO opros1 (otvet1) VALUES (?)';
  pool.query(query, [otvet1], (error, results) => {
    if (error) {
      console.error('Error adding data to the database:', error);
      return res.status(500).json({ error: 'Error adding data to the database' });
    }

    console.log('Data added successfully:', results);
    res.json({ success: true, message: 'Data added successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});