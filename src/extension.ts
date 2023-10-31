import * as vscode from "vscode";
import {
  gitAmendCommit,
  gitMergeInIntegration,
  gitMergeInRelease,
  gitPushNewCommit,
} from "./git-commands";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(gitPushNewCommit);
  context.subscriptions.push(gitAmendCommit);
  context.subscriptions.push(gitMergeInRelease);
  context.subscriptions.push(gitMergeInIntegration);
}

export function deactivate() {}
