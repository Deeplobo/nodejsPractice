const fs = require("fs");
const chalk = require("chalk");
const addNotes = (title, body) => {
  const loadedData = loadNotes();
  const duplicateNotes = loadedData.find((value) => title == value.title);
  if (!duplicateNotes && title != undefined) {
    loadedData.push({
      title: title,
      body: body,
    });
    saveNotes(loadedData);
    console.log(chalk.green(title, " - is added"));
  } else {
    console.log(
      chalk.red("provide title:", "<" + title + ">", "is already exist")
    );
  }
};
const removeNote = (title) => {
  const loadedData = loadNotes();
  const newNote = loadedData.filter((note) => title != note.title);
  if (title != undefined) {
    if (newNote.length == loadedData.length) {
      console.log(chalk.yellow("Title dose not exist, you can add this title"));
      return;
    } else {
      saveNotes(newNote); // TODO this function overwrite whole data, we can modify this one later.
      console.log(chalk.green(title, "-is removed"));
    }
  } else {
    console.log(chalk.yellow("provide a title"));
  }
};
/**
 * @description this function gets all the notes list and print as a table
 */
const getNotes = () => {
  const loadedData = loadNotes();
  console.table(loadedData);
};
/**
 *
 * @param title this param is provided in command's builder object
 * @description this function takes the title value and find it in database, if present it print the value in table format,else prints error msg
 * @example function(){
 * console.log('j')
 * }
 */
const getSingleNote = (title) => {
  const loadedData = loadNotes();
  const requestedNote = loadedData.find((note) => note.title == title);
  if (requestedNote) {
    console.log(chalk.red("No such title exist"));
  } else {
    console.table(requestedNote);
  }
};
const loadNotes = () => {
  try {
    const jsonData = fs.readFileSync("./notes.json").toString("utf-8");
    const parseData = JSON.parse(jsonData);
    return parseData;
  } catch (error) {
    return [];
  }
};
const saveNotes = (note) => {
  const data = JSON.stringify(note);
  fs.writeFileSync("./notes.json", data);
};

module.exports = {
  addNotes,
  getNotes,
  removeNote,
  getSingleNote,
};
