# Typescript frontend application setup

## NodeJS v12 and npm installation

- Nodejs required version can be installed using [nodenv](https://github.com/nodenv/nodenv#installation) which has very similar interface to pyenv.

```Bash
# I followed cloning the git repo approach
# For MacOS we could install them easily using brew
mkdir ~/.nodenv
git clone https://github.com/nodenv/nodenv.git ~/.nodenv

mkdir ~/.nodenv/plugins
git clone https://github.com/nodenv/node-build.git ~/.nodenv/plugins/node-build
```

After the above steps, add the following to `~/.bashrc` or `~/.profile` or `~/.bash_profile`

```Bash
if [[ -d "$HOME/.nodenv" ]] ; then
    PATH="$HOME/.nodenv/bin:$PATH"
    eval "$(nodenv init -)"
fi
```

Install the required node version using the below commands

```Bash
# list available versions
nodenv install -l

nodenv install 12.21.0

cd <ecomap_webapp_frontend_folder>

nodenv local 12.21.0
```

**NOTE**: NodeJS is required only for typescript REPL.

## Sample framework installation

### Vue CLI installation

```Bash
cd <ecomap_webapp_frontend_folder>

# below command ensures the npm will be used for that node installation
nodenv shell

# verify npm installation using
npm --version

npm install -g @vue/cli
```

**NOTE**- The whole frontend project was creating using Vue CLI by following the steps from [Vue 3 with TypeScript — Setup A New Project with the Vue-Cli](https://medium.com/vue-typescript/vue-3-with-typescript-setup-a-new-project-with-the-vue-cli-4ea806be7a91) and [Your first Vue 3 app using TypeScript](https://labs.thisdot.co/blog/your-first-vue-3-app-using-typescript)

## Project setup commands

```bash
# install the packages
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# run unit tests
npm run test:unit

# Lint
npm run lint

# format
npm run format
```
