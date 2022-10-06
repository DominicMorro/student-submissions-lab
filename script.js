"use strict";
// submissions is an array of objects
// 1.
const submissions = [
  {
    name: "Jane", //string
    score: 95, //number
    date: "2020-01-24", //string
    passed: true, //boolean
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};

// not interested in addSubmission's return value,
// ...so i dont call it in a console log
addSubmission(submissions, "Dominic", 100, "222-10-5");
// check work: (data that was modified)
console.log(submissions);

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);
// 4.
const deleteSubmissionByName = (array, name) => {
  const foundIndex = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(foundIndex, 1);
};
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);
// 5. (note: no array method needed)
const editSumbission = (array, index, score) => {};

// 6.

// 7.

// 8.

// 9.

// 10.
