const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        return `${this.first} ${this.last}, AKA ${this.nickName}`
    },
    printBio() {
        //console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    }
}

// fullName can also be written as:
  /*  fullName() {
        const {first, last, nickName} = this;
        console.log(`${first} ${last} AKA ${nickName}`)
    } */
   