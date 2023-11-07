import { commands } from "vscode";
import { branchNames, strings } from "../constants/constants";
import { git_commands } from "./commands";
import { getCurrentBranch, sendCommands, takeInput } from "./execClients";

export const gitPushNewCommit = commands.registerCommand(
  "mmt-extranet-git-commands.git_new_push",
  () => {
    getCurrentBranch((branch: string) => {
      takeInput(
        strings.message_placeholder,
        branch + " | ",
        (message: string) => {
          sendCommands([
            git_commands.git_add,
            git_commands.git_commit_m(message),
            git_commands.git_push_b(branch),
          ]);
          return;
        }
      );
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
      takeInput(strings.branch_placeholder, branch, (branch: string) => {
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
      takeInput(strings.branch_placeholder, branch, (branch: string) => {
        sendCommands([
          git_commands.git_checkout(branchNames.integration),
          git_commands.git_reset_hard,
          git_commands.git_pull_rebase,
          git_commands.git_merge(branch),
          //to do -> add push cmd
        ]);
      });
    });
  }
);

export const gitMergeInExisingBranch = commands.registerCommand(
  "mmt-extranet-git-commands.git_merge_in_existing_branch",
  () => {
    getCurrentBranch((branch: string) => {
      takeInput(strings.branch_placeholder, "", (existing_branch: string) => {
        sendCommands([
          git_commands.git_checkout(existing_branch),
          git_commands.git_reset_hard,
          git_commands.git_pull_rebase,
          git_commands.git_merge(branch),
          //to do -> add push cmd
        ]);
      });
    });
  }
);

export const gitCreateNewBranchFromRelease = commands.registerCommand(
  "mmt-extranet-git-commands.git_create_new_branch_from_release",
  () => {
    takeInput(strings.branch_placeholder, "", (branch: string) => {
      sendCommands([
        git_commands.git_create_new_branch(branch, branchNames.release),
      ]);
    });
  }
);

export const gitCreateNewBranch = commands.registerCommand(
  "mmt-extranet-git-commands.git_create_new_branch",
  () => {
    takeInput(strings.branch_placeholder_new, "", (newBranch: string) => {
      takeInput(strings.branch_placeholder_source, "", (fromBranch: string) => {
        sendCommands([
          git_commands.git_create_new_branch(newBranch, fromBranch),
        ]);
      });
    });
  }
);

//new branch
//open link for pushed commit
