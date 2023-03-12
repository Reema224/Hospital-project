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


let insert_btn = document.getElementById('insert');
insert_btn.addEventListener('click', assignHospital);


function assignHospital() {

    let user = document.getElementById('user-dropdown').value;
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