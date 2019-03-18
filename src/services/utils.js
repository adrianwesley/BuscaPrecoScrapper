const fs = require("fs");
const path = require("path");

module.exports = {
    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
    },
    saveFileLocally(file, content) {
      try {
        fs.writeFileSync(path.normalize(file), content, 'utf8');
      } catch (err) {
        console.log('Error in writing file');
        console.log(err)
      }
    }
}