function makeUpperCase(value) {
  console.log(value.toUpperCase())
}

function reverseName(value) {
  console.log(value.split(' ').reverse().join(' '));
}

function handleName(name, cb) {
  const fullName = `${name} Doe`
  cb(fullName)
}

handleName('john', makeUpperCase) // Result: JOHN DOE
handleName('john', reverseName) // Result: eod nhoj