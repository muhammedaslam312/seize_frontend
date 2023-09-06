

##  Instructions to Run the Code


1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/muhammedaslam312/seize_backend.git
   cd <project_directory>

2. Create a Virtual Environment:

   ```bash
    python -m venv venv
    #for windows
    venv\Scripts\activate

3. Install Dependencies:

    ```bash
    pip install -r requirements.txt

    
4. Load Database;

    ```bash
    python manage.py loaddata data.json

5. Create SuperUser and Runserver;

    ```bash
    python manage.py makemigrations
    python manage.py migrate    
    python manage.py createsuperuser
    python manage.py runserver

