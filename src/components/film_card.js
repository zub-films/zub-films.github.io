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
            // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >{btn_name}</a>
    );
}

function FilmCard(props) {
    return (
        <div className="film-card-responsive">
            <Card
                actions={
                    props.sources.map((obj, i) => <Btn link={obj} key={i} />)
                }
            >
                <Card.Meta
                    title={props.name}
                />
            </Card>
        </div>
    );
}

export default FilmCard;
