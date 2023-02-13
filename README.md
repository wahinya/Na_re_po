This folder contains Cypress tests for running across on the nala project. 

# Running Tests
To run Cypress test locally, you should navigate to the "cypress" folder from the root monorepo folder and install 
dependencies:

```
cd cypress/
npm install
```

You can run scripts which described on the "package.json" file:
>
npm run cypress:nala
```
This command will run the Cypress test runner for nala project and will use the config file "cypress.json".

If you want to run cypress with a different options, just manually run the necessary command in the terminal, like this one:
```
npx cypress open --project $PWD/nala --config-file $PWD/nala/cypress.json
```

or
```
npx cypress run --project $PWD/nala--config-file $PWD/nala/cypress.json
```

where
- `--project ./some/nested/folder` - path to a specific project with tests which you want to run,
- `--config-file` - specific configuration file, for example related to a specific environment 


You can learn more about the options for launching Cypress in [the documentation](https://docs.cypress.io/guides/guides/command-line#cypress-open).

# How to Set Environment Variables
As stated in the [Cypress documentation](https://docs.cypress.io/guides/guides/environment-variables#Setting),
instead of hard coding environment variables in tests:
```
cy.request('https://api.acme.corp') // this will break on other environments
```
we can move this into a Cypress environment variable:
```
cy.request(Cypress.env('EXTERNAL_API')) // points to a dynamic env var
```

To do it you can use this options:

**Option #1: configuration file**

Any key/value which you set in your configuration file under the env key will become an environment variable:
```
// This option is used in "cypress-local-dev.json".
{
  "chromeWebSecurity": false,
  "watchForFileChanges": false,
  "env": {
    "NALA_BASE_URL": "https://www.globalsqa.com/angularJs-protractor/BankingProject/
",
    "YOUR_ENV_VARIABLE": "value"
  }
}
```
In a test file you can use it like this: `Cypress.env('YOUR_ENV_VARIABLE')`.

**Option #2: cypress.env.json**

You can create your own "cypress.env.json" file (in the specific project folder) that Cypress will automatically check. 
Values in here will overwrite conflicting environment variables in your configuration file.

This file should be added to ".gitignore" and not be committed.
You can use this file to pass environment variables to Cypress that have secret values and should not be written 
to the source code, for example passwords or any sensitive information.

```
{
  "host": "veronica.dev.local",
  "api_server": "http://localhost:8888/api/v1/"
}
```

**Option #3: CYPRESS_***

Any OS-level environment variable on your machine that starts with either CYPRESS_ or cypress_ will automatically be 
added to Cypress' environment variables and made available to you.

We use this option to pass environment variables to the CI servers.

**Be careful** if you add new environment variables, they should either be added to all configuration files or reported 
to the administrator which will add them to the CI servers.

You can find the rest of the options in the full version of [the documentation](https://docs.cypress.io/guides/guides/environment-variables#Overriding-Configuration).

# How to Add New Project
Use this commands:
1. Checkout to the develop branch and update the local version of a repository from a remote:
```
git checkout develop
git pull
```
2. Create your own branch from develop and checkout to this branch:
```
git checkout -b name-of-a-branch
```
where `name-of-a-branch` - name of your branch.
3. Navigate to the "cypress" root folder and create new folder:
```
cd cypress/
mkdir project-name
```
where `project-name` - a name of your project.

4. Run `npx cypress open --project $PWD/project-name`. This command will create a default Cypress file structure in 
a new project's folder.
5. Feel free to [write tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure) for new project. 

For local testing, we recommend creating a separate configuration file named "cypress-local-dev.json"
6. Add dependencies if necessary.

We use one "package.json" file for all Cypress' tests dependencies. If one of the projects needs a new dependency,
install it using this command:
```
npm install name-of-a-package --save-dev
```
where `name-of-a-package` is a name of the package which you want to use with Cypress' tests.
7. Commit your changes and push to GitHub. After the pull-request will be accepted, you should merge it into develop:
```
git add project-name/ 
git commit -m "Your commit message."
git push origin your-branch:your-branch
```

**If you want to add changes to current tests, run the following commands:**
1. Checkout to the develop branch and update the local version of a repository from a remote.
2. Create your own branch from develop and checkout to this branch.
3. Add your changes.
4. Commit your changes and push to GitHub. Ask colleagues to review the code if necessary and then merge your pull request 
into develop branch.

# Skip Tests Conditionally
We use this option `ignoreTestFiles` to ignore specific test files.

For `sales-web` project we ignore "mpesa-payment-tests" *folder* when run tests with config file "cypress.json" on CI servers.
