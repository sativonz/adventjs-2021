export default function fixFiles(files) {
    const counter = {};
    return files.map(file => {
        console.log(counter);
      counter[file] = ++counter[file] || 0;
      return counter[file] > 0 ? `${file}(${counter[file]})` : file;
    });
  }