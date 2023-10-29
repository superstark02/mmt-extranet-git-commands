import { pathToBranch } from "../constants/constants";

export const git_commands = {
  git_add: `git add .`,
  git_commit_m: (m: string) => `git commit -m "${m}"`,
  git_push: "git push",
  git_push_b: (branch: string) => `git push ${pathToBranch}${branch}`,
  git_commit_a: "git commit --amend --no-edit",
  git_checkout: (branch: string) => `git checkout ${branch}`,
  git_reset_hard: "git reset --hard",
  git_pull_rebase: "git pull --rebase",
  git_merge: (branch: string) => `git merge ${branch}`,
  git_get_current_branch: "git rev-parse --abbrev-ref HEAD",
};
