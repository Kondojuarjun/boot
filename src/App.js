import React,{Component} from 'react';
import './App.css';
import Topbar from "./components/Topbar";
import Footer from './components/Footer';
import Card from "./components/grid";
import { apiData } from "./components/commonData"
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      cartProducts: []
     }
  }
  render() { 
    const {catalogEntryView, ...restData} = apiData;
    return ( <div>
      <Topbar cartCount={this.state.cartProducts.length}/>
      {/*card start*/}
     <div className="m-5 d-flex justify-content-center flex-wrap">
     {catalogEntryView.map((item) =>  <Card item = {item} 
     addProduct={(product) => this.setState({
       cartProducts: [...this.state.cartProducts, product]})}/> )}
      </div>
     { /*card end */}
      
     
      <Footer />
       
    </div>
  );
  }
}
 
export default App;
//const App = () => {
 // console.log("ApiData",apiData)
 // const {catalogEntryView, ...restData} = apiData;
  //return (
    //<div>
      //<Topbar />
      //{/*card start*/}
      //<div className="m-5 d-flex justify-content-center flex-wrap">
       //{catalogEntryView.map((item) =>  <Card item = {item}/> )}
      //</div>
     //{ /*card end */}
      
     
      //<Footer />
       
   // </div>
  //);
//}

//export default App;
