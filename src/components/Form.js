import React ,{Component} from 'react';

class  Form extends Component{
  render(){
    return (
      <div>
           <form onSubmit={this.props.getLocation}>
               <input type="text" name="city" placeholder="city....."/>
               <input type="text" name="country" placeholder="country....."/>
               <button>Get Weather</button>
           </form>
      </div>
    );
    }
}

export default Form;
