# Automation V1 — Cypress E2E Test Suite

This project contains automated end-to-end (E2E) UI tests built with [Cypress](https://www.cypress.io/), targeting the [DemoQA](https://demoqa.com/) practice website. It covers three areas of the site: the **Book Store Application**, **Forms**, and **Alerts, Frames & Windows**.

## Prerequisites

Before running the automation, make sure you have the following installed:

- **Node.js** (v18 or later recommended) — [download here](https://nodejs.org/)
- **npm** (comes bundled with Node.js)
- **Git** (to clone/pull the repository)

You can verify your installed versions with:

```bash
node -v
npm -v
```

## Clone the repository

```bash
git clone <REPOSITORY_URL>
cd "Automation V1"
```

## 2. Install dependencies

Install the project's dependencies (Cypress and dotenv) with:

```bash
npm install
```

This reads `package.json` and downloads everything into a local `node_modules/` folder (this folder is intentionally not committed to Git — see the `.gitignore` section below).

## Create the required `.env` file

Before you can run the tests, you must create this file yourself.

1. In the root of the project (next to `package.json`), create a new file named exactly:

   ```
   .env
   ```

2. Add the following content, replacing the placeholder with the actual value you want to use for the test account's password:

   ```
   PASSWORD=<YOUR_TEST_PASSWORD_HERE>
   ```
   

This `PASSWORD` value is loaded by [cypress.config.js](cypress.config.js) via the `dotenv` package and exposed to the tests as `Cypress.env('PASSWORD')`. It is used, for example, in the [Book store application.cy.js](cypress/e2e/Book%20store%20application.cy.js) test to fill in the registration password field, without hard-coding a real credential in the test file itself.


## Running the tests

Cypress offers two ways to run the suite: with the interactive Test Runner (GUI) or headlessly from the command line.

### Option A — Interactive mode (recommended for development/debugging)

```bash
npx cypress open
```

This opens the Cypress Test Runner window. From there:
1. Choose **E2E Testing**.
2. Pick a browser (e.g., Chrome, Edge, Electron).
3. Click on any spec file inside `cypress/e2e/` to run it and watch it execute step by step in the browser.

### Option B — Headless mode (recommended for CI or quick full runs)

Run every spec in the suite without opening a browser window:

```bash
npx cypress run
```

To run a single spec file, for example only the Forms test:

```bash
npx cypress run --spec "cypress/e2e/Forms.cy.js"
```

Available spec files:
- `cypress/e2e/Book store application.cy.js`
- `cypress/e2e/Forms.cy.js`
- `cypress/e2e/Alerts, Frames & Windows.cy.js`

## Test artifacts

- Screenshots of failed tests are saved automatically to `cypress/screenshots/` 
- If video recording is enabled, recordings are saved to `cypress/videos/` 

These folders are created automatically by Cypress when needed — you don't need to create them manually.

## Project structure overview

```
Automation V1/
├── .env                  # Local secrets (you create this — NOT committed)
├── .gitignore
├── cypress.config.js     # Cypress configuration, loads .env via dotenv
├── package.json
├── cypress/
│   ├── e2e/              # Test spec files
│   ├── fixtures/         # Static test data/files (e.g. images used in uploads)
│   └── support/
│       ├── commands.js   # Custom reusable Cypress commands
│       └── e2e.js        # Global support file loaded before tests
```

## Troubleshooting

- **Tests fail immediately with no password typed / undefined value**: double-check that `.env` exists in the project root and contains a `PASSWORD=<value>` line with no quotes or extra spaces.
- **`cypress` command not found**: make sure you ran `npm install` first, and invoke it via `npx cypress ...` rather than calling `cypress` directly.
- **Browser doesn't launch in headless mode**: ensure you have a supported browser installed, or let Cypress use its bundled Electron browser (the default).
