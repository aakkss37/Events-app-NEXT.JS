import React from 'react'
import EventCard from './EventCard'
import style from "./eventList.module.css"

const EventList = ({ events }) => {
    return (
        <div>
            <ul className={style.list}>
                {
                    events.map((event, index) => <EventCard key={index} event={event} />)
                }
            </ul>
        </div>
    )
}

export default EventList