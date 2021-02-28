# Flask React Project

This is the starter for a Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/Lazytangent/flask-react-template.git
   ```

2. Install dependencies

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

   ```bash
   cp .env.example .env
   ```
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

    ```bash
    psql
    ```

    ```sql
    CREATE USER starter_app_dev WITH PASSWORD 'password';
    CREATE DATABASE starter_app WITH OWNER starter_app_dev;
    ```

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Connect your local app to the Heroku app (this will make the commands a little shorter later)

    ```bash
    heroku config:set -a {NAME_OF_HEROKU_APP}
    ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web
   ```

9. Release your docker container to heroku

   ```bash
   heroku container:release web
   ```

10. set up your database:

   ```bash
   heroku run flask db upgrade
   heroku run flask seed all
   ```

11. Under Settings find "Config Vars" and add any additional/secret .env variables.

12. profit
