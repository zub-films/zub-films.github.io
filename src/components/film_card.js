import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';

function Btn(props) {
    let btn_name = "неизвестный";

    if (props.link.includes("t.me")) {
        btn_name = "TG";
    } else if (props.link.includes("vk.com")) {
        btn_name = "VK";
    }

    return (
        <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
        >{btn_name}</a>
    );
}

function FilmCard(props) {
    const title = <p className="whitespace-pre-wrap">{props.name}</p>

    return (
        <Card
            actions={
                props.sources.map((obj, i) => <Btn link={obj} key={i} />)
            }
        >
            <Card.Meta
                title={title}
            />
        </Card>
    );
}

export default FilmCard;
