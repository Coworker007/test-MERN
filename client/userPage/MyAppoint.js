import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AppointTable from "../adminPage/appointTable";
import { getMyAppoint } from "../user/api-user";

export default function MyAppoint(props) {
  const [myAppoint, setMyAppoint] = useState([]);
  const { data } = props.location;
  console.log("email==", data);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getMyAppoint(data, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("data===", data);
        setMyAppoint(data);
        // setAppoints(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  return (
    <div>
      <Container>
        <Button
          variant="contained"
          onClick={() => props.history.goBack()}
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Back
        </Button>
        {myAppoint.length > 0 && <AppointTable data={myAppoint} />}
      </Container>
    </div>
  );
}
