import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  });

  const { id } = useParams();               // Get ID from URL
  const navigate = useNavigate();           // For redirecting after update
  useEffect(()=>{
    axios.get('http://localhost:5000/student/'+id)
    .then(res=>{
      console.log(res.data.name);
      setValues({...values,
        name:res.data.name,
        email:res.data.email,
        phone:res.data.phone
      })
    })
    .catch(err=>console.log(err))

  },[id])

  const updateHandle=(e)=>{
e.preventDefault();
axios.put(`http://localhost:5000/edit-student/${id}`,values)
.then(
  res=>{
    setValues({
      name:res.data.name,
      email:res.data.email,
      phone:res.data.phone
    });
    alert('Successfully Updated')
    navigate('/');
  }
)
.catch(err=>console.log(err));
  }

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h2>Edit Student</h2>
            </div>
            <div className='card-body'>
              <form onSubmit={updateHandle} >
                <div className='mb-3'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={values.name}
                    
                    className='form-control'
                    required
                    onChange={(e)=>setValues({...values,name:e.target.value})}

                  />
                </div>
                <div className='mb-3'>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={values.email}
                    
                    className='form-control'
                    required
                    onChange={(e)=>setValues({...values,email:e.target.value})}

                  />
                </div>
                <div className='mb-3'>
                  <label>Phone</label>
                  <input
                    type='text'
                    name='phone'
                    value={values.phone}
                    
                    className='form-control'
                    required
                    onChange={(e)=>setValues({...values,name:e.target.value})}
                  />
                </div>
                <div className='mt-3'>
                  <button type='submit' className='btn btn-sm btn-success'>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
