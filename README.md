# Workflow Web App

This is a README file for the full-stack web application developed as a code challenge for the full-stack developer position. This application allows users to create, edit, and delete workflows, with a graphical representation of the workflow structure.

## Table of Contents

- [Setup and Deployment](#setup-and-deployment)
- [Advantages of Production Configuration](#advantages-of-production-configuration)
- [External Dependencies](#external-dependencies)
- [Frameworks and Tools](#frameworks-and-tools)
- [Decisions Made](#decisions-made)
- [Code Reusability and Testing](#code-reusability-and-testing)
- [Other Comments and Highlights](#other-comments-and-highlights)

## Setup and Deployment

### Steps to Run the App in a Development Environment

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pedrodarma/code-challenge-fullstack.git
   ```

2. Navigate to the project directory:

   ```bash
   cd code-challenge-fullstack
   ```

3. Install the required Node.js packages for the API and React app:

   ```bash
   npm install
   ```

4. Start the website:

   ```bash
   npm run dev
   ```

5. Access the application in your web browser at `http://localhost:3000`.


> ** Dev URL: https://code-challenge-fullstack.vercel.app/


### Steps to Run the App in a Production Environment

1. Follow the steps above for setting up the development environment.

2. Build and export the website:

   ```bash
   npm run export
   ```

> ** PROD URL: https://code-challenge-fullstack.pages.dev/

### Advantages of Production Configuration

The production configuration is optimized for performance, security, and stability compared to the development environment. It uses minified and compressed assets, utilizes caching strategies, and includes security measures to protect against common vulnerabilities.

## External Dependencies

- **React**: The front-end library for building user interfaces.
- **Git**: Version control system for tracking changes.
- **npm**: Package manager for Node.js.
- **Node.js**: Node.js is a JavaScript runtime that is used for building the server-side API of this application. It is known for its speed and scalability, making it a suitable choice for handling server logic.
- **React**: React is a JavaScript library for building user interfaces. It powers the front-end of this application, enabling the creation of interactive and responsive UI components.
- **Git**: Git is a widely used version control system that helps track changes to your codebase. It is essential for collaborative development and maintaining a history of project modifications.
- **npm**: npm is the default package manager for Node.js. It simplifies the installation of packages and dependencies required for the project, making it easier to manage project dependencies.
- **gojs**: GoJS is a JavaScript library for creating interactive diagrams and graphs. It is utilized in this project to provide a graphical representation of workflows, enhancing the user's ability to visualize and understand complex structures.
- **gojs-react**: gojs-react is a React integration library for GoJS. It facilitates the seamless integration of GoJS diagrams into React applications, making it easier to incorporate interactive diagrams into your project.
- **next**: Next.js is a popular React framework that simplifies the setup of React applications. While it is not a direct dependency, it is used as part of the development and deployment process for this application.
- **react-dom**: react-dom is a package that provides DOM-specific methods for React. It is a necessary dependency for rendering React components in the browser.
- **react-hot-toast**: react-hot-toast is a library for creating toast notifications in React applications. It enhances the user experience by providing real-time feedback for actions performed within the application.

## Frameworks and Tools

- **Next.js**: Next.js is a powerful React framework that simplifies the development of React applications. It enhances the React ecosystem by providing features like server-side rendering (SSR), automatic code splitting, and efficient routing. Next.js is known for its developer-friendly environment, making it an excellent choice for building modern web applications.
- **Static Site Generation (SSG)**: Next.js supports both SSR and SSG, making it flexible for various use cases. You can choose between SSR for dynamic pages and SSG for static pages, depending on your project's requirements.

## Decisions Made

### Architecture and State Management

- **Context API and `useContext`**: To manage the application's state effectively, we have chosen to utilize the Context API and `useContext` from React. This approach centralizes the state management, allowing components to access and update shared data without the need for prop drilling. The primary state, which represents the workflow and its elements, is maintained in a central context, making it easily accessible throughout the application.

- **Propagating State**: The central application state is propagated to various pages and components, ensuring a consistent and synchronized view of the workflow data. This design choice promotes a modular and maintainable codebase, as components can focus on rendering and interactions without the burden of managing their own state.

### Component Organization

- **Component Design**: In our project structure, we maintain a dedicated `app_design` folder at the top level of the components directory. This folder contains essential design elements such as buttons, text fields, and other basic UI components. These components serve as the foundation for building more complex elements within the application.

- **Modular Components**: Complex components are organized into separate folders within the components directory. These components may utilize the basic design components when necessary but are designed to be modular and self-contained. This approach promotes code reusability and separation of concerns, making it easier to maintain and extend the application.

### Visual Workflow Representation

- **Graphical Workflow**: Our system was conceived with a graphical representation of the workflow in mind from the beginning. This means that users can interact with the workflow diagram directly on the main screen of the website. Key interactions, such as removing connections between nodes, creating new workflow steps, editing, and removing nodes, are seamlessly integrated into the primary user interface.

- **User-Centric Design**: By displaying the workflow visually, we prioritize user experience and clarity. Users can intuitively grasp the structure of the workflow and perform actions directly on the graphical representation, enhancing usability and productivity.

These architectural decisions were made to create a user-friendly and maintainable web application that seamlessly integrates state management, component organization, and visual workflow representation. The result is an application that is both intuitive to use and conducive to future growth and enhancements.

## Code Reusability and Testing

Efforts have been made to ensure code reusability and testability through modularization and adhering to best practices. Unit and integration tests may be added in the future to maintain code quality.

## Other Comments and Highlights

### API Development

- **API Work in Progress**: Please note that our Node.js API is still in development. We are actively working on building the API to provide the necessary functionality for our web application. As we make progress, we will be opening a Pull Request to integrate the API with the website as soon as possible.

### Workflow Data Management

- **Unique Workflow IDs**: When a user first accesses the website, a unique identifier (ID) is automatically generated for their workflow. This ID serves as a key to store and retrieve the relevant data for that specific workflow. As users interact with the system, the website continuously saves and updates the workflow data in the database associated with this unique ID.

- **Sharing Workflows**: The unique workflow ID allows users to share their workflows with others. By sharing the ID or link to the workflow, multiple users can collaborate and participate in the development of the same workflow. It fosters teamwork and enhances productivity as users collectively work on workflow creation and management.

- **Future Multi-User Functionality**: In this initial version, the application does not support multiple users concurrently manipulating the same workflow. However, this functionality is part of our future development plans. We are committed to enhancing the collaborative aspects of the platform to enable multiple users to work together seamlessly on a single workflow.

### Authentication Considerations

- **No Authentication Initially**: For the sake of meeting development deadlines and focusing on core functionality, the initial release of the application does not include a user authentication system. This means that users can access and use the application without the need for user accounts or login credentials.

- **Future Authentication Possibilities**: We acknowledge that user authentication can enhance the user experience and provide personalized features. While it is not part of the initial release, we are open to considering its implementation in the future. This could enable us to offer user-specific features and tailor the application to individual needs.

These comments provide insight into the ongoing development of our API, our approach to workflow data management, and our considerations regarding authentication. We are committed to delivering a user-friendly and collaborative platform and will continue to refine and expand its features in subsequent releases.


---

Pedro Darma
