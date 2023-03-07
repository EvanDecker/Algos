/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

function fastCache(func) {
  // create a cache object to store calls to returned function - each input to the returned func is the key and result is the value
  
  const cache = {}
  function newFunc(arg) {
    if(cache[arg] !== undefined) {
      return cache[arg];
    } else {
      const res = func(arg);
      cache[arg] = res;
      return res;
    }
  }
  return newFunc;
  // returns a func
};

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

function fastCacheAdvanced(func) {
  const cache = {}

  function newFunc(...args) {
    let res = null;

  }
  return newFunc;
};



const fastCacheAdvanced = func => {
  //creating my cache object
  const cache = {};

  //returning function that acceps unknown number of arguments
  return (...inputs) => {

    //turning each input into a string version. That way we can compare objects by strings instead of trying to compare '[object Object]'
    const stringifiedArr = inputs.map(element => JSON.stringify(element));

    //checking cache to see if function has already been called with these args, if so, return that property
    if(cache[stringifiedArr]) return cache[stringifiedArr];

    //Else we call our function with each of the inputs, add it to the cache, then return the returnedValue. 
    else{
        cache[stringifiedArr] = func(...inputs);
        return cache[stringifiedArr];
    }
  }
};




module.exports = {fastCache, fastCacheAdvanced};