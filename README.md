

##  Instructions to Run the Code


1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/muhammedaslam312/seize_frontend.git
   cd <project_directory>

2. Install dependencies:

   ```bash
    npm install

3. Run the development server:

    ```bash

    #confirm backend running before npm start
    npm start


    
4. Load Database;

    ```bash
    python manage.py loaddata data.json

5. Create SuperUser and Runserver;

    ```bash
    python manage.py makemigrations
    python manage.py migrate    
    python manage.py createsuperuser
    python manage.py runserver

