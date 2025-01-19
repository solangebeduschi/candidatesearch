## Candidate Search

# Description 

The Candidate Search Application is a web-based tool that allows employers to search for potential candidates using the GitHub API. Employers can review candidate profiles, accept or reject candidates, and maintain a list of saved potential candidates for future reference. The application ensures a smooth and intuitive experience for hiring managers while leveraging TypeScript for improved development efficiency and reliability.

# User Story

AS AN employerI WANT a candidate search applicationSO THAT I can hire the best candidates.

# Features

Fetch candidate data using the GitHub API.

Display candidate information dynamically.

Save and persist candidate data to local storage.

Navigate between the candidate search page and saved candidates list.

Gracefully handle empty states for both candidates and saved lists.

# Technologies Used

Frontend:

  React

  TypeScript

  react-router-dom

API:

  GitHub REST API

Styling:

  CSS

  Bootstrap (optional)

Persistence:

  Local Storage

Deployment:

  Render

# Installation

1. Clone the repository:

git clone: https://github.com/solangebeduschi/candidatesearch

2. Navigate to the project directory:

cd candidate-search

3. Install dependencies:

npm install

4. Create a .env file in the root directory and add your GitHub Personal Access Token:

VITE_GITHUB_TOKEN=your_personal_access_token

5. Start the development server:

npm start

# Deployment

The application is deployed to Render. Access the live version here: Candidate Search App

Steps to Deploy:

Push your code to a GitHub repository.

Link the repository to Render.

Configure the environment variable VITE_GITHUB_TOKEN in Render's settings.

Deploy the application and verify its functionality.

# License

This project is open source and available under the MIT License.


