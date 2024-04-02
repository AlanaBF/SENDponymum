   import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from "/logo.png"
function Resources() {
  return (
    <div className="page-background">
    <br/>
    <h1>Resources</h1>
    <br/>
    <h2>Coming Soon</h2>
    <br/>
    <div style={{display: "flex", justifyContent: "space-around"}}>
    <Card style={{ width: '18rem', backgroundColor: "var(--pink)" }}>
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title>SEND Resources</Card.Title>
        <Card.Text>
        There are 100s of pathways and charities that offer help for SEND families.  These are resources that have worked for my family.
        </Card.Text>
        <Button style={{backgroundColor: "var(--purple)", border: "none", color: "var(--navy-blue"}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: "var(--pink)"  }}>
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title>Pony Resources</Card.Title>
        <Card.Text>
        Read about the gear and gadgets that we use and love.  </Card.Text>
        <Button style={{backgroundColor: "var(--purple)", border: "none", color: "var(--navy-blue"}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: "var(--pink)"  }}>
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title>Days Out & Activities</Card.Title>
        <Card.Text>
        We are based in Surrey so most of these favourite places are close to us - we are looking to explore more widely though! Please get in touch if you have ideas. </Card.Text>
        <Button style={{backgroundColor: "var(--purple)", border: "none", color: "var(--navy-blue"}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: "var(--pink)"  }}>
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title>General Stuff We Like</Card.Title>
        <Card.Text>
        Clothes, food, toys...here&apos;s what we love in our family.  Let me know if you have something you love that we should check out! </Card.Text>
        <Button style={{backgroundColor: "var(--purple)", border: "none", color: "var(--navy-blue"}}>Read More</Button>
      </Card.Body>
    </Card></div>
    </div>
  );
}

export default Resources;