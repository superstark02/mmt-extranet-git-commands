export const findStrings = (string_: string) => {
  //find string
  var index = 0;
  var subStrings: Array<string> = [];

  for (index = 0; index < string_.length; index++) {
    const char = string_[index];
    if (isQuote(char)) {
      var endOfString = index + 1;
      var substring = "";

      while (string_[endOfString] !== char && endOfString < string_.length) {
        substring = substring + string_[endOfString];
        endOfString = endOfString + 1;
      }

      subStrings.push(substring);
      index = endOfString;
    }
  }

  subStrings.forEach((item) => {
    string_ = string_.replace(item, removeSpaces(item.trim()));
  });
  return string_;
};

const removeSpaces = (string_: string): string => {
  var correctedString = "";
  var i = 0;

  while (i < string_.length) {
    correctedString = correctedString + string_[i];
    if (string_[i] === " ") {
      var j = i + 1;
      while (j < string_.length && string_[j] === " ") {
        j++;
      }
      i = j;
    } else {
      i++;
    }
  }
  return correctedString;
};

const isQuote = (char: string): boolean => {
  return ['"', "`", "'"].includes(char);
};
