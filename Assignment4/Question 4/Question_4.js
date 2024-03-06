const apiUrl = 'http://localhost:3000/students';

    async function fetchStudents() {
      try {
        const response = await axios.get(apiUrl);
        const students = response.data;
        const tbody = document.querySelector('#studentsTable tbody');
        tbody.innerHTML = '';

        students.forEach(student => {
          const row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.branch}</td>
            <td>${student.cgpa}</td>
            <td>
              <button onclick="updateStudent(${student.id})">Update</button>
              <button onclick="deleteStudent(${student.id})">Delete</button>
            </td>
          </tr>`;
          tbody.innerHTML += row;
        });
      } catch (error) {
        console.error('Error fetching students:', error.message);
      }
    }

    async function addStudent() {
      const name = document.getElementById('name').value;
      const branch = document.getElementById('branch').value;
      const cgpa = parseFloat(document.getElementById('cgpa').value);

      try {
        await axios.post(apiUrl, { name, branch, cgpa });
        fetchStudents();
    
        document.getElementById('addStudentForm').reset();
      } catch (error) {
        console.error('Error adding student:', error.message);
      }
    }


    async function updateStudent(id) {
        try {
          const response = await axios.get(`${apiUrl}/${id}`);
          const student = response.data;
    
          document.getElementById('updateName').value = student.name;
          document.getElementById('updateBranch').value = student.branch;
          document.getElementById('updateCgpa').value = student.cgpa;
    

          document.getElementById('updateForm').style.display = 'block';
    
          document.getElementById('updateBtn').onclick = async () => {
            const updatedName = document.getElementById('updateName').value;
            const updatedBranch = document.getElementById('updateBranch').value;
            const updatedCgpa = parseFloat(document.getElementById('updateCgpa').value);
    
            await axios.put(`${apiUrl}/${id}`, { name: updatedName, branch: updatedBranch, cgpa: updatedCgpa });
            
            document.getElementById('updateForm').style.display = 'none';
            
            fetchStudents();
          };
    
        } catch (error) {
          console.error('Error fetching student for update:', error.message);
        }
      }
    


    async function deleteStudent(id) {
      try {
        await axios.delete(`${apiUrl}/${id}`);
        fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error.message);
      }
    }

    fetchStudents();
