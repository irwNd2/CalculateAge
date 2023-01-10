const express = require("express");
const app = express();
const port = 8080;
const moment = require("moment");

app.use(express.json());

app.get("/calculateage/:dateOfBirth", (req, res) => {
  const { dateOfBirth } = req.params;
  const ageInYears = moment().diff(dateOfBirth, "years");

  // Subtract the number of full years from the current date
  const remainingAge = moment().subtract(ageInYears, "years");

  // Calculate the remaining age in months and days
  const ageInMonths = remainingAge.diff(dateOfBirth, "months");
  const ageInDays = remainingAge.diff(dateOfBirth, "days");

  res.status(200).json({
    umur: {
      year: ageInYears,
      month: ageInMonths,
      day: ageInDays,
    },
  });
});

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});
