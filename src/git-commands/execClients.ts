import childProcess from "node:child_process";
import { window, workspace } from "vscode";
import { commandAdapter } from "./utils";

const options = {
  ignoreFocusOut: false,
  placeHolder: "Please enter git commit message",
};
export const takeInput = window.showInputBox(options);
export const execCommand = (cmd: string, successMessage: string) =>
  childProcess.exec(commandAdapter(cmd), (e, stdout) => {
    if (e) {
      window.showErrorMessage(e.name);
      return;
    }
    window.showInformationMessage(successMessage);
  });
