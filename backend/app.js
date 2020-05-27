const express = require ('express')
const app = express();
app.use( "/api/posts" ,  (req , res , next) =>{
  const posts=[{
    id: "sdfssf123",
    title: "1 server-post",
    content: "from server"
  },
  {
    id: "sdfsaf123",
    title: "2 server-post",
    content: "from server again"
  }
];
  res.status(200).json(posts)
});
module.exports = app;
