import React from 'react'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const DateUtil = ({date, month}) => {
    return (
            <li>
                <h4>{date}</h4>
                <h6>{monthNames[month-1]}</h6>
            </li>
    )
};
export default DateUtil