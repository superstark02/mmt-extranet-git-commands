import { abort } from "process";
import { window, workspace } from "vscode";
import { strings } from "../constants/constants";

//return cd command
export const cd = (path: string) => `cd ${path}`;

//diff separators fir diff os
const separator = () => {
  const os = process.platform;
  switch (os) {
    case "linux":
      return ";";
    case "win32":
      return "&";
    default:
      return "\n";
  }
};

export const combineCommands = (arr: Array<string>) => {
  if (arr.length === 1) {
    return arr[0];
  }
  // a,b a
  let finalCmd = arr[0];
  for (var i = 1; i < arr.length; i++) {
    finalCmd = finalCmd + " " + separator() + " " + arr[i];
  }
  return finalCmd;
};

//genrates command in correct format, just pass the command
export const commandAdapter = (cmd: string) => {
  const path = workspace?.rootPath;

  if (!path) {
    window.showErrorMessage(strings.root_directory_not_found);
    abort();
  }
  return `${cd(path)} ${separator()} ${cmd}`;
};
