import React, { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import AgentInfo from './AgentInfo.jsx';
import './style/Agents.css';

const Agent = ({ agent }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="agent-prof" key={agent.uuid}>
      <img className="agent-icon" src={agent.displayIcon} />
      <button className="agentName" onClick={() => setShowDescription(!showDescription)}>{agent.displayName}</button>
      {showDescription ?
        <AgentInfo
          agent={agent}
        />
        : null}
    </div>
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={agent.displayIcon}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>{agent.displayName}</h3>
    //       {/* <p>{agent.role.displayName}</p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  )
}

export default Agent;

