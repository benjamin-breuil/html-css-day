console.log("ça fonctionne")

let x = 5

const t =  0

let o = {
    name: "Benjamin",
    age: 17,

}

console.log(o.age)

let test = [6,6,6]

function average(tableau) {
    let total = 0

    for (const note of tableau) {
        total+=note
    }

    return total / tableau.length

}

console.log(average(test))

let avg_test = average(test)

function pass(avg){

    if(avg > 6){
        return
    }

    if(avg >= 4 ){
        console.log("réussie !")
    } else {
        console.log("raté :(")
    }
}

pass(avg_test)

let tab = [5]

tab.push(5)

tab.join(':')

tab.every(e => e > 4)