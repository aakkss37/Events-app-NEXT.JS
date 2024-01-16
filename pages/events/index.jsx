import EventList from '@/components/Events/EventList'
import { getAllEvents } from '@/dummy-data'
import React from 'react'

const EventListPage = () => {
    const eventsList = getAllEvents()
    return (
        <div>
            <EventList events={eventsList} />
        </div>
    )
}

export default EventListPage