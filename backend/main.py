from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model_utils import predict_sentiment

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ReviewInput(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "✅ LSTM Sentiment API is running!"}

@app.post("/predict")
def predict(data: ReviewInput):
    """Receives text, predicts sentiment using LSTM model."""
    result = predict_sentiment(data.text)
    return result
