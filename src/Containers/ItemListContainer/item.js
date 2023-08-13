import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
// import { Link } from "react-router-dom";

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(249, 220, 92, 0.3)"
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  }
};

const Item = ({ product }) => {

  console.log(product);
  return (
  <p>{product.title}</p>
  )
};

export default Item;