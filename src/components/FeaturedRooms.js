import React, { Component } from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title'; 
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
  render() {
      const {loading,featuredRooms:rooms} = this.context;
      //console.log(this.context)
      //console.log(this.context.rooms)
     /* rooms = rooms.map(room=>{
          return <Room key={room.id} room={room}/>
      })*/
    return (
    <section className="featured-rooms">
        <Title title='featured rooms'/>
            <div className="featured-rooms-center">
                {loading ? <Loading/> : (rooms.map(room=>{
                    return <Room key={room.id} room={room}/>
                }))}
            </div>
    </section>

    )
  }
}
