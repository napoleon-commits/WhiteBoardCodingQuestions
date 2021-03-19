/**
 *
 * Given an array of file extensions and a markdown string,
 * return an array of all locations of the file extensions in reverse order
 *
 * @param {Array} extensionsArray
 * @param {String} markdown
 *
 * @returns {Array}
 */
const findIndexesOfFileExtensions = (markdown, extensionsArray) => {
  const indexes = [];
  for (let i = 0; i < extensionsArray.length; i += 1) {
    const regex = new RegExp(extensionsArray[i], 'gi');
    let result;
    // eslint-disable-next-line
        while ((result = regex.exec(markdown))) {
      indexes.push(result.index);
    }
  }
  // reverse sort the indexes, so we can alter the string from back to front
  indexes.sort((a, b) => a - b).reverse();
  return indexes;
};

/**
 *
 * Add the filepath to any occurences of images
 *
 * @param {String} filePath
 * @param {Array} indexes
 * @param {String} markdown
 *
 * @returns {String}
 */
const addFilePathToImages = (markdown, filePath, indexes) => {
  let copyOfMarkdown = markdown;
  for (let i = 0; i < indexes.length; i += 1) {
    let foundFirstWhiteSpace = false;
    let j = indexes[i];
    // Find the first empty space before a image file
    while (foundFirstWhiteSpace === false && i > -1) {
      if (copyOfMarkdown[j] === ' ' || j === 0) {
        foundFirstWhiteSpace = true;
      } else {
        j -= 1;
      }
    }

    copyOfMarkdown = (
      `${copyOfMarkdown.substring(0, j)
      } ${filePath}${copyOfMarkdown.substring(j + 1, indexes[i])
      }${copyOfMarkdown.substring(indexes[i])}`
    );
  }
  return copyOfMarkdown;
};

/**
 *
 * Given a markdown string, update file references by prepending a filepath
 *
 * @param {String} markdown
 * @param {Array} extensionsArray
 * @param {String} filePath
 *
 * @returns {String}
 */
const ReplaceImageSources = (markdown, extensionsArray, filePath) => {
  const indexLocations = findIndexesOfFileExtensions(markdown, extensionsArray);
  return addFilePathToImages(markdown, filePath, indexLocations);
};

const str = 'The quick.jpg brown fox.png jumped over the.gif lazy dog.';
const imageFileExtensions = [
  '.jpg',
  '.gif',
  '.png',
  '.jpeg',
];
const filePath = '/whatsnew/';

// eslint-disable-next-line
console.log(ReplaceImageSources(str, imageFileExtensions, filePath));