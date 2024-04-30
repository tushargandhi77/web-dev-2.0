import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Studentacdemic() {
  const [studentAcademicInfo, setStudentAcademicInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/studentAcademicInfo/')
      .then(response => {
        setStudentAcademicInfo(response.data);
      })
      .catch(error => {
        console.log('Error in fetching student academic info:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Academic Information</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Roll No</th>
            <th>Grade</th>
            <th>Math Marks</th>
            <th>Science Marks</th>
            <th>History Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentAcademicInfo.map(student => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.grade}</td>
              <td>{student.marks.math}</td>
              <td>{student.marks.science}</td>
              <td>{student.marks.history}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
