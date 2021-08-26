const create = async (user) => {
  try {
    let response = await fetch("/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async (signal) => {
  try {
    let response = await fetch("/api/users/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/users/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (params, credentials, user) => {
  try {
    let response = await fetch("/api/users/" + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (params, credentials) => {
  try {
    let response = await fetch("/api/users/" + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const getCsv = async (signal) => {
  try {
    let response = await fetch("/api/getCsv", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getListInfo = async (userName, signal) => {
  try {
    let response = await fetch("/api/mentorInfo/" + userName, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const addTime = async (val) => {
  try {
    let response = await fetch("/api/addTime", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(val),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const getAppointments = async (signal) => {
  try {
    let response = await fetch("/api/getAppointment", {
      method: "GET",
      heheaders: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getMyAppoint = async (val, signal) => {
  try {
    let response = await fetch("/api/getMyAppoint/" + val, {
      method: "GET",
      signal: signal,
      heheaders: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  create,
  list,
  read,
  update,
  remove,
  getCsv,
  getListInfo,
  addTime,
  getAppointments,
  getMyAppoint,
};
