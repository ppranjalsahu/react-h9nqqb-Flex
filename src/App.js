import React from "react";
import "./style.css";

export default class Dashboard extends React.Component{
  render(){
    return(
      <>
      <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        border: '1px solid black',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor:'grey',
        borderRadius:'7px'
      }}>
        <div style={{
          display: 'flex',
          display: 'inline-block',
          width: '100px',
          height: '35px',
          background: 'black',
          borderRadius:'10px'
          
        }}>
        <div className="content">GitaQuest</div>   
        </div>
        <div className="pic">

        </div>
        

      </div>
      <div className="blocks">
    <div className="c2">
      <div className="boxes">
        
        <div className="icon">
            
        </div>
        <div className="content">Hello</div>
          </div>

          <div className="boxes">
            <div className="icon">

            </div>
            <div className="content">Hello</div>
          </div>
          <div className="boxes">
            <div className="icon">

            </div>
            <div className="content">Hello</div>
          </div>
          <div className="boxes">
            <div className="icon">

            </div>
            <div className="content">Hello</div>
          </div>
          <div className="boxes">
            <div className="icon">

            </div>
            <div className="content">Hello</div>
          </div>
        
      </div>

        <div className="window1">
          <div className="window">
           
          <div className="white-board">

          </div>
          </div>
          <div className="bottom">

            <div className="bottom-two"></div>
            <div className="bottom-two"></div>


          </div>
        </div>



      </div>
      </div>
      </>
    )
  }
}

export default function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}