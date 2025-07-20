import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListStudent() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Fetch students from backend
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => {
        setStudents(res.data);
        setFilteredStudents(res.data); // Initialize filtered list
      })
      .catch(err => console.log(err));
  }, []);

  // Handle Delete
  const deleteHandle = (id) => {
    axios.delete(`http://localhost:5000/delete-student/${id}`)
      .then(() => {
        alert('Deleted');
        const updatedList = students.filter(student => student.id !== id);
        setStudents(updatedList);
        setFilteredStudents(updatedList);
      })
      .catch(err => console.log(err));
  };

  // Search filter logic
  useEffect(() => {
    const results = students.filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.phone.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredStudents(results);
  }, [search, students]);

  return (
    <div className='row'>
      <div className='card'>
        <div className='card-body'>
          <Link to="/add-student" className="btn btn-primary mb-3">Add Student</Link>

          <div className='mb-4 flex py-2 border rounded'>
            <input
              type="text"
              placeholder='Search by name, email, or phone...'
              className='w-full px-3'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <Link to={`/edit-student/${student.id}`} className='btn btn-sm btn-warning'>Edit</Link>
                    <button
                      onClick={() => deleteHandle(student.id)}
                      className='btn btn-sm btn-danger ms-2'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr><td colSpan="5" className="text-center">No students found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListStudent;