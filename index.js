class User{

constructor(email, username, password) {
 this.email= email;
 this.username= username; 
 this.password= password;
}

}

const person1 = new User ("Bob@bob.com","BobIsGreat","Pringles")
const person2 = new User("Ringo@Beattles.com","Drumer","SheLovesMe")
const person3 = new User("Seahawks@seahawks.com","Metcalf","fan12")

console.log (person1)
console.log (person2)
console.log (person3)