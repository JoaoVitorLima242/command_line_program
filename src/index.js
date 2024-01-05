import TerminalController from "./terminalController.js";
import database from "./../database.json" assert { type: "json" };
import Person from "./person.js";

const LANGUAGE = "pt-br";
const STOP_TERM = ":q";

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, LANGUAGE);

async function mainLoop() {
  try {
    const answer = await terminalController.question("");
    if (answer === STOP_TERM) {
      terminalController.closeTerminal();
      console.log("Process finished!");
      return;
    }

    const person = Person.generateInstanceFromString(answer);

    return mainLoop();
  } catch (e) {
    console.log("Error: " + e.message);
    return mainLoop();
  }
}

await mainLoop();
