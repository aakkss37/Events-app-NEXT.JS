import React, { Fragment } from 'react'
import { getEventById } from '@/dummy-data'
import { useRouter } from 'next/router'
import EventSummary from '@/components/EventsDetail/event-summary'
import EventLogistics from '@/components/EventsDetail/event-logistics'
import EventContent from '@/components/EventsDetail/event-content'

const EventDetailPage = () => {
    const route = useRouter()
    const eventID = route.query.eventID
    const event = getEventById(eventID)
    if (!event) return <p>No event found</p>
    return (
        <Fragment >
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent><p>{event.description}</p></EventContent>
        </Fragment>
    )
}

export default EventDetailPage