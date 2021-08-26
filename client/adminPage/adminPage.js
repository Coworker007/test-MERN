import { Button, Card, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAppointments, getCsv } from "../user/api-user";
import AppointTable from "./appointTable";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(6),
  },
}));

export default function adminPage() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [csvData, setCsvData] = useState();
  const [appoints, setAppoints] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getCsv(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("data===", data);
        setCsvData(data);
      }
    });
    getAppointments(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("data===", data);
        setAppoints(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);
  const handleUpload = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setIsSelected(false);

        alert("Upload is successful");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSelected = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  };
  return (
    <div className={classes.card}>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <Button variant="contained" color="primary" component="label">
              Choose CSV file.
              <input
                type="file"
                name="file"
                hidden
                accept=".csv"
                onChange={handleSelected}
              />
            </Button>
          </Grid>
          <Grid item>
            {isSelected ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="default"
              onClick={handleUpload}
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Card className={classes.card}>
          <AppointTable data={appoints}></AppointTable>
        </Card>
      </Container>
    </div>
  );
}
