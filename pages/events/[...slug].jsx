import EventList from '@/components/Events/EventList';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router'
import React from 'react'

const FilteredEventPage = () => {
    const router = useRouter()
    const filterData = router.query.slug;
    if (!filterData) {
        return <p className='center'>Loading...</p>
    }
    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
        return <p className='center'>Invalid filter!</p>
    }

    const filteredEvent = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvent || filteredEvent.length === 0) {
        return <p className='center'>No result found</p>
    }

    return (
        <div>
            <EventList events={filteredEvent} />
        </div>
    )
}

export default FilteredEventPage