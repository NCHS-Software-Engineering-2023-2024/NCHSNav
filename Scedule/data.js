import { rm } from "fs";
import React from "react";
const columns = [
  {name: "PEROID", uid: "per", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "ROOM", uid: "rm", sortable: true},
  {name: "TEACHER", uid: "tch", sortable: true},
  {name: "EMAIL", uid: "email"},
  ,
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users = [
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
  {
    per: 1,
    name: "Tony Reichert",
    rm: "CEO",
    tch: "Management",
    email: "tony.reichert@example.com",
  },
 
];

export {columns, users, statusOptions};
