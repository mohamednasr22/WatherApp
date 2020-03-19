import React from 'react';

 const Weather =(props)=>{
   
      return (
        <div className="info" >
          {
            props.te && <p className="info_key">Tempreature:
            <span className="info_value">{props.te}</span>
            </p>
          }
          {
            props.ci && <p className="info_key">City:
            <span className="info_value">{props.ci}</span>
            </p>
          }
          {
            props.co && <p className="info_key">Country:
            <span className="info_value">{props.co}</span>
            </p>
          }
          {
            props.hu && <p className="info_key">Humidity:
            <span className="info_value">{props.hu}</span>
            </p>
          }
          {
            props.de && <p className="info_key">Description:
            <span className="info_value">{props.de}</span>
            </p>
          }
          {
            props.error && <p className="info_key">Error:
            <span className="info_value">{props.error}</span>
            </p>
          }
        </div>
    )
      
  }
  
  export default Weather;
