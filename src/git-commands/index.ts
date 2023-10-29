import { commands, window } from "vscode";
import { strings } from "../constants/constants";
import { execCommand, takeInput } from "./execClients";
import { gitAmendCommitCmd, gitPushNewCommitCmd } from "./git-custom-cmds";

export const gitPushNewCommit = commands.registerCommand(
  "mmt-extranet-git-commands.git_new_push",
  () => {
    takeInput.then((value) => {
      if (!value) {
        window.showErrorMessage(strings.no_message);
        return;
      }
      execCommand(gitPushNewCommitCmd(value), strings.pushed_new_commit);
    });
  }
);

export const gitAmendCommit = commands.registerCommand(
  "mmt-extranet-git-commands.git_amend_commit",
  () => {
    execCommand(gitAmendCommitCmd(), strings.amend_commit);
  }
);
