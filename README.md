Author: Subrato Sarkar
------------------------------

```
This is a front end testing framework

boilerplate-cypress

````

Framework built on
------------------------------

```

cypress

node.js

```

Getting started:
------------------------------

```
Make sure node is installed.

git clone 'repo-url'

cd boilerplate-cypress

npm install

```

Running the tests:
-------------------
```
'npx cypress open' OR 
'npm run test' (normal inside the physical browser)
'npm run all' (all tests will be executed headlessly)
'npm run chrome' (all tests will be executed headless mode in chrome with physical browser)
'npm run <TEST_NAME>' (specific test file will be executed headlessly)

```

Cypress architechture (folder structure):
-----------------------------------------
```
fixtures
    Is used to provide static constant data.
    url, email, username, env.
    how to call: cy.fixtures ()

integration
    Used to write test cases

plugins
    All plugins and listeners.
    e.g. chrome supported options, accept certificate

support
    For all custom modules/functions/wrappers/libs
    It will be accessible for all tests/specs files 

cypress.json
    cypress related environment configuations (global properties)
    e.g. timeout etc.

```