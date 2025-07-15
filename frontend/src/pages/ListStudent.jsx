import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function ListStudent() {

      const [students, setStudent] = useState([]);

      useEffect((e) => {
            axios.get('http://localhost:5000/students')
                  .then(res => setStudent(res.data))
                  .catch(err => console.log(err));
      }, []);

const deleteHandle=(id)=>{
      axios.delete('http://localhost:5000/delete-student/'+id)
      .then(res=>{
            console.log('Student deleted success');
            alert('Deleted');
            window.location.reload();
      })
      .catch(err=>console.log(err))
      ,[id]
}
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
                                                <th>phone</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                students.map((student, index) => {
                                                      return (
                                                            <tr key={index}>
                                                                  <td>{student.id}</td>
                                                                  <td>{student.name}</td>
                                                                  <td>{student.email}</td>
                                                                  <td>{student.phone}</td>
                                                                  <td>
                                                                        <button onClick={(e)=>{deleteHandle(student.id)}} className='btn btn-sm btn-danger'>Delete</button>
                                                                  </td>
                                                            </tr>
                                                      )
                                                })
                                          }

                                    </tbody>

                              </table>
                        </div>
                  </div>
            </div>
      )
}

export default ListStudent
