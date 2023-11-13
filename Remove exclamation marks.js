4/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
    let newStr = '';
    newStr = s.replace(/!/g, '');
    return newStr;
  }

  console.log(removeExclamationMarks("Hello! World!"));