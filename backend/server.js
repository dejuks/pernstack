const express = require('express');

const cors = require('cors');

const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
PORT = 5000;


app.post('/add-student', async (req, res) => {
      const { name, email, phone } = req.body;
      const newstudent = await pool.query(
            'insert into students (name,email,phone) values($1,$2,$3) returning *',
            [name, email, phone])
      res.json(newstudent.rows[0]);
})

app.get('/students', async (req, res) => {
      const students = await pool.query(
            'select * from students'
      )
      res.json(students.rows);
})

app.get('/student/:id', async (req, res) => {
      const { id } = req.params;
      const student = await pool.query(
            'select * from students where id = $1', [id]
      )
      res.json(student.rows);
})

app.put('/edit-student/:id', async (req, res) => {
      const { id } = req.params;
      const { name, email, phone } = req.body;
      const updatestudent = await pool.query(
            'update students set name=$1, email = $2, phone =$3 where id= $4',
            [name, email, phone, id]
      )
      res.json({ messaage: 'Updated successfully' });
});


app.delete('/delete-student/:id', async (req, res) => {
      const { id } = req.params;
      const student = await pool.query(
            'delete from students where id = $1',
            [id]
      )
      res.json({ message: 'Deleted Successfully' })
});

app.listen(PORT, () => {
      console.log(`Server is running on PORT:http://localhost:${PORT}`)
})