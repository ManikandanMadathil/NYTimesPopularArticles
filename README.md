
# NY Times Most Popular Articles App

## Overview

This project is a simple React application that displays the most popular articles from the NY Times API. It features a master/detail view where users can see a list of articles and view details of a selected article.

### Features

- **Master/Detail View:** List of articles with the ability to view detailed information when an article is selected.
- **API Integration:** Fetches data from the NY Times Most Popular Articles API.
- **Testing:** Includes unit tests with Jest and React Testing Library, and UI tests with Cypress.

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/manikandanMadathil/nyt-most-popular-articles.git
   cd nyt-most-popular-articles
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Create an Environment File**

   Create a `.env` file in the root directory of the project and add your NY Times API key:

   ```env
   VITE_NYTIMES_API_KEY=your-api-key
   ```

   Replace `your-api-key` with your actual NY Times API key.

### Running the Application

To start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Navigate to `http://localhost:5173` in your browser to view the application.

### Running Tests

- **Unit Tests:**

  ```bash
  npm test
  ```

  or

  ```bash
  yarn test
  ```

- **Test Coverage Report:**

  ```bash
  npm run test:coverage
  ```

  or

  ```bash
  yarn test:coverage
  ```


### Build and Lint

- **Build the Project:**

  ```bash
  npm run build
  ```

  or

  ```bash
  yarn build
  ```

- **Run Linting:**

  Install ESLint if it's not already installed:

  ```bash
  npm install eslint --save-dev
  ```

  or

  ```bash
  yarn add eslint --dev
  ```

  Run linting:

  ```bash
  npm run lint
  ```

  or

  ```bash
  yarn lint
  ```

## Code Structure

- **`src/`**: Contains all the source code.
  - **`components/`**: Contains React components.
  - **`services/`**: Contains service classes for API calls.
  - **`App.tsx`**: Main application component.
  - **`index.tsx`**: Entry point of the application.
- **`__tests__/`**: Contains test files.
- **`.env`**: Environment variables.
- **`jest.config.ts`**: Jest configuration file.
- **`tsconfig.json`**: TypeScript configuration file.

