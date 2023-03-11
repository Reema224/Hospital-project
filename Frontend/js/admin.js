async function loadUsers() {
  try {
    const response = await fetch('http://localhost/Hospital-project/Backend/users.php');
    const hospitals = await response.json();
    const dropdown = document.getElementById("user-dropdown");
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


