
    function calculateResult() {
      // Get inputs
      let name = document.getElementById("name").value;
      let roll = document.getElementById("roll").value;
      let studentClass = document.getElementById("class").value;
      let section = document.getElementById("section").value;

      let english = parseInt(document.getElementById("english").value);
      let math = parseInt(document.getElementById("math").value);
      let bengali = parseInt(document.getElementById("bengali").value);
      let science = parseInt(document.getElementById("science").value);

      // Calculate total and average
      let total = english + math + bengali + science;
      let average = total / 4;

    // Pass/Fail check
     let passStatus; 
      if (average >= 40) {
       passStatus = "<span class='pass'>Pass </span>";
  } 
  else {       
      passStatus = "<span class='fail'>Fail </span>";
  }
      // Grade calculation (if-else ladder)
      let grade;
      if (average >= 90) {
        grade = "A+";
      } else if (average >= 80) {
        grade = "A";
      } else if (average >= 70) {
        grade = "B";
      } else if (average >= 60) {
        grade = "C";
      } else if (average >= 50) {
        grade = "D";
      } else {
        grade = "F";
      }

      // Show result
      let resultBox = document.getElementById("resultBox");
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <h2>Result</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Roll:</b> ${roll}</p>
        <p><b>Class:</b> ${studentClass} (${section})</p>
        <p><b>English:</b> ${english}</p>
        <p><b>Math:</b> ${math}</p>
        <p><b>Bengali:</b> ${bengali}</p>
        <p><b>Science:</b> ${science}</p>
        <hr>
        <p><b>Total Marks:</b> ${total}</p>
        <p><b>Average:</b> ${average}</p>
        <p><b>Grade:</b> ${grade}</p>
        <p><b>Result:</b> ${passStatus}</p>
      `;
    }
