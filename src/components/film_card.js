import React from 'react';
import { Button, Flex, Typography } from 'antd';

function FilmCard(props) {
    let btn_name = "неизвестный";

    if (props.link.includes("t.me")) {
        btn_name = "TG";
    } else if (props.link.includes("vk.com")) {
        btn_name = "VK";
    }

    return <Button
        href={props.link}
        key={props.key}
        target="_blank"
        rel="noopener noreferrer"
    >{btn_name}</Button>;
}

function Card(props) {
    return (
        <Flex gap="space-between" align="center">
            <Typography.Title level={3}>{props.name}</Typography.Title>
            <Flex>
                {props.sources.map((obj, i) => <FilmCard link={obj} key={i}/>)}
            </Flex>
        </Flex>
    );
}

export default Card;
