import { commands, window } from "vscode";
import { strings } from "../constants/constants";
import { abort } from "process";

export const trimStrings = commands.registerCommand(
  "mmt-extranet-git-commands.trim_strings",
  () => {
    const currentFile = window.activeTextEditor;
    if (!currentFile) {
      window.showErrorMessage(strings.no_file_opened);
      abort();
    }

    const data = currentFile.document.getText();
    console.log(data);
    return;
  }
);
