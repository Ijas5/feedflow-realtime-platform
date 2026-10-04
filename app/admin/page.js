"use client";

import { useState } from "react";
import axios from "axios";

export default function AdminPage() {

  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const submitFeed = async () => {

    try {

      setSuccess("");
      setError("");

      // EMPTY VALIDATION
      if (!message.trim()) {

        return setError(
          "Please enter a message"
        );
      }

      setLoading(true);

      await axios.post(
        "http://localhost:5000/feed",
        {
          message
        }
      );

      setSuccess(
        "Feed posted successfully"
      );

      setMessage("");

    } catch (err) {

      console.log(err);

      setError(
        "Failed to post feed"
      );

    } finally {

      setLoading(false);
    }
  };


  return (
    <div
      style={{
        background: "#f3f2ef",
        minHeight: "100vh"
      }}
    >

      {/* NAVBAR */}
      <div
        style={{
          background: "white",
          padding: "15px 30px",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0
        }}
      >

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <h2
            style={{
              color: "#0a66c2",
              margin: 0
            }}
          >
            FeedFlow Admin
          </h2>

          <span
            style={{
              color: "#666"
            }}
          >
            Create Professional Updates
          </span>

        </div>

      </div>


      {/* CONTENT */}
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto"
        }}
      >

        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "25px",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.08)"
          }}
        >

          {/* PROFILE HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px"
            }}
          >

            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "#0a66c2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              FF
            </div>

            <div
              style={{
                marginLeft: "15px"
              }}
            >

              <h3
                style={{
                  margin: 0
                }}
              >
                FeedFlow Coaching
              </h3>

              <small
                style={{
                  color: "gray"
                }}
              >
                Share professional updates
              </small>

            </div>

          </div>


          {/* TEXTAREA */}
          <textarea
            rows="6"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Share a professional update..."
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              resize: "none",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />


          {/* ACTIONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px"
            }}
          >

            <small
              style={{
                color: "gray"
              }}
            >
              Realtime professional feed system
            </small>

            <button
              onClick={submitFeed}
              disabled={loading}
              style={{
                background: loading
                  ? "#7aa7d9"
                  : "#0a66c2",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "30px",
                cursor: loading
                  ? "not-allowed"
                  : "pointer",
                fontWeight: "bold"
              }}
            >

              {
                loading
                ? "Posting..."
                : "Post Feed"
              }

            </button>

          </div>


          {/* SUCCESS */}
          {
            success && (
              <p
                style={{
                  color: "green",
                  marginTop: "20px"
                }}
              >
                {success}
              </p>
            )
          }


          {/* ERROR */}
          {
            error && (
              <p
                style={{
                  color: "red",
                  marginTop: "20px"
                }}
              >
                {error}
              </p>
            )
          }

        </div>

      </div>

    </div>
  );
}