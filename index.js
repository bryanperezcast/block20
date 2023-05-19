const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {

const rootElement = document.getElementById("root");
const h1Element = document.createElement("h1")
h1Element.innerHTML = "FREELANCERS"
rootElement.appendChild(h1Element)
const ulelement = document.createElement("ul")

for( let i = 0; i < users.length; i++){
    const listElement = document.createElement("li")
    ulelement.appendChild(listElement)
    listElement.innerHTML = users[i].name
}
rootElement.appendChild(ulelement)
}

//call the main function
main();