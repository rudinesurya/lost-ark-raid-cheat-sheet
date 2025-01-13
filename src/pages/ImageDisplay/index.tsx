import { useParams } from "react-router-dom";
import { Image, Container } from "semantic-ui-react";

const ImageDisplay = ({ linksData }) => {
    const { id, mode } = useParams();
    const item = linksData[id];

    if (!item) {
        return <p>Image not found</p>;
    }

    // Determine the image source based on the mode
    const imageUrl = mode === "hard" ? item.hard : item.normal;

    return (
        <Container textAlign="center">
            <Image src={imageUrl} alt={`${item.name} - ${mode}`} style={{ maxWidth: "100%" }} />
        </Container>
    );
};

export default ImageDisplay;