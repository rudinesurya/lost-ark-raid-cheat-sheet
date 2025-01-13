import { useParams } from "react-router-dom";
import { Image, Container } from "semantic-ui-react";

const ImageDisplay = ({ linksData }) => {
    const { id, mode } = useParams();
    const item = linksData[id];

    if (!item) {
        return <p>Image not found</p>;
    }

    const imageUrl = process.env.NODE_ENV === 'development' ? item[mode] : '/lost-ark-raid-cheat-sheet' + item[mode];

    console.log(imageUrl);
    return (
        <Container textAlign="center">
            <Image src={imageUrl} alt={`${item.name} - ${mode}`} style={{ maxWidth: "100%" }} />
        </Container>
    );
};

export default ImageDisplay;