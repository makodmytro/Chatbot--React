import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, Grid, TextField } from "@mui/material";

function App() {

    const messagesListRef = React.createRef();
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = (content) => {
        // add the message to the state
        setMessages([
            ...messages,
            {
                content: content,
                isCustomer: true,
            }
        ]);

        // TODO: post the request to Back4app
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        sendMessage(messageInput);
        setMessageInput("");
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Card sx={{ maxWidth: 420 }}>
                <CardContent>
                    <Box
                        ref={messagesListRef}
                        sx={{
                            height: 420,
                            overflow: "scroll",
                            overflowX: "hidden",
                        }}
                    >
                        <Box sx={{ m: 1, mr: 2 }}>
                            {/* TODO: messages will be displayed here */}
                        </Box>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexFlow: "row",
                            gap: 1,
                        }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            value={messageInput}
                            onChange={(event) => setMessageInput(event.target.value)}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Send
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default App;