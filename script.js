console.log("ça fonctionne")

let x = 5

const t =  0

let o = {
    name: "Benjamin",
    age: 17,

}

console.log(o.age)

let test = [5,4,3]

function average(tableau) {
    let total = 0

    for (const note of tableau) {
        total+=note
    }

    return total / tableau.length

}

console.log(average(test))

