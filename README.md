# Manuel Challenge

## Description of the Project

This is the solution to a very common problem in this age, having multiple accounts 
for basically everything (music, videos, social media, emails, etc.) this password 
manager can help you to remember all the passwords you use not only daily but also 
the ones you don't use very often.

## Approach

Since the project has to be on Python and Angular we can use many options
for this matter different dependencies in order to accomplish the Assessment.
I decided to use these dependencies for practicality and versatility.

#### Python

I have decided to use **FastAPI** because It provides a documentation and a place to test
the result of each endpoint without having other application for it like PostMan.
and **Uvicorn** in order to have a ASGI (Asynchronous Server Gateway Interface) web
server running.

#### Angular

Base Versions use to develop:

- Angular CLI: 9.1.13
- Node: 14.17.0
- Angular: 9.1.13

I used **Angular Material** as a Dependency because it is a lot easier to create the UI
and use the components to build it as well as it is easy to change the colors and all
the styles as needed with a custom CSS file.

## Create Development Environment and Run Project Locally

Since we are using a Python base API and Angular framework project as Client.
We need to set up a Virtual Environment for Python and install all dependencies in it,
also install all dependencies for Angular Client. I have provided a scripts for
this `setup.sh` and to run the project locally I have provided a script `run.sh`.

### Create Development Environment

Run `sh ./setup.sh`

The script will:

- Create a Python Virtual Environment
- Activate the new Virtual Environment
- Install dependencies on Python through pip
- Install Angular dependencies through npm

_PD: To set up and run the project at the same time Run `sh ./setup.sh -r true`_

### Run Project Locally

Run `sh ./run.sh`

The script will activate the Virtual Environment and run the API and Client projects
in parallel.

_PD: Before `run.sh` it must have run the `setup.sh` or install all the
dependencies manually_

The API it'll be at http://localhost:8000 and the Client on http://localhost:4200
