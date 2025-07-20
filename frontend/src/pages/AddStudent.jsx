import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
      const navigator=useNavigate();
      const [name,setName]=useState();
      const [phone,setPhone]=useState();
      const [email,setEmail]=useState();
      const submitData=(e)=>{
            e.preventDefault();
            axios.post('http://localhost:5000/add-student',{name,email,phone})
            .then(res=>{
                  console.log('successfully Added');
                  alert('Student Added successfully');
                  navigator('/')
                 
            })
            .catch(err=>console.log(err));

      }
  return (
      <div className='container'>
   <div className='row'>
      <div className='card'>
 <div className='card-header'>
<h2>Add Stdudent</h2>
      </div>
       <div className='card-body'>
<form onSubmit={submitData}>
      <div className='mb-3'>
            <label>Name</label>
            <input name='name' placeholder='name' className='form-control'
            onChange={(e)=>setName(e.target.value)}
            />
      </div>
      <div className='mb-3'>
            <label>Email</label>
            <input name='email' placeholder='email' className='form-control'
              onChange={(e)=>setEmail(e.target.value)}
            />
      </div>
      <div className='mb-3'>
            <label>Phone</label>
            <input name='phone' placeholder='phone' className='form-control'
              onChange={(e)=>setPhone(e.target.value)}
            />
      </div>
      <div className='mt-3'>
            <button type='submit' className='btn btn-sm btn-success'>Add</button>
      </div>
</form>
      </div>
      </div>
   </div>
   </div>
  )
}

export default AddStudent
