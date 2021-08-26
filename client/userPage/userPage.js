import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import enLocale from "date-fns/locale/en-US";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";
import { addTime, getCsv, getListInfo } from "../user/api-user";
import timeCalculate from "./timeUtil";
import moment from "moment";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { ContactsOutlined } from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    primary: { light: green[300], main: green[500], dark: green[700] },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),

    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  timeCard: {
    overflow: "scroll",
    padding: 20,
    maxHeight: 500,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
    calendar: {
      width: 400,
      height: 300,
    },
  },
}));
// let mentorList = [];
function userPage(props) {
  const { data } = props.location;
  console.log("datatatatata===", data);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [csvData, setCsvData] = useState();
  const [mentorList, setMentorList] = useState();
  const [selectedMentorInfo, setSelectedMentorInfo] = useState([
    { Name: "Ivan" },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [availableTime, setAvailableTime] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getCsv(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("data===", data);
        const uniqueObjects = [
          ...new Map(data.map((item) => [item.Name, item])).values(),
        ];
        console.log("name=", uniqueObjects);
        setMentorList(uniqueObjects);
        setCsvData(data);
      }
    });

    // availableTime.length > 0 &&
    //   timeCalculate(availableTime.startTime, availableTime.endTime);
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  console.log("time=", timeList);

  const handleDateChange = (date) => {
    console.log("date==", date.getDay());
    let tempDay = "";
    switch (date.getDay()) {
      case 0:
        tempDay = "Sunday";
        break;
      case 1:
        tempDay = "Monday";
        break;
      case 2:
        tempDay = "Tuesday";
        break;
      case 3:
        tempDay = "Wednesday";
        break;
      case 4:
        tempDay = "Thursday";
        break;
      case 5:
        tempDay = "Friday";
        break;
      case 6:
        tempDay = "Saturday";
        break;

      default:
        break;
    }
    let tempStatus = false;
    let stTime = "";
    let enTime = "";
    selectedMentorInfo.map((item, index) => {
      console.log("week===", item.Day_of_Week);
      console.log("temp=", tempDay);
      if (item.Day_of_Week == tempDay) {
        console.log("item.av==", item);
        stTime = item.Available_at;
        enTime = item.Available_until;
        setAvailableTime({
          startTime: item.Available_at,
          endTime: item.Available_until,
        });
        tempStatus = true;
        console.log(tempStatus);
      } else {
      }
    });
    console.log("-----", tempStatus);
    if (tempStatus == false) {
      setTimeList([]);
    } else {
      setTimeList(timeCalculate(stTime, enTime));
    }
    // console.log("time=", availableTime);
    // availableTime.length > 0 &&
    //   timeCalculate(availableTime.startTime, availableTime.endTime);

    setSelectedDate(date);
  };
  const handleListClick = (item, index) => {
    setSelectedIndex(index);
    console.log("item===", item);
    const abortController = new AbortController();
    const signal = abortController.signal;
    getListInfo(item.Name, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("user===", data);
        setSelectedMentorInfo(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  };

  const handleTimeClick = (item) => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let value = {
      mentor: selectedMentorInfo,
      appointmentTIme: item,
      email: data,
      date: selectedDate,
    };
    addTime(value).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log("appoint===", data);
        setStatus(true);
        alert("Appointment is successfull.");
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  };

  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="stretch"
        spacing={6}
      >
        <Grid item xs={3}>
          <Card elevation={3} style={{ marginTop: "5vh" }}>
            <CardHeader
              style={{ paddingBottom: 0 }}
              title={<h5>Mentor List</h5>}
            ></CardHeader>
            <CardContent>
              <List
                style={{ marginTop: 0 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                {mentorList &&
                  mentorList.map((item, index) => (
                    <ListItem
                      selected={selectedIndex === index}
                      button
                      key={index}
                      onClick={() => handleListClick(item, index)}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <Person />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.Name} />
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              style={{ paddingBottom: 0 }}
              title={
                <div>
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                  >
                    <Grid item>
                      <Avatar>
                        <Person />
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <h5>{selectedMentorInfo[0].Name}</h5>
                    </Grid>
                  </Grid>
                </div>
              }
              subheader={"Timezone:" + `${selectedMentorInfo[0].Timezone}`}
            ></CardHeader>
            <CardContent>
              <MuiThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
                  {/* <Paper style={{ overflow: "hidden", margin: 20 }}> */}
                  <Calendar
                    className={classes.calendar}
                    date={selectedDate}
                    onChange={handleDateChange}
                  />
                  {/* </Paper> */}
                </MuiPickersUtilsProvider>
              </MuiThemeProvider>
            </CardContent>
            <CardActions>
              {console.log("hellelel===", data)}
              <Link to={{ pathname: "/myappointment", data: data }}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "20vw" }}
                  endIcon={<Icon>send</Icon>}
                >
                  My Appointment View
                </Button>{" "}
              </Link>
            </CardActions>
          </Card>
          {/* <Button onClick={goMyAppointment} variant="contained" size="large">
            My Appointment{" "}
          </Button> */}
        </Grid>
        <Grid item xs={3}>
          <Card elevation={3} className={classes.timeCard}>
            <CardHeader
              title={<h5>{selectedMentorInfo[0].Name}</h5>}
              subheader={moment(selectedDate).format("MM.DD")}
            ></CardHeader>
            <CardContent>
              <List
                style={{ marginTop: 0 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                {timeList.length > 0 &&
                  timeList.map((item, index) => (
                    <ListItem button key={index}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => handleTimeClick(item)}
                      >
                        {item}
                      </Button>
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default userPage;
