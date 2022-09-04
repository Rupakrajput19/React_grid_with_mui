import React from "react";
import Typography from "@mui/material/Typography";

const style_typo = {
  textAlign: "center",
  textDecoration: "underline",
  margin: "30px 0 0 0",
};

function Footer() {
  return (
    <Typography variant="body1" style={style_typo}>
      Spraxa Solution Pvt. Ltd. &copy; 2022
    </Typography>
  );
}

export default Footer;
