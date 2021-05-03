function addSubmission (array, newName, newScore, newDate) {
   
    let newSubmission = {
   
       name: newName,
       score: newScore,
       date: newDate,
       
       };
    const newPassed = (newScore > 60);
    newSubmission.passed = newPassed;
    
    array.push(newSubmission);
   
   }  

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName (array, name) {
    let index = array.findIndex(x => x.name === name);
   
     array.splice(index, 1); 
 
 }
 function editSubmission(array, index, score ) {
    array[index].score = score;

    const updatePassed = (score > 60);
    array[index].passed = updatePassed;

    
}
function findSubmissionByName(array, name) {
    const result = array.find(element => element.name === name);
    return result;
}
function findLowestScore(array) {
    let low = array[0];
    array.forEach(num => {
        if (num.score < low.score) {
            low = num;
        }
    })
    return low;
}
function findAverageScore(array) {
    let sum = 0;
    for(const num of array) {
        sum +=num.score;
    }
    return sum / array.length;
}
function filterPassing(array) {
    const passingScore = array.filter(function(submission) {
        return submission.score >= 60;
    })
    return passingScore;
}
function filter90AndAbove(array) {
    const highScore = array.filter((item) => item.score >= 90)
    return highScore;
}

let submissions = [
    {
        name: 'jane',
        score: 95,
        date: '2020-01-24',
        passed: true,
        
    },
    {
        name: 'joe',
        score: 77,
        date: '2018-05-14',
        passed: true,
        
    },
    {
        name: 'jack',
        score: 59,
        date: '2019-07-05',
        passed: false,
        
    },
    {
        name: 'jill',
        score: 88,
        date: '2020-04-22',
        passed: true,
       
    },
]




addSubmission(submissions, "greg", 40, "2020-01-12", "pepper");
console.log(submissions);











// console.log(findAverageScore(submissions));
// console.log(findLowestScore(submissions));
// console.log(findAverageScore(submissions));
console.log(findSubmissionByName(submissions, 'jill'));

// Extented Challenges 

function createRange(start, end) {
    let customArray = [];
    // customArray.length = end - start;

    for(let i = start;i <= end; i++){
        customArray.push(i);
    }
    return customArray;
}
console.log(createRange(4, 9));


let randomArray = ["a", "b", "c", "b", "d", "a", "c", "a", "a", "c", "a", "b", "c"];



function countElements(array){
    let counterOne = 0;
    let counterTwo = 0;
    let counterThree = 0;
    let counterFour = 0;

    for(const element of array) {
        if (element === "a")  counterOne++;
        if (element === "b")  counterTwo++;
        if (element === "c")  counterThree++;
        if (element === "d")  counterFour++;
    } 
    return array = {
        a: counterOne,
        b: counterTwo,
        c: counterThree,
        d: counterFour
    }

 }


 console.log(countElements(randomArray));
 

 
 
