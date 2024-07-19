
# NY Times Most Popular Articles App

## Overview

This project is a simple React application that displays the most popular articles from the NY Times API. It features a master/detail view where users can see a list of articles and view details of a selected article.

<img width="933" alt="image" src="https://github.com/user-attachments/assets/2b8f7252-f5c8-4370-8129-664296f3d3d8">

<img width="953" alt="image" src="https://github.com/user-attachments/assets/91b03997-cb99-4877-82d1-56d880d2b7f9">



### Features

- **Master/Detail View:** List of articles with the ability to view detailed information when an article is selected.
- **API Integration:** Fetches data from the NY Times Most Popular Articles API.
- **Testing:** Includes unit tests with Jest and React Testing Library.
-**Linting:** Includes linting to find code problems

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
   REACT_APP_API_KEY=your-api-key
   ```

   Replace `your-api-key` with your actual NY Times API key.

### Running the Application

To start the development server:

```bash
npm run start
```

or

```bash
yarn start
```

Navigate to `http://localhost:3000` in your browser to view the application.

### Running Tests

- **Unit Tests:**

  ```bash
  npm run test
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
  - **`containers/`**: Contains React containers.
  - **`services/`**: Contains service classes for API calls.
  - **`App.tsx`**: Main application component.
  - **`index.tsx`**: Entry point of the application.
- **`__tests__/`**: Contains test files.
- **`.env`**: Environment variables.
- **`tsconfig.json`**: TypeScript configuration file.

