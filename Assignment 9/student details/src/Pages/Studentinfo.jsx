import React, {useState,useEffect} from 'react'
import axios from 'axios';
export default function Studentinfo() {
  const [Studentinfo,setStudentinfo] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/studentInfo/')
    .then(response => {
      setStudentinfo(response.data);
    })
    .catch(error => console.log('error in fetch details'))
  },[])


  return (
    <>
    <div className='d-flex justify-content-center mx-2'>
      {Studentinfo.map(student=>(
        <div key={student._id} className="card mx-2">
        <div className="card-body">
          <h5 className="card-title">Name:- {student.name}</h5>
          <p className="card-text">RollNo:- {student.rollNo}</p>
          <p className="card-text">Address:- {student.address}</p>
          <p className="card-text">Mobile:- {student.mobile}</p>
          <p className="card-text">Age:- {student.age}</p>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}
