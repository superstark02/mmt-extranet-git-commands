# MMT Extranet Git Commands

This extension combines git commands to avoid mistakes in handling git.

## Commands

The commands are described below:

> MMT: Git Create Commit and Push

<pre><code>
    git add .
    git commit -m <span style='color:yellow'>your message</span>
    git push origin HEAD:refs/for/<span style='color:yellow'>your current branch</span>
</code></pre>

> MMT: Git Amend Commit And Push

<pre><code>
    git add .
    git commit --amend
    git push origin HEAD:refs/for/<span style='color:yellow'>your current branch</span>
</code></pre>

> MMT: Git Create MR With **Integration** And Push

<pre><code>
    git checkout integartion
    git reset --hard
    git pull --rebase
    git merge origin/<span style='color:yellow'>your current branch</span> --no-ff --no-commit
    git commit 
    git push origin HEAD:refs/for/fb_integration
</code></pre>

> MMT: Git Create MR With **Release** And Push

<pre><code>
    git checkout integartion
    git reset --hard
    git pull --rebase
    git merge origin/<span style='color:yellow'>your current branch</span> --no-ff --no-commit
    git commit 
    git push origin HEAD:refs/for/fb_integration
</code></pre>

> MMT: Git Create MR With **Existing Branch** And Push

<pre><code>
    git checkout <span style='color:yellow'>existing branch</span>
    git reset --hard
    git pull --rebase
    git merge origin/<span style='color:yellow'>your current branch</span> --no-ff --no-commit
    git commit 
    git push origin HEAD:refs/for/fb_integration
</code></pre>

> MMT: Git Create New Branch From **Release**

<pre><code>
    git checkout -b <span style='color:yellow'>new_branch_name</span>   release
</code></pre>

> MMT: Git Create New Branch From Existing Branch

<pre><code>
    git checkout -b <span style='color:yellow'>new_branch_name</span>   <span style='color:yellow'>existing_branch_name</span>
</code></pre>

<!-- ## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something. -->

## Release Notes

### 1.0.0

Initial release of basic commands

---

**Open to suggestions and requests**
