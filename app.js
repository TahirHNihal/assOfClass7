// Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30

const stuInfo = [
  {
    sName: "Nihal",
    roll: 10,
    age: 17,
    cls: "Nine",
    gender: "Male",
    location: "Uttara",
    admissionFees: 9000,
  },
  {
    sName: "Rupam",
    roll: 11,
    age: 17,
    cls: "Nine",
    gender: "Male",
    location: "Banani",
    admissionFees: 9000,
  },
  {
    sName: "Mithila",
    roll: 07,
    age: 16,
    cls: "Eight",
    gender: "Female",
    location: "Uttara",
    admissionFees: 8000,
  },
  {
    sName: "Hossain",
    roll: 30,
    age: 13,
    cls: "Six",
    gender: "Male",
    location: "Badda",
    admissionFees: 6000,
  },
  {
    sName: "Fahima",
    roll: 04,
    age: 16,
    cls: "Nine",
    gender: "Female",
    location: "Uttara",
    admissionFees: 9000,
  },
  {
    sName: "Rahima",
    roll: 08,
    age: 16,
    cls: "Eight",
    gender: "Female",
    location: "Badda",
    admissionFees: 8000,
  },
  {
    sName: "Fahim",
    roll: 06,
    age: 16,
    cls: "Nine",
    gender: "Male",
    location: "Uttara",
    admissionFees: 9000,
  },
  {
    sName: "Abdullah",
    roll: 02,
    age: 06,
    cls: "Eight",
    gender: "Male",
    location: "Mirpur",
    admissionFees: 8000,
  },
  {
    sName: "Mustakim",
    roll: 36,
    age: 23,
    cls: "Nine",
    gender: "Male",
    location: "Mirpur",
    admissionFees: 9000,
  },
  {
    sName: "Sagor",
    roll: 21,
    age: 19,
    cls: "Seven",
    gender: "Male",
    location: "Badda",
    admissionFees: 7000,
  },
  {
    sName: "Promi",
    roll: 09,
    age: 15,
    cls: "Six",
    gender: "Female",
    location: "Khilkhet",
    admissionFees: 6000,
  },
  {
    sName: "Tahmid",
    roll: 14,
    age: 19,
    cls: "Eight",
    gender: "Male",
    location: "Mirpur",
    admissionFees: 8000,
  },
  {
    sName: "Mim",
    roll: 25,
    age: 18,
    cls: "Nine",
    gender: "Female",
    location: "Mirpur",
    admissionFees: 9000,
  },
  {
    sName: "Sumaiya",
    roll: 29,
    age: 08,
    cls: "Seven",
    gender: "Female",
    location: "Khilkhet",
    admissionFees: 7000,
  },
];

// - Total Admnission fees

let totalAdmFees = 0;
for (data of stuInfo) {
    console.log(`Name: ${data.sName}`);
    console.log(`Name: ${data.roll}`);
    console.log(`Name: ${data.admissionFees}`);
    console.log(`++++++++++++++++`);
  totalAdmFees += data.admissionFees;
}
console.log(totalAdmFees);


// - Find All Female Students
/*
for(data of stuInfo){
    if(data.gender === 'Female'){
        console.log(data);
    }
}
*/

// - Find class wise student result
/*
console.log(`Class Six Students List`);
for (data of stuInfo){
    if (data.cls === 'Six') {
        
        console.log(data);
    }
}
console.log(`Class Seven Students List`);
for (data of stuInfo){
    if (data.cls === 'Seven') {
        
        console.log(data);
    }
}
console.log(`Class Eight Students List`);
for (data of stuInfo){
    if (data.cls === 'Eight') {
        
        console.log(data);
    }
}
console.log(`Class Nine Students List`);
for (data of stuInfo){
    if (data.cls === 'Nine') {
        
        console.log(data);
    }
}
*/
// - Location wise student result
/*
console.log(`All Uttara students list`);
for(data of stuInfo){
    if(data.location === 'Uttara'){
        console.log(data);
    }
}
console.log(`All Banani students list`);
for(data of stuInfo){
    if(data.location === 'Banani'){
        console.log(data);
    }
}
console.log(`All Badda students list`);
for(data of stuInfo){
    if(data.location === 'Badda'){
        console.log(data);
    }
}
console.log(`All Khilkhet students list`);
for(data of stuInfo){
    if(data.location === 'Khilkhet'){
        console.log(data);
    }
}
console.log(`All Mirpur students list`);
for(data of stuInfo){
    if(data.location === 'Mirpur'){
        console.log(data);
    }
}
*/

// - find student between 10 - 25 age
/*
for(data of stuInfo){
    if(data.age >=10 && data.age <= 25){
        console.log(data);
    }
}
*/