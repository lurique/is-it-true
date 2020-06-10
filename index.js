const isTrue = (value) => {
  if ( typeof value === "string" ) {
    console.log("I don't know, cause it's a string, but I'll return false for you.");
    return false;
  }

  if ( typeof value === "number" ) {
    console.log("I think it's true, cause numbers are always true.");
    return true;
  }

  if ( value ) {
    console.log("Definitely it's true.")
    return true;
  }

  console.log("Nah... it's false. My condolences.");
  return false;
}

module.exports = isTrue;