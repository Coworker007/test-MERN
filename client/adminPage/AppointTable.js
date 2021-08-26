import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AppointTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Mentor Name</StyledTableCell>
            <StyledTableCell align="center">Weekday</StyledTableCell>
            <StyledTableCell align="center">Appointment Time</StyledTableCell>
            <StyledTableCell align="center">Timezone</StyledTableCell>
            <StyledTableCell align="center">Created Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.length > 0 &&
            props.data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.mentorName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.week}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.appointmentTime}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Timezone}</StyledTableCell>
                <StyledTableCell align="center">
                  {moment(row.createdTime).format("MM.DD dddd hh:mm")}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
