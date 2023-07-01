import { Component } from "react";
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
// Router
import ReactRouter from "../routers/routes";
// Toast
import { ToastContainer, toast } from "react-toastify";
class App extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} toast={this.props.toast} />
        <ReactRouter />
        <Footer navigation={this.props.navigation} toast={this.props.toast} />
        <ToastContainer />
      </>
    )
  }
}
export default function (props) {
  const navigation = useNavigate()
  return <App {...props} navigation={navigation} toast={toast} />;
}

