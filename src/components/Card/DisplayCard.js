import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

export const DisplayCard = ({ data }) => {
  const [more, setMore] = useState(false);

  return (
    <div>
      <Card style={{ backgroundColor: "#343434", color: "lightgray" }}>
        <CardMedia style={{ height: "600px" }} image={data.url} />
        <CardHeader
          title={data.title}
          subheader={
            <em style={{ color: "lightgrey" }}>
              Taken at {new Date(data.date).toLocaleString()}
            </em>
          }
        />
        <CardContent
          style={{
            transition: "ease-in-out 0.8s",
            display: more ? "" : "none",
          }}
        >
          <Typography color="lightgrey">{data.explanation}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setMore(!more)}
            size="large"
            style={{ color: "lightgrey" }}
            variant="text"
          >
            {more ? "Hide" : "About"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
