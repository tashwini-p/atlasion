# ATLASSION

## Introduction
Welcome to Atlassion! This project is a website built using ReactJS and Typescript, aimed at providing comprehensive information about various software products developed by the company. Our team has meticulously crafted this website to offer users a seamless browsing experience while exploring information about the functionalities and features of popular Atlassion tools like Jira, Confluence, Bitbucket, and Atlas.

## Project Type
Frontend 

## Deplolyed App
Frontend: https://atlassion.netlify.app/ </br>
Backend: https://atlasion.onrender.com/

## Directory Structure
``` bash
Atlassion/ 
├─ backend/
    ├─ db.json
    ├─ server.js
    ├─ package.json
    ├─ package-lock.json
├─ atlassion_app/
    ├─ public/
    ├─ src/
‎      ├─ AuthContext
‎      ├─ Dashboard
      ├─ HomePage
      ├─ Dashboard
      ├─ Jira
      ├─ BitBucket
      ├─ Confluence
      ├─ Atlas
      ├─ JiraServiceManagement
      ├─ Utils
      ├─ Routes
    ├─ index.html
    ├─ package.json
    ├─ package-lock.json
```

## Video Walkthrough of the project
[![VIDEO](https://img.youtube.com/vi/kzgs5bzcYe0/0.jpg)](https://www.youtube.com/watch?v=kzgs5bzcYe0)

## Features
Key Features of Application
- Detailed Information: Get in-depth insights into the capabilities and uses of Atlassian's software products.
- User Authentication: We've implemented user authentication using json-server-auth, allowing users to securely log in and access restricted content.
- Admin Dashboard: Utilizing json-server-auth, we've incorporated an admin dashboard feature that enables authorized users to manage site content effortlessly.

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running: </br>
Step 1: Clone the repository on terminal </br>
Step 2: Move to the atlasion-app folder </br>
Step 3: Install dependecies with the comman ``` npm install``` </br>
Step 4: After the node modules have been installed, to start the app, run the command ``` npm run dev``` </br>

```bash
git clone https://github.com/tashwini-p/atlasion.git
cd atlasion-app
npm install 
npm run dev
```

## Usage
<strong> Home Page </strong>
<ul>
   <li>Visit the Atlassion Website. </li>
   <li>Explore the homepage to understand more about the website. </li>
   <li>Navigate to specific sections or product pages through the functional navbar. </li>
   <li>Login/Register using the button in the navbar.</li>
   <li>Explore the middle tab section that changes the list of products and images based on the tab you click!</li>
</ul>

![image](https://github.com/tashwini-p/atlasion/assets/154405564/5bca135c-524b-45f2-99de-1e490e3e7b7e)

![image](https://github.com/tashwini-p/atlasion/assets/154405564/379ba7fd-e6ff-4f34-98d3-c997fb7cd474)

</hr>

<strong>Product Pages</strong>
 - Jira Service Management

  ![image](https://github.com/tashwini-p/atlasion/assets/154405564/177146ff-27b8-46f3-809f-179ee28cbdc5)

 - Confluence

  ![image](https://github.com/tashwini-p/atlasion/assets/154405564/d2fe3536-3630-4fd9-9aa1-4d5fe9c889e3)

 - Atlas

   ![image](https://github.com/tashwini-p/atlasion/assets/154405564/2c56889c-8d8a-46ba-ac2f-96582feb4c4d)

 - BitBucket

   ![image](https://github.com/tashwini-p/atlasion/assets/154405564/a577b0dc-22cf-4761-99f5-c306809642d5)



<br><br>
<strong>Admin Dashboard</strong>

   ![image](https://github.com/tashwini-p/atlasion/assets/154405564/a88f6d83-e017-47bf-800f-62328550d415)
   
   
   ![image](https://github.com/tashwini-p/atlasion/assets/154405564/83f416b5-192b-46ca-b8af-89561e28ecd5)


## Credentials
In order to be able to access the Admin Dashboard, enter these credentials in the Login Page :
```bash
Email : Admin123@example.com
Password : Admin@123
```

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- Other libraries/modules
