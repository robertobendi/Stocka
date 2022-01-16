import React from "react";
import Plot from "react-plotly.js";
import classes from "./Page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  fetchStock(apikey, symbol) {
    //API VARIABLES
    const pointerToThis = this;
    const SYMBOL = symbol;
    const API_KEY = apikey; //XMWGXQT03SY3CC5X
    const API_DEMO = "demo";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=1min&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (1min)"]) {
          //in questo caso key è la data
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (1min)"][key]["1. open"]
          );
        }
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target[0].value);
    //console.log(event.target.elements.username.value);
    //console.log(event.target.username.value);
    //console.log(this.inputNode.value);
    this.fetchStock(event.target.key.value, event.target.symbol.value);
  };

  render() {
    return (
      <div class="row">
        <div class="col-6">
          <h1>Stocks</h1>

          <form onSubmit={this.handleSubmit}>
            <label class="col-form-label">
              API key <br></br>
              <input
                type="text"
                name="key"
                ref={(node) => (this.inputNode = node)}
              />
              <br></br>
              <span id="textHelpBlock" class="form-text text-muted">
                get it on https://www.alphavantage.co/
              </span>
            </label>
            <label class="col-form-label">
              Stock symbol <br></br>
              <input
                type="text"
                name="symbol"
                ref={(node) => (this.inputNode = node)}
              />
              <br></br>
              <span id="textHelpBlock" class="form-text text-muted">
                for example: TSLA
              </span>
            </label>
            <button type="submit" className={classes.button}>
              Fetch data
            </button>{" "}
            <br></br>
            <br></br>
          </form>

          <div>
            <Plot
              data={[
                {
                  x: this.state.stockChartXValues,
                  y: this.state.stockChartYValues,
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "white" },
                },
              ]}
              layout={{
                width: 800,
                height: 600,
                title: "1 minute stock delay graph",
                paper_bgcolor: "#161616",
                plot_bgcolor: "rgb(17,17,17)",
              }}
            />
          </div>
        </div>

        <div class="col-6">
          <h1>Actions</h1>
          <div>
            <button className={classes.button}>Buy</button>
            <button className={classes.button}>Sell</button>
          </div>

          <div>
            <textarea id="log" name="log" rows="10" cols="80"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
