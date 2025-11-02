# Movie Sentiment App
This project performs Sentiment Analysis on the IMDB Movie Reviews dataset using an LSTM (Long Short-Term Memory) model built with TensorFlow / Keras.
It classifies reviews as Positive 😊 or Negative 😞 based on their text content.

## 🐳 Docker Backend Setup (Recommended)

- Make sure you have Docker installed on your system(https://docs.docker.com/engine/install/)

1. **Clone the repo:**
    ```
    git clone git@github.com:bhushan354/movie-sentiment-app.git
    cd movie-sentiment-app
    ```

2. **Build and start backend and frontend service:**
   ```
   docker compose up
   ```

3. **Access Website:**

- http://localhost:5173/


## 🛠 Local Setup Instructions 

## Prerequisites for Local Setup

*In order to run this project you need:*

- Python 3.10+
- Node.js (20 LTS version) & npm
- Virtual environment tool (venv or virtualenv)
- An IDE (like VS Code or PyCharm)

1. **Clone the repository:**
   ```
    git clone git@github.com:bhushan354/movie-sentiment-app.git
    cd movie-sentiment-app
   ```

2. **Setup the Backend (FastAPI):**
   ```
   cd backend
   ```

3. **Create a virtual environment::**
   ```
   python3 -m venv venv
   source venv/bin/activate    # for Linux/macOS
   venv\Scripts\activate       # for Windows
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server:**
   ```
   uvicorn main:app --reload
   ```

5. **The backend will be available at:**

- http://127.0.0.1:8000


6. **Setup the Frontend (React + Vite)**
- Open a new terminal and navigate to frontend:
     ```
    cd ../frontend
    npm install
    npm run dev
     ```

7. **The frontend will be available at:**
- http://localhost:5173/


## 📝 Contact Details

Bhushan Deshmukh: 
+91 8600118932 | deshmukhbhushan380@gmail.com | https://www.linkedin.com/in/bhushan-deshmukh-codes/
