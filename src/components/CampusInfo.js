import React, { Component } from "react";
import Campus from "./Campus";
import ColumnLabels from "./ColumLabels";
import axios from "axios";

export default class CampusInfo extends Component {
  constructor() {
    super();
    this.state = {
      campusInfo: []
    };
  }
  componentDidMount() {
    // axios call to get "/api/campus_info" and set state with response
    axios.get("/api/campus_info").then(response => {
      this.setState({ campusInfo: response.data });
    });
  }

  render() {
    const { campusInfo } = this.state;

    // map over campusInfo and pass campus info as props
    const mappedCampusInfo = campusInfo.map((campus, index) => {
      return <Campus key={campus.campus_id} index={index} {...campus} />;
    });
    return (
      <div className="campus-info-container">
        <div>Campus Info</div>

        <div>
          <ColumnLabels
            first="campus"
            second="program"
            third="phone"
            fourth=""
          />
          {mappedCampusInfo}
        </div>
      </div>
    );
  }
}
