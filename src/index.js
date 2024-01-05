import TerminalController from "./terminalController.js";
import database from "./../database.json" assert { type: "json" };

const LANGUAGE = "pt-br";
const STOP_TERM = ":q";

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, LANGUAGE);

async function mainLoop() {
  try {
    const answer = await terminalController.question("what");
    if (answer === STOP_TERM) {
      terminalController.closeTerminal();
      console.log("Process finished!");
      return;
    }

    return mainLoop();
  } catch (e) {
    console.log("Error: " + e.message);
    return mainLoop();
  }
}

await mainLoop();
