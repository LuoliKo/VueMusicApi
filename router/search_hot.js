const express = require("express");
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  let isEncrypt = false;
  const data = {
    csrf_token: "",
    params: "uP1Ig/yMJl4Tdm5XITutFebb9d+UHIpCZpx+Mnkyp+U=",
    encSecKey: "59589179b1c2ae593fab2c97905e138d553a3c7dd7065afd4a3c8a3108d4fe40b28f6381745dccb569b499b8d3326a8b4241d0234bfc08012f1ed08e1255e41ce736e988735a67959aac4156ece0ca58c3be870bb54686381bef6ca8c6e6c256ac02a7dad9132703bd1602c52f84a42e86a92fe5db3222d2f074af34e8b819d2"
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/search/hot",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error"),
    isEncrypt
  );
});

module.exports = router;