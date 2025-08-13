## Cypress E2E Testing Framework (Page Objects + Step Objects)

This project provides a modern Cypress setup using the Page Objects pattern combined with Step Objects for business logic, reusable support commands, and fixtures for test data.

### Requirements
- Node.js 18+
- Application under test running at `http://localhost:3000` (configurable in `cypress.config.js`)

### Install
```bash
npm install
```

### Useful scripts
```bash
npm run cy:open   # Launch interactive Test Runner
npm run cy:run    # Headless run in CI
npm test          # Alias of cy:run
```

### Environment-based runs (using dotenv-cli)
- Create env files (example keys: `CYPRESS_BASE_URL`, `CYPRESS_VIEWPORT_WIDTH`, `CYPRESS_VIEWPORT_HEIGHT`)
  - `.env.local` → local machine
  - `.env.dev` → development
  - `.env.staging` → staging
  - `.env.prod` → production
- Run with the predefined scripts:
```bash
npm run cy:open:local    # uses .env.local
npm run cy:run:dev       # uses .env.dev
npm run cy:run:staging   # uses .env.staging
npm run cy:run:prod      # uses .env.prod
```

### Project structure
```
/cypress
  /e2e                 # Test specs
    login.cy.js
    ...
  /fixtures            # Static test data
    users.json
    ...
  /pageObjects         # Page Object classes (element interactions)
    LoginPage.js
    ...
  /steps               # Step Object classes (business logic flows)
    LoginSteps.js
    ...
  /support
    commands.js        # Reusable commands (e.g., cy.login with session)
    e2e.js             # Auto-loaded support entry
cypress.config.js       # Cypress config (baseUrl, retries, viewport)
```

### Architecture Pattern

#### Page Objects
Handle low-level element interactions and selectors:
- `LoginPage`: `visit()`, `openLoginPage()`, `fillUsername(username)`, `fillPassword(password)`, `submit()`, `validateErrorVisible()`

#### Step Objects
Orchestrate business logic flows using page objects:
- `LoginSteps`: `login(username, password)` - complete login flow including navigation

#### Custom Commands
Reusable flows with session caching:
- `cy.login(username?, password?)` - uses fixtures by default, supports session caching for performance

### Conventions & best practices
- **Page Objects**: Handle element interactions and selectors only
- **Step Objects**: Orchestrate business flows using page objects
- **Custom Commands**: Provide reusable flows with session caching for performance
- Keep selectors inside Page Objects using `data-testid` attributes
- Method chaining supported in page objects (returns `this`)
- Tests are independent and can leverage `cy.session()` for authenticated flows
- Clear separation between element interactions (Page Objects) and business logic (Step Objects)

### How to extend
- Add new page objects under `cypress/pageObjects` for element interactions
- Add step objects under `cypress/steps` for business logic flows
- Add fixtures under `cypress/fixtures` for new datasets
- Add reusable flows to `cypress/support/commands.js` for complex operations
- Create new specs under `cypress/e2e` following the existing pattern

### Configuration
Adjust `cypress.config.js` as needed:
- `baseUrl`: Application URL
- `retries`: Flake tolerance in run/open modes
- `viewportWidth/Height`: Default viewport
