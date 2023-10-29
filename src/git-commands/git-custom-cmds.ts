import { git_commands } from "./commands";
import { combineCommands } from "./utils";

export const gitPushNewCommitCmd = (message: string) =>
  combineCommands([
    git_commands.git_add,
    git_commands.git_commit_m(message),
    git_commands.git_push,
  ]);
export const gitAmendCommitCmd = () =>
  combineCommands([
    git_commands.git_add,
    git_commands.git_commit_a,
    git_commands.git_push,
  ]);
