note = new Note("hiii");


if (note.returnText() !== "hiii") {
  throw new Error("note return text should output hiii");
} else {
  console.log(".");
}
