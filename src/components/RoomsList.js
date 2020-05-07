import React from 'react';
import Room from './Room';

export default function RoomsList(roomsProps) {
    //const {roomList:rooms} = roomsProps;
    //console.log(roomsProps.rooms);
    
    if(roomsProps.rooms.length===0){
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    else{
        return (
            <section className="roomslist">
                <div className="roomslist-center">
                    {roomsProps.rooms.map(item=>{
                            return <Room key={item.id} room={item}/>
                    })}
                </div>
            </section>
        );
    }
}
