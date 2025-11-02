import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const SentimentForm = () => {
    const [review, setReview] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!review.trim()) return;
        setLoading(true);
        setResult(null);

        const startTime = Date.now();

        try {
            const res = await axios.post("http://localhost:8000/predict", { text: review });
            const { sentiment, confidence } = res.data;

            const elapsed = Date.now() - startTime;
            const remainingTime = 1000 - elapsed;

            if (remainingTime > 0) {
                await new Promise((resolve) => setTimeout(resolve, remainingTime));
            }

            setResult({ sentiment, confidence });
        } catch (error) {
            setResult({ sentiment: "error", confidence: 0 });
        }

        setLoading(false);
    };

    const getSentimentColor = (sentiment) => {
        switch (sentiment) {
            case "positive":
                return "text-success fw-bold";
            case "negative":
                return "text-danger fw-bold";
            case "error":
                return "text-warning fw-bold";
            default:
                return "text-light";
        }
    };

    return (
        <div
            className="card text-light shadow-lg border-0"
            style={{
                width: "28rem",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
            }}
        >
            <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <textarea
                            className="form-control bg-transparent text-light border border-light p-3"
                            rows="4"
                            placeholder="Type your movie review here..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            style={{
                                borderRadius: "10px",
                                resize: "none",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-100 py-2 d-flex justify-content-center align-items-center gap-2"
                        disabled={loading}
                        style={{
                            background: "linear-gradient(90deg, #8e2de2, #4a00e0)",
                            border: "none",
                            borderRadius: "10px",
                            fontWeight: "600",
                            transition: "0.3s ease",
                        }}
                    >
                        {loading ? (
                            <>
                                <Spinner animation="border" size="sm" /> <span>Analyzing...</span>
                            </>
                        ) : (
                            "Predict Sentiment"
                        )}
                    </button>
                </form>

                {result && (
                    <div className="mt-4 text-center">
                        {result.sentiment === "error" ? (
                            <p className="text-warning">Backend error — check FastAPI server.</p>
                        ) : (
                            <p
                                className={`fs-3 mt-3 ${getSentimentColor(result.sentiment)}`}
                                style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
                            >
                                {result.sentiment.toUpperCase()} ({result.confidence})
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SentimentForm;
