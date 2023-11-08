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
import { findConsoleLogs } from "./console-log";
import { trimStrings } from "./trim-string";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(gitPushNewCommit);
  context.subscriptions.push(gitAmendCommit);
  context.subscriptions.push(gitMergeInRelease);
  context.subscriptions.push(gitMergeInIntegration);
  context.subscriptions.push(gitMergeInExisingBranch);
  context.subscriptions.push(gitCreateNewBranchFromRelease);
  context.subscriptions.push(gitCreateNewBranch);
  context.subscriptions.push(findConsoleLogs);
  context.subscriptions.push(trimStrings);
}

export function deactivate() {}
