import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import resourceCards from './resourceCard.json'; // Ensure the path to your JSON file is correct
import Logo from "/logo.png"
function Resources() { // Removed the unused props
  return (
    <div className="page-background">
      <br/>
      <h1>Resources</h1>
      <br/>
      <h2>Coming Soon</h2>
      <br/>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {resourceCards.map((project, index) => (
          <Card key={index} className="resourceCard" style={{ width: '18rem', backgroundColor: "var(--pink)" }}>
            <div className="cardImagePosition">
              <Card.Img
                className="cardImage"
                variant="top"
                alt={`Image for ${project.name}`}
                src={Logo}
              />
            </div>
            <Card.Body className="cardBodyText">
              <Card.Title>
                <h4 className="cardBodyTitle">
                  <strong>{project.name}</strong>
                </h4>
              </Card.Title>
            </Card.Body>
            <Card.Body className="cardBodyLinks">
              {project.description}
            </Card.Body>
            <Button style={{ backgroundColor: "var(--purple)", border: "none", color: "var(--navy-blue)" }}>Read More</Button>
          </Card>
          ))}
      </div>
      </div>
  );
}

export default Resources;
