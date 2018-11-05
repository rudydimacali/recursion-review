// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Create results array
  var results = [];
  
  // Recursive helper function
  var testChildren = function(element) {
    // Evaluate passed in element's classname
    if(element.className && element.className.includes(className)){
      // Add element to results array if the className matches
      results.push(element);
    }
    // Check if element has children
    if(element.childNodes.length > 0) {
      // Loop through children
      for (var i = 0; i < element.childNodes.length; i++) {
        // Call recursive function to test each child
        testChildren(element.childNodes[i]);
      }
    }
  };
  
  // Call recursive helper function
  testChildren(document.body);
  return results;
};
