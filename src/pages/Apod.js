import {
  Container,
  Paper,
  Grid,
  Typography,
  CircularProgress,
  IconButton,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { CloudDownloadSharp } from "@material-ui/icons";

const dMinus = (date, num) => {
  return new Date(
    date.getTime() -
      date.getTimezoneOffset() * 60 * 1000 -
      num * 24 * 60 * 60 * 1000
  );
};

const Apod = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState([
    dMinus(new Date(), 0),
    dMinus(new Date(), 1),
    dMinus(new Date(), 2),
  ]);

  useEffect(() => {
    setDate([
      dMinus(selectedDate, 0),
      dMinus(selectedDate, 1),
      dMinus(selectedDate, 2),
    ]);
  }, [selectedDate]);

  const [isLoading, data] = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=sD61gj3rowGkP1haNtdptxSNnxo1Mq8dBXVQC5uO&date=${date[0].getFullYear()}-${
      (date[0].getMonth() + 1).toString().length === 1
        ? "0" + (date[0].getMonth() + 1).toString()
        : (date[0].getMonth() + 1).toString()
    }-${
      (date[0].getDate() - 1).toString().length === 1
        ? "0" + (date[0].getDate() - 1).toString()
        : (date[0].getDate() - 1).toString()
    }`
  );
  const [isLoading1Days, data1Days] = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=sD61gj3rowGkP1haNtdptxSNnxo1Mq8dBXVQC5uO&date=${date[1].getFullYear()}-${
      (date[1].getMonth() + 1).toString().length === 1
        ? "0" + (date[1].getMonth() + 1).toString()
        : (date[1].getMonth() + 1).toString()
    }-${
      (date[1].getDate() - 1).toString().length === 1
        ? "0" + (date[1].getDate() - 1).toString()
        : (date[1].getDate() - 1).toString()
    }`
  );
  const [isLoading2Days, data2Days] = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=sD61gj3rowGkP1haNtdptxSNnxo1Mq8dBXVQC5uO&date=${date[2].getFullYear()}-${
      (date[2].getMonth() + 1).toString().length === 1
        ? "0" + (date[2].getMonth() + 1).toString()
        : (date[2].getMonth() + 1).toString()
    }-${
      (date[0].getDate() - 1).toString().length === 1
        ? "0" + (date[2].getDate() - 1).toString()
        : (date[2].getDate() - 1).toString()
    }`
  );
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {isLoading ? (
            <CircularProgress
              size={200}
              style={{ color: "lightgrey", margin: "auto" }}
            />
          ) : (
            <>
              <Grid item xs={12} md={6} lg={7}>
                <Paper
                  style={{
                    minHeight: "300px",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#343434",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundImage: `url('${
                      data ? (data[0] ? data[0].url : "") : ""
                    }')`,
                  }}
                ></Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={5} style={{ color: "lightgrey" }}>
                <div>
                  <div>
                    <IconButton></IconButton>
                  </div>
                  <div>
                    <Typography variant="h4">
                      {data ? (data[0] ? data[0].title : "") : ""}
                    </Typography>
                    <Typography variant="subtitle1" component="em">
                      {data ? (data[0] ? data[0].copyright : "") : "-"},{" "}
                      {data
                        ? data[0]
                          ? new Date(data[0].date).toLocaleDateString()
                          : ""
                        : ""}
                    </Typography>
                  </div>
                </div>
                <br />
                <br />
                <Typography variant="body1">
                  {data ? (data[0] ? data[0].explanation : "") : ""}
                </Typography>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{
                    color: "lightgrey",
                    borderColor: "lightgrey",
                    margin: "20px 0 20px auto",
                  }}
                  onClick={() =>
                    window.open(data ? (data[0] ? data[0].url : "") : "")
                  }
                  startIcon={<CloudDownloadSharp />}
                >
                  Download
                </Button>
                <br />
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    onClick={() => setSelectedDate(date[1])}
                  >
                    <Card style={{ backgroundColor: "#343434" }}>
                      <CardActionArea>
                        <CardMedia
                          style={{ height: "200px" }}
                          image={
                            data1Days
                              ? data1Days[0]
                                ? data1Days[0].url
                                : ""
                              : null
                          }
                        />
                        <CardContent style={{ color: "lightgrey" }}>
                          <Typography>
                            {data1Days
                              ? data1Days[0]
                                ? data1Days[0].title
                                : ""
                              : ""}
                          </Typography>
                          <Typography component="em">
                            {data1Days
                              ? data1Days[0]
                                ? new Date(
                                    data1Days[0].date
                                  ).toLocaleDateString()
                                : ""
                              : ""}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    onClick={() => setSelectedDate(date[2])}
                  >
                    <Card style={{ backgroundColor: "#343434" }}>
                      <CardActionArea>
                        <CardMedia
                          style={{ height: "200px" }}
                          image={
                            data2Days
                              ? data2Days[0]
                                ? data2Days[0].url
                                : ""
                              : null
                          }
                        />
                        <CardContent style={{ color: "lightgrey" }}>
                          <Typography>
                            {data2Days
                              ? data2Days[0]
                                ? data2Days[0].title
                                : ""
                              : ""}
                          </Typography>
                          <Typography component="em">
                            {data2Days
                              ? data2Days[0]
                                ? new Date(
                                    data2Days[0].date
                                  ).toLocaleDateString()
                                : ""
                              : ""}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Apod;
