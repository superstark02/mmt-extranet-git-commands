import { commands, extensions, window, workspace } from "vscode";
import fs from "fs";
import { strings, console } from "../constants/constants";

export const findConsoleLogs = commands.registerCommand(
  "mmt-extranet-git-commands.find_console_logs",
  async () => {
    const gitExtension = extensions.getExtension("vscode.git")!.exports;
    const git = gitExtension.getAPI(1);
    const repos = git.repositories;
    const changes = await repos[0].diffWithHEAD();

    if (!changes.length) {
      window.showErrorMessage(strings.no_changes_found);
      return; //no changes were registered
    }

    changes.forEach((file: any) => {
      const filePath = file?.uri?.path;
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          window.showErrorMessage(err.message);
          return;
        }
        if (data.includes(console)) {
          workspace.openTextDocument(filePath).then((value) => {
            window.showTextDocument(value, { preview: false });
          });
        }
      });
    });
  }
);
