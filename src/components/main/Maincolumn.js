import React, { Component } from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./Maincolumn.css";

// export default class MainColumn extends Component {
//   render() {
//     return (
//       <div className="main-container">
//         <div className="main-column">
//           <div className="main-item recruiting">
//             <hr />
//             <a href="Recruiting">
//               <h2>recruiting-item</h2>
//             </a>
//           </div>
//           <div className="main-item">
//             <a href="/item">
//               <h2>item</h2>
//             </a>
//           </div>
//           <div className="main-item">
//             <a href="character">
//               <h2>character</h2>
//             </a>
//           </div>
//         </div>
//         <div className="main-column">
//           <div className="main-item">
//             <a href="character">
//               <h2>character</h2>
//             </a>
//           </div>
//           <div className="main-item">
//             <a href="out-look-item">
//               <h2>out-look-item</h2>
//             </a>
//           </div>
//           <div className="main-item">
//             <a href="history-item">
//               <h2>history-item</h2>
//             </a>
//           </div>
//         </div>
//         <div className="main-column">
//           <div className="main-item">
//             <a href="font-item">
//               <h2>font-item</h2>
//             </a>
//           </div>
//           <div className="main-item">
//             <a href="character">
//               <h2>character</h2>
//             </a>
//           </div>
//           <div className="main-item">
//             <a href="notice-item">
//               <h2>notice-item</h2>
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// 재사용 컴포넌트 이용

export default class MainColumn extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "dongwon"
      },
      {
        id: 2,
        name: "minji"
      },
      {
        id: 3,
        name: "Dasol"
      },
      {
        id: 4,
        name: "haesol"
      },
      {
        id: 5,
        name: "changWoo"
      },
      {
        id: 6,
        name: "jenie"
      },
      {
        id: 7,
        name: "rose"
      },
      {
        id: 8,
        name: "jisu"
      },
      {
        id: 9,
        name: "jisoo"
      }
    ]
  };
  render() {
    const list = this.state.list;
    return (
      <div className="main-column">
        <MainItems id={1} list={list} />
        <MainItems id={2} list={list} />
        <MainItems id={3} list={list} />
      </div>
    );
  }
}

class MainItems extends Component {
  render() {
    console.log(this.props.id);
    let list = this.props.list;
    return (
      <div className="mainItmes">
        {this.props.id === 1 ? (
          <div className="firstColumn">
            <p>{list.filter(item => item.id < 4).map(item => item.name)}</p>
          </div>
        ) : this.props.id === 2 ? (
          <div className="secondColumn">
            <p>
              {list
                .filter(item => item.id > 3 && item.id < 7)
                .map(item => item.name)}
            </p>
          </div>
        ) : (
          <div className="thirdColumn">
            <p>{list.filter(item => item.id > 6).map(item => item.name)}</p>
          </div>
        )}
      </div>
    );
  }
}

export { MainItems };
