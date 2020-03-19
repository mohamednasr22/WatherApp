import React ,{Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';


const keys="64aa9e78b3a9b1589763031be3e3d8e4";

class  App extends Component{


  state={
    tem:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getLocation= async (e)=>{
    e.preventDefault();
    
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${keys}`);
    const data = await api.json();  
    if(city && country){
    this.setState({
    tem:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
    
      }) 
      
    }else{
      this.setState({
        tem:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'plaze enter data'
          }) 
    }
    
  }
  render(){
    return (
       <div className="wrapper">
        <div className="form-container">
          <Form getLocation={this.getLocation} />
          <Weather
          te={this.state.tem}
          ci={this.state.city}
          co={this.state.country}
          hu={this.state.humidity}
          de={this.state.description}
          error={this.state.error}
          />
         </div>
      </div>
    );
  }
}

export default App;
