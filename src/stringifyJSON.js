// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Null Objects
  if (obj === null) {
    return 'null';
  }
  // Arrays
  if (Array.isArray(obj) && obj.length) {
    var results = '';
    for (var i = 0; i < obj.length - 1; i++) {
      results += (stringifyJSON(obj[i]) + ',');
    }
    results += stringifyJSON(obj[obj.length-1]);
    return '[' + results + ']';
  } else if (Array.isArray(obj) && !obj.length) {
    return '[]';
  }
  // Objects
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    var results = '{';
    var keys = Object.keys(obj);
    if (keys.length === 0) {
      return '{}';
    } else {
      // Loop through all key:value pairs in the object besides the last.
      for (var i = 0; i < keys.length - 1; i++) {
        // Ignore any functions or undefined values
        if (typeof obj[keys[i]] !== 'function' && obj[keys[i]] !== undefined) {
          results += (stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',');
        }
      }
      // Test the last key:value pair in the object.
      // Ignore any functions or undefined values
      if (typeof obj[keys[keys.length - 1]] !== 'function' && obj[keys[keys.length - 1]] !== undefined) {      
        results += (stringifyJSON(keys[keys.length - 1]) + ':' + stringifyJSON(obj[keys[keys.length - 1]]));
      }
    }
    return results + '}';
  } 
  // Numbers
  if (typeof obj === 'number') {
    return obj.toString();
  }
  // Strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // Boolean values
  if (typeof obj === 'boolean') {
    return "" + obj + "";  
  }
  
};
