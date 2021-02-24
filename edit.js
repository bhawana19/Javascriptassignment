function searchid() {
    input = Number.parseInt(document.getElementById("eId").value);
  
    let f = 0;
    let empedit;
    let arr = JSON.parse(localStorage.getItem("array"));
    console.log(arr.length);
    for (let emp of arr) {
      if (emp.eid === input) {
        empedit = emp;
        f = 1;
        break;
      }
    }
    if (f === 0) {
      document.getElementById("search").style.display = "block";
      document.getElementById("search").textContent = "Id not found";
    } else {
      document.getElementById("search").style.display = "block";
      document.getElementById("search").textContent = "ID found";
      document.getElementById("id1").style.display = "none";
  
      console.log(empedit.enm);
      console.log(empedit.edsgn);
      document.getElementById("id1").style.display = "block";
      document.getElementById("name").value = empedit.enm;
      document.getElementById("address").innerHTML = empedit.eadd;
      document.getElementById("designation").value = empEdit.edsgn;
    }
  }
  
  function edit() {
    let enter_id = Number.parseInt(document.getElementById("eid").value);
    let ednm = document.getElementById("name").value;
    let edadd = document.getElementById("address").value;
    let eddsg = document.getElementById("designation").value;
  
    if (enter_id == 0 || ednm.length == 0 || edadd.length == 0 || eddsg == 0) {
      alert("enter valid data");
      return false;
    }
  
    let empp = JSON.parse(localStorage.getItem("array"));
    console.log(empp.length);
  
    for (let emp of empp) {
      if (emp.eid === entered_id) {
        emp.enm = ednm;
        emp.eadd = edadd;
        emp.edsgn = eddsg;
      }
    }
  
    localStorage.setItem("array", JSON.stringify(empp));
    console.log(empp);
  
    document.getElementById("id1").style.display = "block";
    document.getElementById("id2").style.display = "none";
    return true;
  }
  