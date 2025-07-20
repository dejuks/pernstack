import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent(){
const navigator=useNavigate();
      const [values,setValues]=useState({
            name:'',
            email:'',
            phone:''
      });
      const {id}=useParams();

      useEffect(()=>{
            axios.get('http://localhost:5000/student/'+id)
            .then(res=>{
                  setValues({...values,
                        name:res.data.name,
                        email:res.data.email,
                        phone:res.data.phone
                  })
            })
            .catch(err=>console.log(err))
      },[id])

const UpdateData=(e)=>{
      e.preventDefault();
      axios.put(`http://localhost:5000/edit-student/${id}`,values)
      .then(res=>{
            setValues({
                  name:res.data.name,
                  email:res.data.email,
                  phone:res.data.phone
            })
            alert('Updated Success');
            navigator('/')

      })
      .catch(err=>console.log(err))

}
      return(
            <div className="container">
                  <div className="row">
                        <div className="col col-md-8">
                              <div className="card">
                                    <div className="card-header">
                                          <h2>Edit Student</h2>
                                    </div>
                                    <div className="card-body">
                                          <form onSubmit={UpdateData}>
                                                <div className="mb-3">
                                                      <label>Name</label>
                                                      <input name="name" className="form-control" placeholder="Name"
                                                      value={values.name}
                                                      onChange={(e)=>setValues({...values,name:e.target.value})}
                                                      />
                                                </div>
                                                <div className="mb-3">
                                                      <label>Email</label>
                                                      <input name="email" className="form-control" placeholder="Email"
                                                      value={values.email}
                                                      onChange={(e)=>setValues({...values,email:e.target.value})}
                                                      />
                                                </div>
                                                <div className="mb-3">
                                                      <label>Phone</label>
                                                      <input name="phone" className="form-control" placeholder="Phone" 
                                                      value={values.phone}
                                                      onChange={(e)=>setValues({...values,phone:e.target.value})}
                                                      />
                                                </div>

                                                <div className="mb-3">
                                                      <button type="submit" className="btn btn-sm btn-info">Update</button>
                                                       </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )

}
export default EditStudent;