import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './eventCard.module.css'

const EventCard = ({ event }) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', { day: '2-digit', month: "short", year: "numeric" })
    const formattedAddress = event.location.replace(', ', '\n')
    return (
        <li className={style.item}>
            <Image src={"/" + event.image} alt={event.title} width={360} height={300} />
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{event.title}</h2>
                    <div className={style.date}>
                        <time>{formattedDate}</time>
                    </div>
                    <div className={style.address}>
                        <time>{formattedAddress}</time>
                    </div>
                </div>
                <div className={style.actions}>
                    <Link href={`/events/${event.id}`}>Explore</Link>
                </div>
            </div>
        </li>
    )
}

export default EventCard