import React from 'react'
import './Messages.css'
import { Typography, Card, CardContent } from '@material-ui/core'
function Messages({ message, username }) {

    const isUser = username === message.username;
    return (
        <div
            className={`card_message ${isUser && "message_user"}`}
        >

            <Card className={isUser ? "message_usercard" : "message_guestcard"} >
                <CardContent>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                        {message.username}: {message.message}
                    </Typography>

                </CardContent>

            </Card>
        </div>

    )
}

export default Messages
