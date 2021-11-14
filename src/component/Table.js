import React from "react";
import axios from "axios";
import TableContainer from "./TableContainer";

//import "../TableData.css";

export default class TvShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios("http://api.tvmaze.com/search/shows?q=boys").then((res) => {
      this.setState({ data: res.data });
    });
  }
  /*
      componentDidUpdate() {
        axios("http://api.tvmaze.com/search/shows?q=boys
").then((res) => {
          this.setState({ data: res.data });
        });
      }
    */
  render() {
    const columns = [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Rating",
            accessor: "show.rating.average",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
          {
            Header: "Premiered",
            accessor: "show.premiered",
          },
          {
            Header: "Time",
            accessor: "show.schedule.time",
          },
        ],
      },
    ];

    return (
      <div>
        <TableContainer columns={columns} data={this.state.data} />
      </div>
    );
  }
}