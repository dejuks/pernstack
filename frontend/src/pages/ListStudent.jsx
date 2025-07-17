import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListStudent() {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteHandle = (id) => {
    axios.delete(`http://localhost:5000/delete-student/${id}`)
      .then(res => {
        console.log('Student deleted successfully');
        alert('Deleted');
        // Refresh without reload for better UX
        setStudent(prev => prev.filter(student => student.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='row'>
      <div className='card'>
        <div className='card-body'>
          <Link to="/add-student" className="btn btn-primary mb-3">Add Student</Link>
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
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      onClick={() => deleteHandle(student.id)}
                      className='btn btn-sm btn-danger me-2'>
                      Delete
                    </button>
                    <Link
                      to={`/edit-student/${student.id}`}
                      className='btn btn-sm btn-warning'>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
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
