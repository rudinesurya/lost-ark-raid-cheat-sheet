import { Link } from "react-router-dom";
import { Container, Header, List } from "semantic-ui-react";

const ImageList = ({ linksData }) => {
  return (
    <Container textAlign="center" style={{ padding: "2em 0" }}>
      <Header as="h1" icon>
        Raid Cheat Sheet
        <Header.Subheader>
          Click on an item to view its details.
        </Header.Subheader>
      </Header>

      <List divided relaxed size="large" style={{ maxWidth: "600px", margin: "0 auto" }}>
        {linksData.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>
                {item.name}
                <span style={{ marginLeft: "1em" }}>
                  {item.normal && <Link to={`/image/${index}/normal`} style={{ marginRight: "1em" }}>
                    Normal
                  </Link>}

                  {item.normal && item.hard && <>|</>}

                  {item.hard && <Link to={`/image/${index}/hard`} style={{ marginLeft: "1em" }}>
                    Hard
                  </Link>}

                  {item.both && <Link to={`/image/${index}/both`} style={{ marginLeft: "1em" }}>
                    Both
                  </Link>}
                </span>
              </List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default ImageList;