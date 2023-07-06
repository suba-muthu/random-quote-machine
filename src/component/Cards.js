import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { IconButton } from '@mui/material';


export default function Cards() {

    let initialState = {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    }

    const array = [
        {
            text: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
            author: "Mae Jemison"
        },
        {
            text: "I didn’t fail the test. I just found 100 ways to do it wrong.",
            author: "Benjamin Franklin"
        },
        {
            text: "Life is 10% what happens to me and 90% of how I react to it.",
            author: "Charles Swindoll"
        },
        {
            text: "Build your own dreams, or someone else will hire you to build theirs.",
            author: "Farrah Gray"
        },
        {
            text: "An unexamined life is not worth living.",
            author: "Socrates"
        }
    ];

    let colors = [ "#9b59b6", "#472e32", "#2c3e50", "#27ae60", "#fb6964", "#f39c12", "#77b1a9", "#bdbb99" ];

    const [ quote, setQuote ] = useState(initialState);

    function handleClick() {
        let randomQuote = Math.floor(Math.random() * array.length);
        setQuote(array[randomQuote]);
    }

    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
  return (
      <div id="container">
        <Card id="quote-box" sx={{ minWidth: 275, height: "14em", width: "30em", textAlign: "center", m: "auto", mt: 30 }}>
            <CardContent>
                <Typography id="text" variant="h5">
                    " {quote.text}
                </Typography>
                <Typography id="author" sx={{ fontSize: 20 }}   >
                    - {quote.author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
                    onClick={handleClick}
                    id="new-quote"
                    variant='contained'
                    sx={{ ml: 45, mt: 15, p: 1, position: "fixed" }}
                >
                    New Quote
                </Button>
                <a href="twitter.com/intent/tweet" id="tweet-quote">
                    <TwitterIcon sx={{ mt: 5, position: "fixed", fontSize: 35 }} />
                </a>
            </CardActions>
        </Card>
    </div>
  )
}
