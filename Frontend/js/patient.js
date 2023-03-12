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
    console.log('Error:', error);
  }
}
