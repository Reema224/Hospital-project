async function loadHospitals() {
  try {
    const response = await fetch('http://localhost/Hospital-project/Backend/hospital.php');
    const hospitals = await response.json();
    const dropdown = document.getElementById("hospital-dropdown");
    hospitals.forEach(hospital => {
      const option = document.createElement("option");
      option.text = hospital.name;
      option.value = hospital.id;
      dropdown.add(option);

    });

  } catch (error) {
    console.log(error);
  }
}

async function loadHospitalsEmployee() {
  try {
    const response = await fetch('http://localhost/Hospital-project/Backend/hospital.php');
    const hospitals = await response.json();
    const dropdown = document.getElementById("hospital-employee-dropdown");
    hospitals.forEach(hospital => {
      const option = document.createElement("option");
      option.text = hospital.name;
      option.value = hospital.id;
      dropdown.add(option);

    });

  } catch (error) {
    console.log(error);
  }
}

async function loadDepartments() {
  const hospitalId = document.getElementById("hospital-dropdown").value;
  try {
    const response = await fetch(`http://localhost/Hospital-project/Backend/department.php?hospital_id=${hospitalId}`);
    if (response.ok) {
      const departments = await response.json();
      const dropdown = document.getElementById("department-dropdown");
      dropdown.innerHTML = "";
      departments.forEach(department => {
        const option = document.createElement("option");
        option.text = department.name;
        option.value = department.id;
        dropdown.add(option);
      });
    } else {
      console.log('Error: ' + response.status);
    }
  } catch (error) {
    console.log('Error:',error);
  }
}

async function loadRooms() {
  const departmentId = document.getElementById("department-dropdown").value;
  try {
    const response = await fetch(`http://localhost/Hospital-project/Backend/room.php?department_id=${departmentId}`);
    if (response.ok) {
      const rooms = await response.json();
      const dropdown = document.getElementById("room-dropdown");
      dropdown.innerHTML = "";
      rooms.forEach(room => {
        const option = document.createElement("option");
        option.text = room.number;
        option.value = room.id;
        dropdown.add(option);
        console.log(option)
      });
    } else {
      console.log('Error: ' + response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

async function loadMedications(){

  try {
    const response = await fetch(`http://localhost/Hospital-project/Backend/medication.php`);
    if (response.ok) {
      const medications = await response.json();
      const dropdown = document.getElementById("medication-dropdown");
      dropdown.innerHTML = "";
      medications.forEach(medication => {
        const option = document.createElement("option");
        option.text = medication.name;
        option.value = medication.id;
        dropdown.add(option);
        console.log(option)
      });
    } else {
      console.log('Error: ' + response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}