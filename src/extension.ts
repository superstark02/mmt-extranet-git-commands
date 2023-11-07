import * as vscode from "vscode";
import {
  gitAmendCommit,
  gitCreateNewBranch,
  gitCreateNewBranchFromRelease,
  gitMergeInExisingBranch,
  gitMergeInIntegration,
  gitMergeInRelease,
  gitPushNewCommit,
} from "./git-commands";
import { debugCommand } from "./console-log";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(gitPushNewCommit);
  context.subscriptions.push(gitAmendCommit);
  context.subscriptions.push(gitMergeInRelease);
  context.subscriptions.push(gitMergeInIntegration);
  context.subscriptions.push(gitMergeInExisingBranch);
  context.subscriptions.push(gitCreateNewBranchFromRelease);
  context.subscriptions.push(gitCreateNewBranch);
  context.subscriptions.push(debugCommand);
}

export function deactivate() {}
