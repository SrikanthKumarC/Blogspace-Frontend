# HITAM Blog Space
A place for students and teachers to interact and learn.

## Features
+ Only limited to college emails
+ A full featured editor
+ User authentication based on OAuth
+ A seperate section for students and teachers
+ Teachers have full access to moderate content

## Setup
0. Make sure you are running Node version 18, or downgrade to node version 18 if not.
1. In terminal (MacOS) or Command Prompt (Windows) run `git clone https://github.com/SrikanthKumarC/Blogspace-Frontend.git`
2. next cd into the folder by running `cd Blogspace-Frontend`
3. Install node modules by running `npm install`
4. Create a copy of .env.example and rename it to .env
5. And paste your google client id and client secret in the given fields
6. Run `npm run dev` to start the project
7. In your browser, open `http://localhost:3000` to see the website.

## How to use
1. Login by clicking on the profile picture on the menu
2. Use your college email id to login (only works with @hitam.org emails)
3. Post content and read others posts

## Technologies - Frontend
+ Next.js
+ TailwindCSS
+ Axios
+ JoditEditor
+ NextAuth

### License: MIT
