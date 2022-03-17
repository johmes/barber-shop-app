import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Frame,
    Header,
    Body,
    Day,
    Button,
    Next,
    Prev,
    MonthYear,
    Line,
    ButtonContainer
} from './Calendar.styled.js';

export default function Calendar() {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    const formattedDate = (date) => {
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

    return (
        <>
            <Frame>
                <Header>
                    <MonthYear>
                        {MONTHS[month]} {year}
                    </MonthYear>
                    <ButtonContainer>
                        <Button
                            onClick={() => setDate(new Date(year, month - 1, day))}
                        >
                            <Prev />
                        </Button>
                        <Button
                            onClick={() => setDate(new Date(year, month + 1, day))}
                        >
                            <Next />
                        </Button>
                    </ButtonContainer>

                    <Line />
                </Header>
                <Body>
                    {DAYS_OF_THE_WEEK.map((d) => (
                        <Day key={d} weekDay>
                            {d}
                        </Day>
                    ))}
                    {Array(days[month] + (startDay - 1))
                        .fill(null)
                        .map((_, index) => {
                            const d = index - (startDay - 2);
                            return (
                                <Day
                                    dayNumber
                                    key={index}
                                    isToday={d === today.getDate()}
                                    isSelected={d === day}
                                    onClick={() => setDate(new Date(year, month, d))}
                                >
                                    {d > 0 ? d : ''}
                                </Day>
                            );
                        })}
                </Body>
            </Frame>
            <p>{formattedDate(date)}</p>
        </>
    );
}
