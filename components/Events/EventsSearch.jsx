import React, { useRef } from 'react'
import Button from '../UI/Button'
import style from './eventSearch.module.css'

const EventsSearch = (props) => {
    const yearInputRef = useRef()
    const monthInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
        console.log(selectedMonth)
        props.onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.controls}>
                <div className={style.control}>
                    <label htmlFor="year">Year</label>
                    <select id='year' ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={style.control} >
                    <label htmlFor='month'>Month</label>
                    <select name="month" id="month" ref={monthInputRef}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
            </div>
            <Button>Find Event</Button>
        </form>
    )
}

export default EventsSearch