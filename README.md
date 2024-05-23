# Sticky Site

## Table of Contents
1. [Introduction](#1)
2. [Running the Code](#2)
3. [Project Architecture](#3)

## Introduction <a name="1"></a>
Welcome to Sticky Site! Sticky Site is a public sticky note board, all can add sticky notes and all can see them. 

## Running the Code <a name="2"></a>
Activate the python virtual environemnt with `source .venv/bin/activate`.
Then run `flask run`.

## Project Architecture <a name="3"></a>
This is a web app that uses Flask. Flask runs on the server and is connected to a MongoDB database which stores the stickies. The Flask server handled the get and post of the sticky notes.

The sticky note drawing thing is a simple bit of js. 

This project aslo uses tailwind css for the user web graphics! Hopefully we can make it look nice.

