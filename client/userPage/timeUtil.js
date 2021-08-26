function timeCalculate(startTime, endTime) {
  console.log("start==", startTime);
  console.log("end==", endTime);
  // let fromtime = "09:00:00";
  let fromtimeH = 0;
  let fromtimeM = 0;
  let fromtime = "";
  let endtimeH = 0;
  let endtimeM = 0;
  let endtime = "";
  if (startTime[startTime.length - 2] == "P") {
    fromtimeH = parseInt(startTime.split(":")[0]);
    fromtimeM = parseInt(startTime.split(":")[1].slice(0, -2));
    fromtimeH = fromtimeH + 12;
    fromtime = `${fromtimeH}` + ":" + `${fromtimeM}`;
  } else {
    fromtimeH = parseInt(startTime.split(":")[0]);
    fromtimeM = parseInt(startTime.split(":")[1].slice(0, -2));
    fromtime = `${fromtimeH}` + ":" + `${fromtimeM}`;
  }
  if (endTime[endTime.length - 2] == "P") {
    endtimeH = parseInt(endTime.split(":")[0]);
    endtimeM = parseInt(endTime.split(":")[1].slice(0, -2));
    endtimeH = endtimeH + 12;
    endtime = `${endtimeH}` + ":" + `${endtimeM}`;
  } else {
    endtimeH = parseInt(endTime.split(":")[0]);
    endtimeM = parseInt(endTime.split(":")[1].slice(0, -2));
    endtime = `${endtimeH}` + ":" + `${endtimeM}`;
  }

  // let totime = "21:00:00";
  console.log("from time==", fromtime);
  console.log("end time==", endtime);

  return returnTimesInBetween(fromtime, endtime);
}
let getGenTime = (timeString) => {
  let H = +timeString.substr(0, 2);
  let h = H % 12 || 12;
  let ampm = H < 12 ? " AM" : " PM";
  return (timeString = h + timeString.substr(2, 3) + ampm);
};

function returnTimesInBetween(start, end) {
  var timesInBetween = [];

  var startH = parseInt(start.split(":")[0]);
  var startM = parseInt(start.split(":")[1]);
  var endH = parseInt(end.split(":")[0]);
  var endM = parseInt(end.split(":")[1]);

  if (startM == 30) startH++;

  for (var i = startH; i < endH; i++) {
    timesInBetween.push(i < 10 ? "0" + i + ":00" : i + ":00");
    timesInBetween.push(i < 10 ? "0" + i + ":30" : i + ":30");
  }

  timesInBetween.push(endH + ":00");
  if (endM == 30) timesInBetween.push(endH + ":30");

  return timesInBetween.map(getGenTime);
}
export default timeCalculate;
