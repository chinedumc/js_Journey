const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        console.log(`${this.first} ${this.last}, AKA ${this.nickName}`)
    }
}

// can also be written as:
  /*  fullName() {
        const {first, last, nickName} = this;
        console.log(`${first} ${last} AKA ${nickName}`)
    } */
