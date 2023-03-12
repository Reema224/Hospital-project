async function loadPatients() {
  try {
    const response = await fetch('http://localhost/Hospital-project/Backend/patient.php');
    const patients = await response.json();
    const dropdown = document.getElementById("patient-dropdown");
    patients.forEach(patient => {
      const option = document.createElement("option");
      option.text = patient.name;
      option.value = patient.id;
      dropdown.add(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function loadEmployees() {
  try {
    const response = await fetch('http://localhost/Hospital-project/Backend/employee.php');
    const employees = await response.json();
    const dropdown = document.getElementById("employee-dropdown");
    employees.forEach(employee => {
      const option = document.createElement("option");
      option.text = employee.name;
      option.value = employee.id;
      dropdown.add(option);
    });
  } catch (error) {
    console.log(error);
  }
}

let insert_btn = document.getElementById('insert');
insert_btn.addEventListener('click', assignHospital);

function assignHospital() {

    let user = document.getElementById('patient-dropdown').value;
    let hospital= document.getElementById('hospital-dropdown').value;
    let isactive = document.getElementById('isactive').value;
    let datejoin = document.getElementById('date_join').value;
    let dateleft = document.getElementById('date_left').value;
    let data = new FormData();
    
    data.append('user_id', user);
    data.append('hospital_id', hospital);
    data.append('is_active', isactive);
    data.append('date_joined', datejoin);
    data.append('date_left', dateleft);
   
    axios.post('http://localhost/Hospital-project/Backend/hospital_users.php', data)
    .then((result) => {
    console.log(result);

  })
  .catch((err) => {
    console.log(err);
  });

}

let insert = document.getElementById('insert-employee');
insert.addEventListener('click', assignEmployee);

function assignEmployee() {

    let employee = document.getElementById('employee-dropdown').value;
    let hospital= document.getElementById('hospital-employee-dropdown').value;
    let ssn= document.getElementById('ssn').value;
    let position = document.getElementById('position').value;
    let datejoined = document.getElementById('date_joinn').value;
    let dateleft = document.getElementById('date_leftt').value;
    let data = new FormData();
    
    data.append('user_id', employee);
    data.append('hospital_id', hospital);
    data.append('ssn', ssn);
    data.append('position', position);
    data.append('date_joined', datejoined);
    data.append('date_left', dateleft);
   
    axios.post('http://localhost/Hospital-project/Backend/employee_infos.php', data)
    .then((result) => {
    console.log(result);

  })
  .catch((err) => {
    console.log(err);
  });

}