import students from "./student_data.json" assert { type: "json" };

const generateRow = () => {
  document.getElementById("table_body").innerHTML = "";

  students.map((student, i) => {
    const rowHtml = `<tr>
                <td>${student.id}</td>
                <td>${student.full_name}</td>
                <td>${student.age}</td>
                <td>${student.enrolled}</td>
                </tr>
            `;
    document.getElementById("table_body").innerHTML += rowHtml;
  });
};
generateRow();

const writeDataToFile = () => {
  const data = JSON.stringify(students);
  writeFile("student_data.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
};

let full_date_today = new Date();
function insert() {
  let f_name = document.getElementById("f_name").value;
  let l_name = document.getElementById("l_name").value;

  let student_details = {
    id: 1,
    full_name: f_name + " " + l_name,
    age: calculate_age(),
    enrolled:
      full_date_today.getDate() +
      "/" +
      (full_date_today.getMonth() + 1) +
      "/" +
      full_date_today.getFullYear(),
  };
  students.push(student_details);
  writeDataToFile();
  generateRow();
}

document.getElementById("submit_btn").addEventListener("click", insert);

function calculate_age() {
  const birth_date_input = new Date(document.getElementById("b_date").value);
  let years_old =
    full_date_today.getFullYear() - birth_date_input.getFullYear();
  const month_diff = full_date_today.getMonth() - birth_date_input.getMonth();
  const date_diff = full_date_today.getDate() - birth_date_input.getDate();
  if (month_diff < 0) {
    years_old--;
  } else if (month_diff === 0 && date_diff < 0) {
    years_old--;
  }
  return years_old;
}
