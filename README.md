### UserList - User Interface with Next.js

This project is a functional application developed in Next.js to visualize fictional user profiles consumed directly from the public **Random User Generator** API.

The interface was migrated from a static HTML base and styled in a modern and responsive way using integrated Tailwind CSS.

### 🚀 How to Run the Project

To run the project locally on your machine, follow the steps below:

1. **Install dependencies:**
   npm install
Start the development server:

npm run dev

Access in the browser:
Open http://localhost:3000 to view the application.

### 🧪 Test Routine and Report
As requested in the activity requirements, below is the record of the basic validation of the project's functionalities:

## 1. Initialization and Execution
What was tested: Installation command and execution of the development server.

Result: The project installed dependencies without errors and the server ran perfectly on port 3000.

## 2. Home Page Loading and API Consumption
What was tested: Accessing the / route to check card rendering.

Result: The application successfully fetched data from the Random User Generator API (using the consistency seed) and rendered exactly 10 cards on the screen with dynamic images and information received from the internet.

## 3. Navigation to Static Route
What was tested: Clicking the "Sobre o Projeto" (About the Project) link in the header.

Result: Navigation worked instantaneously through Next.js's Link component, opening the /sobre route with the correct information and toggling the blue highlight in the menu.

## 4. Navigation and Dynamic Details Route
What was tested: Clicking the "Ver perfil" (View profile) button of a specific user in the main listing.

Result: The application successfully redirected to the dynamic /usuario/[id] route. The page captured the URL parameter and filtered the data correctly, displaying the detailed information corresponding to the selected user (such as phone and cell phone).

## 5. File Verification and Versioning
What was tested: Checking the files pushed to the GitHub repository.

Result: The repository was successfully cleaned and organized. Temporary and heavy folders (node_modules and .next) were completely ignored by .gitignore, in accordance with the activity restrictions.