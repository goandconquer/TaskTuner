import '../css/dashboard.css';

import { useState } from 'react';

import { Button } from '@mui/material';

import Paper from '@mui/material/Paper';

import Moodle from './moodle.js';
import EventsList from './events-list.js';
import RemindersList from './reminders-list.js';
import TasksList from './tasks-list.js';

function getDate() {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
}

export default function Dashboard() {

    const [currentdate, setCurrentDate] = useState(getDate());

    return (
        <div className="dashboard">
            <div className="dashboard-sections">
                <Paper>
                    <section className="dashboard-actions">
                        <h2>Actions</h2>
                        <hr />
                        <h3>Today is: {currentdate}</h3>
                        <hr />
                        <Moodle />
                        <hr />
                        <div className="events">
                            <h3>Events</h3>
                            <Button variant="outlined">Add</Button>
                            <EventsList />
                        </div>
                        <div className="reminders">
                            <h3>Reminders</h3>
                            <Button variant="outlined">Add</Button>
                            <RemindersList />
                        </div>
                    </section>
                </Paper>
                <Paper>
                    <section className="task-list">
                        <h2>Tasks</h2>
                        <hr />
                        <TasksList />
                    </section>
                </Paper>
            </div>
        </div>
    )
}