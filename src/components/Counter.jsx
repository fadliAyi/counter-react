import React, { Component } from "react";
import { Button } from 'reactstrap'

class Counter extends Component {
  state = {
    angka: 0
  };

  tambah = () => {
    this.setState({ angka: this.state.angka + 1 })
  }

  kurang = () => {
    this.setState({ angka: this.state.angka - 1 })
  }
  render() {
    return (
      <div className="mx-auto m-t-10" style={{ width: 200 }}>
        <h1>Counter: {this.state.angka} </h1>
        <Button color="success" onClick={() => this.tambah()}>Tambah</Button><p></p>
        <Button color="success" onClick={() => this.kurang()}>Kurang</Button>
      </div>
    );
  }
}

export default Counter;
