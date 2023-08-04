// function add_to_json_file() {
//     document.getElementById('submit_btn').addEventListener( 'submit' , 
//         function(event) {
//             let student_details = {
//                 sr : 1,
//                 name : document.getElementById('f_name').value + ' ' + document.getElementById('l_name').value,
//                 age : Date.now() - getElementById('b_date').value,
//                 enrol_date : Date.now()
//             }
//         } 
//     )
// }







    // function add_new_row() {
    //     let table = document.getElementById("table");
    //     let new_row = document.createElement("tr");
    //     let sr_cell = document.createElement("td");
    //     let name_cell = document.createElement("td");
    //     let b_date = document.createElement("td");
    //     let date_enrolled = document.createElement("td");
        
    // }
let full_date_today = new Date();

function print() {
    let f_name = document.getElementById('f_name').value;
    let l_name = document.getElementById('l_name').value;

    let student_details = {
        sr : 1,
        name : f_name + ' ' + l_name,
        age : calculate_age(),
        enrol_date : full_date_today.getDate() + '/' + (full_date_today.getMonth()+1) + '/' + full_date_today.getFullYear()
    }
    alert(console.log(student_details))
}

function calculate_age() {

    const birth_date_input = new Date(document.getElementById('b_date').value);

    const month_of_birth = birth_date_input.getMonth();
    const day_of_birth = birth_date_input.getDate();
    const year_of_birth = birth_date_input.getFullYear();
    
    const years_old = full_date_today.getFullYear() - year_of_birth;

    let age = years_old;

    const month_diff = full_date_today.getMonth() - month_of_birth;
    const date_diff = full_date_today.getDate() - day_of_birth;

    if (month_diff <= 0 && date_diff < 0) {
        age -= 1;
    }
}