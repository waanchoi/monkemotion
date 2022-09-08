import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import Article from "../components/Article"

import Heading from "../components/Heading"
const RESEARCH_CONTENT = [

    {
        title: "First Title",
        date: "August 2nd, 2022",
        author: "Waan Choi",
        content: "The New York Times can be read on your phone, tablet, laptop, and on many other networked screens, and it’s impossible to know in advance how every headline appears on every display. Sometimes, the headline wraps just fine. But there are many times when they don’t, introducing unsightly widows. Even when there aren’t strict widows, instances where one line is dramatically shorter than others can still hurt legibility and reading flow. These blemishes are easily fixed in print. On a fixed canvas, we can fit copy to fill a space, and designers can work with editors to get the text to behave just right. On the web, where space is dynamic, we can’t adjust layouts by hand. But that doesn’t mean we have to just accept bad typography, we just have to use a different approach: translate and codify good design guidelines (which can be intuitive and circumstantial) into a concrete, reusable set of instructions. We have made several attempts to tackle this problem. For a while, we were relying on Adobe’s balance-text jQuery plugin on special feature articles. While the result looked great, performance was not ideal: sharp-eyed readers would see the headline update after the page’s fonts loaded. And since the headline is one of the first things someone will look at, this was not great.",
        topImg: "https://www.the-sun.com/wp-content/uploads/sites/6/2020/02/NINTCHDBPICT000463944626.jpg",
        bottomImg: ""
    },

    {
        title: "Second Title",
        date: "August 2nd, 2022",
        author: "Waan Choi",
        content: "The New York Times can be read on your phone, tablet, laptop, and on many other networked screens, and it’s impossible to know in advance how every headline appears on every display. Sometimes, the headline wraps just fine. But there are many times when they don’t, introducing unsightly widows. Even when there aren’t strict widows, instances where one line is dramatically shorter than others can still hurt legibility and reading flow. These blemishes are easily fixed in print. On a fixed canvas, we can fit copy to fill a space, and designers can work with editors to get the text to behave just right. On the web, where space is dynamic, we can’t adjust layouts by hand. But that doesn’t mean we have to just accept bad typography, we just have to use a different approach: translate and codify good design guidelines (which can be intuitive and circumstantial) into a concrete, reusable set of instructions. We have made several attempts to tackle this problem. For a while, we were relying on Adobe’s balance-text jQuery plugin on special feature articles. While the result looked great, performance was not ideal: sharp-eyed readers would see the headline update after the page’s fonts loaded. And since the headline is one of the first things someone will look at, this was not great.",
        topImg: "",
        bottomImg: "https://video.cgtn.com/news/2021-03-07/Chinese-scientists-use-facial-recognition-AI-to-track-monkeys-Yr4WgampG0/video/3870ad43cb0e4ad482b3f95ea03b7e28/3870ad43cb0e4ad482b3f95ea03b7e28.jpg"
    },


    {
        title: "Third Title",
        date: "August 2nd, 2022",
        author: "Waan Choi",
        content: "The New York Times can be read on your phone, tablet, laptop, and on many other networked screens, and it’s impossible to know in advance how every headline appears on every display. Sometimes, the headline wraps just fine. But there are many times when they don’t, introducing unsightly widows. Even when there aren’t strict widows, instances where one line is dramatically shorter than others can still hurt legibility and reading flow. These blemishes are easily fixed in print. On a fixed canvas, we can fit copy to fill a space, and designers can work with editors to get the text to behave just right. On the web, where space is dynamic, we can’t adjust layouts by hand. But that doesn’t mean we have to just accept bad typography, we just have to use a different approach: translate and codify good design guidelines (which can be intuitive and circumstantial) into a concrete, reusable set of instructions. We have made several attempts to tackle this problem. For a while, we were relying on Adobe’s balance-text jQuery plugin on special feature articles. While the result looked great, performance was not ideal: sharp-eyed readers would see the headline update after the page’s fonts loaded. And since the headline is one of the first things someone will look at, this was not great.",
        topImg: "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2017%2F07%2FMonkey-Selfie.jpg&signature=22bdaeb3fbf0448443b70a080097dc1b",
        bottomImg: "https://i2.wp.com/image.cnbcfm.com/api/v1/image/104780745-monkey_diet_study09_5657.jpg"
    }
]

function Research() {
    return (
        <Box mb={20}>
            <Heading title={"Research"} content={"Read more about the topic."} />

            {RESEARCH_CONTENT.map((data, index) =>
                <>
                    <Article
                        key={String(index)}
                        title={data.title}
                        date={data.date}
                        author={data.author}
                        content={data.content}
                        topImg={data.topImg}
                        bottomImg={data.bottomImg}
                    />
                    <Divider sx={{ mt: 10, mb: 10 }} />
                </>
            )}
        </Box>
    );
}

export default Research;
