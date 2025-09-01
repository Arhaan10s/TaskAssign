Project Setup Guide
-----------------------------------------------------------
Technology Stack
• Backend: Django (Django REST Framework, SimpleJWT, MySQL)
• Frontend: React.js (Vite, Axios, React Router)

________________________________________
Backend Setup (Django)
1. Navigate to the backend directory:
cd backend

2. (Recommended) Create and activate a virtual environment:
python -m venv venv
venv\Scripts\activate

3. Install dependencies:
pip install -r requirements.txt

4. Required Packages (if requirements.txt is missing):
Django
djangorestframework
djangorestframework-simplejwt
django-cors-headers
mysqlclient or pymysql

5. Apply migrations:
python manage.py makemigrations
python manage.py migrate

6. Start the backend server:
python manage.py runserver

________________________________________
Frontend Setup (React.js)
1. Navigate to the frontend directory:
cd frontend

2. Install dependencies:
npm install

3. Required Packages:
"axios"
"react"
"react-dom"
"react-router-dom"
"vite"
"tailwindcss" (if using Tailwind)

4. Start the frontend development server:
npm run dev

________________________________________
Development URLs
• Backend API URL: http://localhost:8000/api
• Frontend URL: http://localhost:5173

________________________________________
Notes
• Ensure Python, pip, Node.js, and npm are installed on your machine.
• Configure your database settings in backend/config/settings.py.
• For CORS, make sure django-cors-headers is installed and configured.
• Create a .env file in the backend directory for environment-specific configurations (if required).
```// filepath: c:\Users\DELL\Documents\GitHub\TaskAssign\Readme.txt
Project Setup Guide
-----------------------------------------------------------
Technology Stack
• Backend: Django (Django REST Framework, SimpleJWT, MySQL)
• Frontend: React.js (Vite, Axios, React Router)

________________________________________
Backend Setup (Django)
1. Navigate to the backend directory:
cd backend

2. (Recommended) Create and activate a virtual environment:
python -m venv venv
venv\Scripts\activate

3. Install dependencies:
pip install -r requirements.txt

4. Required Packages (if requirements.txt is missing):
Django
djangorestframework
djangorestframework-simplejwt
django-cors-headers
mysqlclient or pymysql

5. Apply migrations:
python manage.py makemigrations
python manage.py migrate

6. Start the backend server:
python manage.py runserver

________________________________________
Frontend Setup (React.js)
1. Navigate to the frontend directory:
cd frontend

2. Install dependencies:
npm install

3. Required Packages:
"axios"
"react"
"react-dom"
"react-router-dom"
"vite"
"tailwindcss" (if using Tailwind)

4. Start the frontend development server:
npm run dev

________________________________________
Development URLs
• Backend API URL: http://localhost:8000/api
• Frontend URL: http://localhost:5173

________________________________________
Notes
• Ensure Python, pip, Node.js, and npm are installed on your machine.
• Configure your database settings in backend/config/settings.py.
• For CORS, make sure django-cors-headers is installed and configured.
• Create a .env file in the backend directory for environment-