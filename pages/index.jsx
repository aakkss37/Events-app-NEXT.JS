import EventList from '@/components/Events/EventList'
import { getFeaturedEvents } from '@/dummy-data'
import React from 'react'

const HomePage = () => {
    console.log(getFeaturedEvents())

    return (
        <div>
            <EventList events={getFeaturedEvents()} />
        </div>
    )
}

export default HomePage