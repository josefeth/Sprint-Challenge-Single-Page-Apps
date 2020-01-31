import React from "react";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
// i

// const history = useHistory();
// const routeToShop = () => {
//   setTimeout(() => {
//     history.push("/characters");
//   }, 1000);
// };

export default function WelcomePage() {
  const history = useHistory();
  const routeToShop = () => {
    setTimeout(() => {
      history.push("/characters");
      
    }, 2000);
  };
 
  return (
    <div className="PleaseWait">
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <button className="main-buttons" to={'/characters'} onClick={routeToShop}>Look at More Characters Here</button>
        {/* <button className="main-buttons" to={'/characters'} onClick={function(event){ func1(routeToShop), func2(alert('here'))}>Look at More Characters Here</button> */}

      </header>
      
    </section>
    </div>
  );
}






// class AppTwo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showPopup: false
//     };
//   }
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }
//   render() {
//     return (
//       <div className='demo'>
//         <h1>React demo</h1>
//         <p>Please click the button to create a dynamic popup.</p>
//         <br />
//         <button onClick={this.togglePopup.bind(this)}>Create Popup</button>
//         {this.state.showPopup ? 
//           <Popup
//             text='This is a new window!'
//             closePopup={this.togglePopup.bind(this)}
//           />
//           : null
//         }
//       </div>
//     );
//   }
// };

// export default AppTwo;
