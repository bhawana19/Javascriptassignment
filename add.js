"use strict";
class emp {
  constructor(enm, eadd, eid, edsgn) {
    this.enm = enm;
    this.eadd = eadd;
    this.eid = eid;
    this.edsgn = edsgn;
  }
}

let emparr = [];

function data() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let EID = document.getElementById("eid").value;
  let designation = document.getElementById("designation").value;

  if (
    name.length == 0 ||
    address.length == 0 ||
    EID.length == 0 ||
    designation.length == 0
  ) {
    alert("Enter details");
    return false;
  }

  let employ = new emp(name, address, EID, designation);
  console.log(employ);
  emparr.push(employ);
  console.log(typeof emparr[emp]);
  console.log(emparr);
  localStorage.setItem("array", JSON.stringify(emparr));
  let arr = JSON.parse(localStorage.getItem("array"));
  console.log(typeof arr);
  console.log(arr);

  for (let employ of arr) {
    console.log(employ.enm);
  }
  return true;
}
