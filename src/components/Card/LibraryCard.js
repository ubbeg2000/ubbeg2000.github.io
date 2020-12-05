import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";

const LibraryCard = ({ data }) => {
  return (
    <Card style={{ height: "100%", backgroundColor: "#343434" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: "400px" }}
          image={data.links ? data.links[0].href : ""}
        />
        <CardContent style={{ color: "lightgrey" }}>
          <Typography>{data.data ? data.data[0].title : null}</Typography>
          <Typography component="em">
            {data.data ? data.data[0].photographer : null},{" "}
            {data.data
              ? new Date(data.data[0].date_created).toLocaleString()
              : null}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LibraryCard;
