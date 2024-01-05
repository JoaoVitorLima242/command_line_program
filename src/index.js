import TerminalController from "./terminalController.js";
import database from "./../database.json" assert { type: "json" };

const LANGUAGE = "pt-br";

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, LANGUAGE);
