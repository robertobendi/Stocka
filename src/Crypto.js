import React from "react";
import Plot from "react-plotly.js";
import classes from "./Page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Crypto extends React.Component {
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
    let API_Call = `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=${SYMBOL}&market=USD&interval=1min&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series Crypto (1min)"]) {
          //in questo caso key è la data
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series Crypto (1min)"][key]["1. open"]
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

  handleAction = (event) => {
    event.preventDefault();
    //console.log(event.target[0].value);
    this.fetchStock(event.target.key.value, event.target.symbol.value);
  };

  render() {
    return (
      <div class="row">
        <div class="col-6">
          <h1>Cryptos</h1>

          <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col-5">
                <label class="col-form-label">
                  API key <br></br>
                  <input
                    type="text"
                    name="key"
                    className={classes.input}
                    ref={(node) => (this.inputNode = node)}
                  />
                  <br></br>
                  <span id="textHelpBlock" class="form-text text-muted">
                    get it on https://www.alphavantage.co/
                  </span>
                </label>
              </div>

              <div class="col-2">
                <label class="col-form-label">
                  Crypto symbol <br></br>
                  <input
                    type="text"
                    name="symbol"
                    className={classes.inputsymbol}
                    ref={(node) => (this.inputNode = node)}
                  />
                  <br></br>
                  <span id="textHelpBlock" class="form-text text-muted">
                    for example: BTC
                  </span>
                </label>
              </div>

              <div class="col-3">
                <button type="submit" className={classes.button}>
                  Fetch data
                </button>{" "}
              </div>
            </div>
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

          <form onSubmit={this.handleAction}>
            <div class="row">
              <div class="col-5">
                <label class="col-form-label">
                  Amount to invest <br></br>
                  <input
                    type="text"
                    name="money"
                    className={classes.input}
                    ref={(node) => (this.inputNode = node)}
                  />
                  <br></br>
                  <span id="textHelpBlock" class="form-text text-muted">
                    only numbers, the currency will be USD
                  </span>
                </label>
              </div>

              <div class="col-3">
                <button type="submit" className={classes.buttonbuy}>
                  Buy
                </button>
              </div>
              <div class="col-3">
                <button type="submit" className={classes.buttonsell}>
                  Sell
                </button>
              </div>
            </div>
          </form>

          <div>
            <label for="log">Actions Log</label>
            <textarea className={classes.textarea} id="log" name="log" rows="10" cols="80"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;
