# Set of utilities for 2d and 3d line math built on top of three.js

[![Build](https://github.com/Immugio/three-math-extensions/actions/workflows/build.yml/badge.svg)](https://github.com/Immugio/three-math-extensions/actions/workflows/build.yml)

### How to release:
- Commit and push all changes for this release.
- Make sure that the last release commit has a tag that matches the latest release number in the format "0.0.11". This step should have been completed in the previous release. It's only mentioned here in case it's for any reason missing.
- Bump up version in package.json e.g. "0.0.11" -> "0.0.12"
- Run "version" script, it should add the new commits since the last release into `CHANGELOG.md`
- Commit and push the changes in `package.json` and `CHANGELOG.md`, ideally, call the commit as the new release e.g. "`0.0.12`". This is not necessary but makes it easier to find
- NOW THE CRITICAL PART - **tag the commit** with the new version number. In this example "`0.0.12`" and push. This is required for CI to build and release and publish to npm.