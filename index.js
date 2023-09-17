const returnPerson = (email, username, password)=>{
const newPerson = {email: email, username: username, password:password}
return newPerson
}

const person1 = returnPerson ("Bob@bob.com","BobIsGreat","Pringles")
const person2 = returnPerson ("Ringo@Beattles.com","Drumer","SheLovesMe")
const person3 = returnPerson ("Seahawks@seahawks.com","Metcalf","fan12")

console.log (person1)
console.log (person2)
console.log (person3)