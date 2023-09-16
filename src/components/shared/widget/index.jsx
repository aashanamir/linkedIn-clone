import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./style.scss"

const Widget = ({title}) => {
  return (
    <div className='widget'>
      <div className="widget-header">
        <h3> {title}</h3>
        <InfoIcon/>
      </div>
      <div className="widget-body">
        <ul>
            <li>
                <h4>Mern Stack Jobs </h4>
                <p>6 Days ago * 455 members</p>
            </li>

            <li>
                <h4>Mern Stack Jobs </h4>
                <p>6 Days ago * 455 members</p>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Widget
