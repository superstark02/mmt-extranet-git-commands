//switch to wroking directory
//track changes
//read changes
//find clg

import { commands, workspace } from "vscode";
import fs from "fs";

//add comment or showMessage
export const debugCommand = commands.registerCommand(
  "mmt-extranet-git-commands.debug_cmd",
  () => {
    workspace.onDidChangeTextDocument((e) => {
      //console.log(e); //gives file name
      fs.readFile(e.document.uri.fsPath, {}, (e, data) => {
        console.log(data.indexOf("mnop"));
      });
    });
  }
);
