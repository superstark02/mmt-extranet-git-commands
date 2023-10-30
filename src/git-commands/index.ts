import { commands } from "vscode";
import { branchNames } from "../constants/constants";
import { git_commands } from "./commands";
import { getCurrentBranch, sendCommands, takeInput } from "./execClients";

export const gitPushNewCommit = commands.registerCommand(
  "mmt-extranet-git-commands.git_new_push",
  () => {
    getCurrentBranch((branch: string) => {
      takeInput("message", branch, (message: string) => {
        sendCommands([
          git_commands.git_add,
          git_commands.git_commit_m(message),
          git_commands.git_push_b(branch),
        ]);
        return;
      });
      return;
    });

    // takeInput((value: string) => {
    //   execCommand(gitPushNewCommitCmd(value), strings.pushed_new_commit);
    //   return;
    // });
  }
);

export const gitAmendCommit = commands.registerCommand(
  "mmt-extranet-git-commands.git_amend_commit",
  () => {
    //execCommand(gitAmendCommitCmd(), strings.amend_commit);
    getCurrentBranch((branch: string) => {
      sendCommands([
        git_commands.git_add,
        git_commands.git_commit_a,
        git_commands.git_push_b(branch),
      ]);
    });
    return;
  }
);

export const gitMergeInRelease = commands.registerCommand(
  "mmt-extranet-git-commands.git_merge_in_release",
  () => {
    getCurrentBranch((branch: string) => {
      takeInput("branch", branch, (branch: string) => {
        sendCommands([
          git_commands.git_checkout(branchNames.release),
          git_commands.git_reset_hard,
          git_commands.git_pull_rebase,
          git_commands.git_merge(branch),
        ]);
      });
    });
  }
);

export const gitMergeInIntegration = commands.registerCommand(
  "mmt-extranet-git-commands.git_merge_in_integration",
  () => {
    getCurrentBranch((branch: string) => {
      takeInput("branch", branch, (branch: string) => {
        sendCommands([
          git_commands.git_checkout(branchNames.integration),
          git_commands.git_reset_hard,
          git_commands.git_pull_rebase,
          git_commands.git_merge(branch),
        ]);
      });
    });
  }
);

//new branch
//open link for pushed commit
