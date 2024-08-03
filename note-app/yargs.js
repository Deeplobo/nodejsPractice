const yargs = require("yargs");
const notes = require("./note");
console.log("running");
yargs.command({
  command: "add",
  describe: "This one adds notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "This one removes notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "this command list all the note",
  builder: {
    title: {
      describe: "find the title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (arg) {
    if (arg.title) {
      notes.getSingleNote;
    } else {
      notes.getNotes();
    }
  },
});

yargs.parse();
