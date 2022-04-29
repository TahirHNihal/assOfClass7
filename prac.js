const devInfo = [
  {
    devName: "Tahir",
    devAge: 20,
    devSkill: "Front-End Web Dev",
    devSalary: 25000,
  },
  {
    devName: "Hossain",
    devAge: 25,
    devSkill: "Back-End Web Dev",
    devSalary: 35000,
  },
  {
    devName: "Nihal",
    devAge: 19,
    devSkill: "Full Stack Web Dev",
    devSalary: 50000,
  },
  {
    devName: "Rahim",
    devAge: 32,
    devSkill: "Graphics Designer",
    devSalary: 18000,
  },
  {
    devName: "Karim",
    devAge: 23,
    devSkill: "UI UX",
    devSalary: 25000,
  },
];
let totalSalary = 0;
for (data of devInfo) {
  // console.log(`My Skill: ${data.devSkill}`);
  totalSalary += data.devSalary;
}
console.log(toalSalary);



