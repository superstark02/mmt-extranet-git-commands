import childProcess from "node:child_process";
import { window, workspace } from "vscode";
import { commandAdapter } from "./utils";
import { strings, messageTypes } from "../constants/constants";
import { abort } from "node:process";
import { git_commands } from "./commands";

export const takeInput = (
  type: "branch" | "message",
  defaultValue: string = "",
  handler: Function
) =>
  window
    .showInputBox({
      ignoreFocusOut: false,
      placeHolder:
        type === messageTypes.branch
          ? strings.branch_placeholder
          : strings.message_placeholder,
      value: type === "message" ? defaultValue + " | " : defaultValue,
    })
    .then((value) => {
      if (!value) {
        window.showErrorMessage(
          type === messageTypes.branch ? strings.no_branch : strings.no_message
        );
        return;
      }
      handler(value);
      return;
    });
export const execCommand = (cmd: string, successMessage: string) =>
  childProcess.exec(commandAdapter(cmd), (e, stdout) => {
    if (e) {
      window.showErrorMessage(e.name);
      console.log(e);
      return;
    }
    window.showInformationMessage(successMessage);
    return;
  });
export const sendCommands = (arr: Array<string>) => {
  const activeTerminal = window.activeTerminal;
  if (!activeTerminal) {
    window.showErrorMessage(strings.please_create_terminal);
    abort();
  }
  arr.forEach((item, index) => {
    window.activeTerminal?.sendText(item);
  });
  return;
};
export const getCurrentBranch = (handler: Function) => {
  window.showInformationMessage(strings.getting_branch);
  childProcess.exec(
    commandAdapter(git_commands.git_get_current_branch),
    (e, out) => {
      if (e) {
        window.showErrorMessage(e.message);
        return;
      }
      handler(out);
      return;
    }
  );
  return;
};
