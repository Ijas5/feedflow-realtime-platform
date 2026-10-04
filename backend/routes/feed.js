const express = require("express");

const router = express.Router();

const pool = require("../db");

const redisClient = require("../redis");


// GET FEEDS
router.get("/", async (req, res) => {

  try {

    // CHECK REDIS
    const cachedFeeds = await redisClient.get("feeds");

    if (cachedFeeds) {

      console.log("Redis Cache Hit");

      return res.json(
        JSON.parse(cachedFeeds)
      );
    }

    console.log("PostgreSQL Hit");

    // GET FROM POSTGRESQL
    const result = await pool.query(`
      SELECT *
      FROM feeds
      ORDER BY created_at DESC
    `);

    const feeds = result.rows;

    // STORE CACHE
    await redisClient.set(
      "feeds",
      JSON.stringify(feeds),
      {
        EX: 60
      }
    );

    res.json(feeds);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });
  }
});


// POST FEED
router.post("/", async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {

      return res.status(400).json({
        error: "Message required"
      });
    }

    // INSERT INTO POSTGRESQL
    const result = await pool.query(
      `
      INSERT INTO feeds(message)
      VALUES($1)
      RETURNING *
      `,
      [message]
    );

    const feed = result.rows[0];

    // CLEAR CACHE
    await redisClient.del("feeds");

    // REALTIME SOCKET EVENT
    req.io.emit("newFeed", feed);

    res.json(feed);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;