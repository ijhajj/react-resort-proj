import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo convallis lorem, in pellentesque massa rutrum nec. Mauris finibus viverra placerat. Quisque tincidunt venenatis porttitor. Pellentesque rutrum quis risus at mattis. Integer ut urna ultrices augue malesuada egestas'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:'Donec et euismod mauris, ut consectetur tellus. Proin facilisis felis at metus tempus, ac posuere urna feugiat. Mauris orci enim, interdum eget enim quis, blandit pretium ipsum. Pellentesque quis lectus quis nulla tempor auctor. Morbi maximus dui a ante accumsan, ac vulputate augue pellentesque. Sed vel finibus quam.'
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:'Sed fringilla lorem sit amet dolor tempus, vitae varius dui cursus. Donec convallis at leo dictum sollicitudin. Donec lorem dolor, sodales congue rhoncus a, sagittis in enim.'
            }
        ]
    }
  render() {
    return (
      <div className="services">
        <Title title='services'></Title>   
        <div className="services-center">
        {this.state.services.map((item,index)=>{
            return(
                <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            )})}
        </div> 
      </div>
    )
  }
}
