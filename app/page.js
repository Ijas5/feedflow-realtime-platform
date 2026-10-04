"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Home() {

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

  useEffect(() => {

    fetchFeeds();

    socket.on("newFeed", (data) => {

      setFeeds((prev) => [data, ...prev]);
    });

    return () => {

      socket.off("newFeed");
    };

  }, []);

    const fetchFeeds = async () => {

    try {

        setLoading(true);

        const res = await axios.get(
        "http://localhost:5000/feed"
        );

        setFeeds(res.data);

    } catch (err) {

        setError("Failed to load feeds");

    } finally {

        setLoading(false);
    }
    };
    if (loading) {

    return <h2>Loading feeds...</h2>;
    }

    if (error) {

    return <h2>{error}</h2>;
    }

  return (
    <div
      style={{
        background: "#f3f2ef",
        minHeight: "100vh",
        padding: "40px"
      }}
    >

      <div
        style={{
          maxWidth: "700px",
          margin: "auto"
        }}
      >

        <h1
          style={{
            color: "#0a66c2"
          }}
        >
          FeedFlow
        </h1>

        <p
          style={{
            color: "#555"
          }}
        >
          Live professional coaching updates
        </p>

        {
          feeds.map((feed) => (

            <div
              key={feed.id}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
                boxShadow:
                  "0 2px 5px rgba(0,0,0,0.1)"
              }}
            >

              <h3>{feed.message}</h3>

              <small
                style={{
                  color: "gray"
                }}
              >
                {
                  new Date(
                    feed.created_at
                  ).toLocaleString()
                }
              </small>

            </div>
          ))
        }

      </div>

    </div>
  );
}