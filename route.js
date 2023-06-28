const express = require("express");
const axios = require("axios");
require("dotenv").config();
const router = express.Router();

router.get("/circle", async (req, res) => {
  let email = req.query.email;
  try {
    const response = await axios.get(
      `https://app.circle.so/api/v1/community_members/search?community_id=${process.env.community}&email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${process.env.token}`,
          "Cookie": "cookies_enabled=false",
        },
      }
    );
    const result = response.data.profile_fields;
    const data = [];

    const findObjectById = (array, id) => {
      return array.find((obj) => obj.id === id);
    };

    const ids = [975770, 977816, 975735];

    ids.forEach((id) => {
      const object = findObjectById(result, id);
      data.push(object);
    });

    res.send(data);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
});

module.exports = router;
