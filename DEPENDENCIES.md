# Dependency Updates

This site is built with Jekyll and Bundler. Local development should use the repo's pinned Ruby from `.ruby-version` so that local builds and GitHub Actions resolve the same dependency set.

## Local Ruby setup

### Preferred: `rbenv`

Install `rbenv` and `ruby-build`, then install the pinned Ruby:

```bash
brew install rbenv ruby-build
rbenv install 3.3.11
rbenv local 3.3.11
gem install bundler
bundle install
```

If your shell does not already initialize `rbenv`, add the init command shown by `rbenv init`.

### Alternative: `rvm`

If you already use RVM, create a project Ruby and gemset with the same version:

```bash
rvm install 3.3.11
rvm use 3.3.11@rism-info --create
gem install bundler
bundle install
```

## Dependency maintenance

Install gems:

```bash
bundle install
```

Check which gems are outdated:

```bash
bundle outdated
```

Refresh Bundler metadata and update all gems to the latest resolvable versions:

```bash
bundle update --bundler
bundle update
```

Update a specific dependency or group of dependencies:

```bash
bundle update jekyll jekyll-feed
```

## Verification

Before pushing dependency updates:

```bash
bundle exec jekyll build
```

GitHub Actions uses `ruby/setup-ruby` with the same `.ruby-version` file, so a passing local build should closely match CI behavior.
