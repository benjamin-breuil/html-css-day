console.log("bonjour le navigateur")
let flexbox1 = document.getElementById('fb1')

flexbox1.innerText = 'salut les gars'  

let inputColor = document.getElementById('email-form')

inputColor.addEventListener('input', function(e){
flexbox1.innerText = 'salut'
let articles = document.getElementsByTagName('article')

for (const article of articles) {
    article.style.backgroundColor = '#' +  Math.floor(Math.random()*16777215).toString(16);

}

document.getElementsByTagName('h1')[0].innerHTML = e.target.value


})  

// Grades average computed

// Display Average

function displayAverage(avg, id) {
    document.getElementById(id).innerText = avg
}

// Compute Average

function average(gradesArray){
    let sum = 0

    for (const grade of gradesArray) {
        sum+=grade
    }

    return sum/gradesArray.length
}

// Retrieve grades

function retrieveGrades(gradesID){
    let grades = []
    for (const gradesIDElement of gradesID) {
        let grade = parseFloat(document.getElementById(gradesIDElement).value)
        if (!isNaN(grade)){
            grades.push(grade)
        }


    //    grades.push(parseFloat(document.getElementById(gradesIDElement).value))
    }

    return grades
}

let inputs = document.getElementsByTagName("input")
    for(const input of inputs){
        input.addEventListener('input',function () {
            displayAverage(average(retrieveGrades(['note1', 'note2'])), 'averageSpan')

        })
    }