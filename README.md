# Cetification Project - TCS

## Setup Steps

  
**This assumes that you are using the command line and already have node and npm on your computer**

### Pre-Steps

1. Clone Repository

2. git clone https://github.com/jhonatancruz/certificationProject.git


### front-end

1. Change Directory to front-end

	- cd front-end

2. Install Angular Cli

	- npm install -g @angular/cli

3. Install front-end dependencies

	- npm i

4. Test to see if front end server starts

	- ng s

5. Visit url and ensure that it works

	- http://localhost:4200/

### back-end

1. Stop Angular Project

	- ctrl-c

2. Change directory to back-end

	- cd ../back-end

3. Install back-end dependencies

	- npm i

4. Create .env file

	- touch .env

5. Edit .env file (add the following to the file on the first line and then save):

		PORT=8000

6. Start the back-end server

	- npm start

7. Visit url and ensure that it works

	- http://localhost:8000/
