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
        // <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 card">
        //     <Typography.Title level={4} className="text-lg font-bold mb-2">{props.name}</Typography.Title>
        //     <div className="flex justify-end space-x-2">
        //         {props.sources.map((obj, i) => <FilmCard link={obj} key={i}/>)}
        //     </div>
        // </div>
        <Card
            actions={
                props.sources.map((obj, _) => <Btn link={obj}/>)
            }
        >
            <Card.Meta
                title={props.name}
            />
        </Card>
    );
}

export default FilmCard;
