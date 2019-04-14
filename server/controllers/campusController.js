module.exports = {
  readCampusData: (req, res, next) => {
    // logic to access db, run the query in get_campus_info.sql
    const db = req.app.get("db");
    db.get_campus_info().then(campusInfo => {
      // then send the campus info back to the person who requested it
      res.status(200).send(campusInfo);
    });
  }
};
