## Whitelist Git Ignore Model

VIGIL uses deny-by-default `.gitignore` files as a whitelist system.

The model is:

1. Ignore everything first with `*`.
2. Open only named top-level areas that belong in the repository.
3. Allow known maintained file types inside those opened areas.
4. Add child `.gitignore` files where a subtree needs a different whitelist.

This keeps Git focused on intentional repo contents while allowing the working tree to hold firmware builds, logs, hardware dumps, caches, generated outputs, virtual environments, editor state, package output, and other local artifacts.

The root `.gitignore` should read like a table of admitted repository areas first, then admitted maintained file classes. When a new tracked area or file class is introduced, update the nearest whitelist rule. The rule should communicate intent: broad enough for normal maintained source work, narrow enough that generated or local output does not start appearing in `git status`.

If a file has to be manually ignored because an existing whitelist admitted too much, do not add a one-off ignore rule for that file. Tighten the whitelist so the generated or local class of files is no longer admitted.

Adding more `.gitignore` files is fine when a subtree needs its own whitelist. The problem is explicitly ignoring files or directories after they were accidentally admitted.

