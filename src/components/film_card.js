import React, {useState, useEffect} from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import fetchRemoteImage from '../loader/image_loader';

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
    const [imageUrl, setImageUrl] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                // setLoading(true);
                const url = await fetchRemoteImage(props.name);
                setImageUrl(url);
            } catch (err) {
                // setError(err.message);
                console.error('Ошибка загрузки изображения:', err);
            } finally {
                // setLoading(false);
            }
        };

        loadImage();
    }, [props.name]);

    const title = <p className="whitespace-pre-wrap">{props.name}</p>

    return (
        <Card
            actions={
                props.sources.map((obj, i) => <Btn link={obj} key={i} />)
            }
            cover={<img alt="example" src={imageUrl} />}
        >
            <Card.Meta
                title={title}
            />
        </Card>
    );
}

export default FilmCard;
