import React, { Fragment } from 'react'
import EventList from '@/components/Events/EventList'
import EventsSearch from '@/components/Events/EventsSearch'
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router'

const EventListPage = () => {
    const router = useRouter()
    const eventsList = getAllEvents()
    const searchEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={searchEventsHandler} />
            <EventList events={eventsList} />
        </Fragment>
    )
}

export default EventListPage