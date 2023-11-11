import { Position, Range, commands, window } from "vscode";
import { strings } from "../constants/constants";
import { abort } from "process";
import { findStrings } from "./utils";

export const trimStrings = commands.registerCommand(
  "mmt-extranet-git-commands.trim_strings",
  () => {
    const currentFile = window.activeTextEditor;
    if (!currentFile) {
      window.showErrorMessage(strings.no_file_opened);
      abort();
    }

    const data = currentFile.document.getText();
    const fixedData = findStrings(data);

    window.activeTextEditor?.edit((editBuilder) => {
      const range = new Range(
        new Position(0, 0),
        new Position(currentFile.document.lineCount + 1, 0)
      );
      editBuilder.replace(range, fixedData);
    });
    return;
  }
);
