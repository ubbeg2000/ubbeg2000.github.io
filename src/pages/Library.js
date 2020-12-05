import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Paper,
  Container,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import LibraryCard from "../components/Card/LibraryCard";
import { CloudDownloadSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  paper: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    backgroundColor: "#232323",
    boxShadow: theme.shadows[5],
  },
}));

const Library = () => {
  const [param, setParam] = useState(
    "https://images-api.nasa.gov/search?q=nebula"
  );
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState({});
  const [isLoading, data] = useFetch(param);

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ padding: "50px 20px" }}>
            <Container maxWidth="xl" style={{ marginTop: "30px" }}>
              <Grid container spacing={3}>
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
                        picture.links ? picture.links[0].href : ""
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
                        {picture.data
                          ? picture.data[0]
                            ? picture.data[0].title
                            : "-"
                          : "-"}
                      </Typography>
                      <Typography variant="subtitle1" component="em">
                        {picture.data
                          ? picture.data[0]
                            ? picture.data[0].photographer
                            : "-"
                          : "-"}
                        ,{" "}
                        {picture.data
                          ? picture.data[0]
                            ? new Date(
                                picture.data[0].date_created
                              ).toLocaleString()
                            : "-"
                          : "-"}
                      </Typography>
                    </div>
                  </div>
                  <br />
                  <br />
                  <Typography variant="body1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: picture.data
                          ? picture.data[0]
                            ? picture.data[0].description
                            : ""
                          : "",
                      }}
                    ></div>
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
                      window.open(picture.links ? picture.links[0].href : "")
                    }
                    startIcon={<CloudDownloadSharp />}
                  >
                    Download
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      color: "lightgrey",
                      borderColor: "lightgrey",
                      margin: "20px 0 20px auto",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </Button>
                  <br />
                  {data ? (
                    data[0] ? (
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Card style={{ backgroundColor: "#343434" }}>
                            <CardActionArea
                              onClick={() =>
                                setPicture(
                                  data[0].collection.items[
                                    data[0].collection.items.indexOf(picture) +
                                      1
                                  ]
                                )
                              }
                            >
                              <CardMedia
                                style={{ height: "200px" }}
                                image={
                                  data[0].collection.items
                                    ? data[0].collection.items[
                                        data[0].collection.items.indexOf(
                                          picture
                                        ) + 1
                                      ]
                                      ? data[0].collection.items[
                                          data[0].collection.items.indexOf(
                                            picture
                                          ) + 1
                                        ].links[0].href
                                      : ""
                                    : null
                                }
                              />
                              <CardContent style={{ color: "lightgrey" }}>
                                <Typography>
                                  {data[0].collection.items[
                                    data[0].collection.items.indexOf(picture) +
                                      1
                                  ]
                                    ? data[0].collection.items
                                      ? data[0].collection.items[
                                          data[0].collection.items.indexOf(
                                            picture
                                          ) + 1
                                        ].data[0].title
                                      : ""
                                    : ""}
                                </Typography>
                                <Typography component="em">
                                  {data[0].collection.items[
                                    data[0].collection.items.indexOf(picture) +
                                      1
                                  ]
                                    ? data[0].collection.items
                                      ? data[0].collection.items[
                                          data[0].collection.items.indexOf(
                                            picture
                                          ) + 1
                                        ].data[0].date_created.toLocaleString()
                                      : ""
                                    : ""}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Card style={{ backgroundColor: "#343434" }}>
                            <CardActionArea
                              onClick={() =>
                                setPicture(
                                  data[0].collection.items[
                                    data[0].collection.items.indexOf(picture) +
                                      2
                                  ]
                                )
                              }
                            >
                              <CardMedia
                                style={{ height: "200px" }}
                                image={
                                  data[0].collection.items
                                    ? data[0].collection.items[
                                        data[0].collection.items.indexOf(
                                          picture
                                        ) + 2
                                      ]
                                      ? data[0].collection.items[
                                          data[0].collection.items.indexOf(
                                            picture
                                          ) + 2
                                        ].links[0].href
                                      : ""
                                    : null
                                }
                              />
                              <CardContent style={{ color: "lightgrey" }}>
                                <Typography>
                                  {data[0].collection.items[
                                    data[0].collection.items.indexOf(picture) +
                                      2
                                  ]
                                    ? data[0].collection.items
                                      ? data[0].collection.items[
                                          data[0].collection.items.indexOf(
                                            picture
                                          ) + 2
                                        ].data[0].title
                                      : ""
                                    : ""}
                                </Typography>
                                <Typography component="em">
                                  {data[0].collection.items[
                                    data[0].collection.items.indexOf(picture) +
                                      2
                                  ]
                                    ? data[0].collection.items
                                      ? data[0].collection.items[
                                          data[0].collection.items.indexOf(
                                            picture
                                          ) + 2
                                        ].data[0].date_created.toLocaleString()
                                      : ""
                                    : ""}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      </Grid>
                    ) : null
                  ) : null}
                </Grid>
              </Grid>
            </Container>
          </div>
        </Fade>
      </Modal>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <TextField
            label="Search..."
            size="large"
            style={{
              margin: "20px 20px",
              borderColor: "lightgrey",
            }}
            variant="filled"
            InputLabelProps={{
              style: { color: "lightgrey", borderColor: "lightgrey" },
            }}
            inputProps={{
              style: {
                color: "lightgrey",
                borderColor: "lightgrey",
              },
            }}
            onChange={(e) =>
              setParam(`https://images-api.nasa.gov/search?q=${e.target.value}`)
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {!isLoading && data ? (
          data[0] ? (
            data[0].collection ? (
              data[0].collection.items.map((one) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  onClick={() => {
                    setOpen(true);
                    setPicture(one);
                  }}
                >
                  <LibraryCard data={one} />
                </Grid>
              ))
            ) : null
          ) : null
        ) : (
          <CircularProgress
            size={200}
            style={{ color: "lightgrey", margin: "auto" }}
          />
        )}
        {!isLoading && data
          ? data[0]
            ? data[0].collection
              ? data[0].collection.links
                ? data[0].collection.links.map((one) => (
                    <Grid item xs={12} md={4}>
                      <Card
                        style={{
                          height: "100%",
                          backgroundColor: "#343434",
                          color: "lightgrey",
                        }}
                      >
                        <CardActionArea
                          style={{ height: "100%" }}
                          onClick={() => setParam(one.href)}
                        >
                          <Typography align="center" variant="h3">
                            {one.prompt.toUpperCase()}
                          </Typography>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : null
              : null
            : null
          : null}
      </Grid>
    </div>
  );
};

export default Library;
