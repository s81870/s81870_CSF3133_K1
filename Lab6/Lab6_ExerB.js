function checkMark() {
  let name = document.forms["gradeForm"]["name"].value.trim();
  let markInput = document.forms["gradeForm"]["mark"].value.trim();

 
  if (name === "") {
    alert("Name must be filled out.");
    return false;
  }


  if (markInput === "") {
    alert("Mark field cannot be empty.");
    return false;
  }


  if (isNaN(markInput)) {
    alert("Please enter a valid numeric value.");
    return false;
  }

  let mark = Number(markInput);


  if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
  }


  let grade;
  if (mark >= 80) {
    grade = "A";
  } else if (mark >= 65) {
    grade = "B";
  } else if (mark >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = name + " got grade " + grade;

  if (grade === "A" || grade === "B") {
    resultEl.style.color = "green";
  } else if (grade === "C") {
    resultEl.style.color = "orange";
  } else {
    resultEl.style.color = "red";
  }


  const timeEl = document.getElementById("checkedTime");
  timeEl.innerHTML = "Checked on: " + new Date();
  timeEl.style.color = resultEl.style.color;

  return false;
}

function generateRandomMark() {
  const randomMark = Math.floor(Math.random() * 101);
  document.getElementById("mark").value = randomMark;
}

function showTable() {
  let grades = ["A", "B", "C", "F"];
  let ranges = ["80-100", "65-79", "50-64", "0-49"];
  let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

  for (let i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
  }

  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}



// (grade.html, Line 10): onsubmit="checkMark()" did not return false, causing form submission to reload the page and clear the result.
// (grade.html, Line 19): <script src="grades.js"></script> pointed to non-existent "grades.js" instead of "grade.js".
// (grade.html, Line 17): onclick="showtable()" used lowercase "showtable", whereas the function is named showTable().
// (grade.js, Line 7): Used invalid syntax "document.forms["gradeForm"]["mark").value" (closing parenthesis instead of bracket).
// (grade.js, Line 14): Condition "mark < 0 && mark > 100" can never be true; must be "mark < 0 || mark > 100".
// (grade.js, Line 28): Wrong casing "getElementByID" instead of "getElementById".
// (grade.js, Line 38): Loop started at "let i = 1" instead of "let i = 0", skipping grade "A".

