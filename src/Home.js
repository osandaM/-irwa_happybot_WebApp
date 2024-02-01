import React, {useState} from 'react'
import './App.css'



import gateway from './assets/4b88c57c-5657-4976-910d-6f489d589057_3df00a92-9d9f-4ddc-a588-7255d372f7fb_productImage.jpg'
import solution from './assets/solution.png'


import banner5 from './assets/banner20.jpg'
import banner6 from './assets/banner21.jpg'
import banner7 from './assets/banner10.jpg'

import winner from './assets/winner.png'
import AI from './assets/artificial-intelligence.png'
import chatbot from './assets/chatbot.png'
import gift from './assets/gift.png'
import cheers from  './assets/cheers.png'
import chatBot from './assets/chatBotReady.png'

import Pagination from 'react-bootstrap/Pagination';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <div className='Homepage'>
      <NavBar />
      <Content />
      <Footer />
    </div>
  )
}

function NavBar() {
    return (
        <div>
        <Navbar className="bg-body-tertiary" >
            <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={solution}
                width="35"
                height="35"
                className="d-inline-block align-top rotate-left"
                />
                {' '}
                <span style={{color: 'white'}}>PowerHouse Solutions</span>
            </Navbar.Brand>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                <Button style={{ backgroundColor: 'transparent', border: 'none' }}>
                {/* <img src={search} alt="search icon" width="30" /> */}Go
                </Button>
                </Form>
            <Nav className="me-auto" >
            <Nav.Link href="#home" style={{ color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{ color: 'white'}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'white'}}>Pricing</Nav.Link>
          </Nav>
            </Container>
        </Navbar>
        </div>
    )
}




function Content() {
  const [isChatBotVisible, setChatBotVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showInputDialog, setShowInputDialog] = useState(false);

  const [userMessage, setUserMessage] = useState('');
  const [botResponses, setBotResponses] = useState([]);
  const [botTyping, setBotTyping] = useState(false);



  const handleChatBotClick = () => {
    setChatBotVisible(!isChatBotVisible);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleShowInputDialog = () => {
    setShowInputDialog(true);
  };

  const handleHideInputDialog = () => {
    setShowInputDialog(false);
    setInputText(''); // Reset input text
  };

  const handleInputSubmit = () => {
    // Handle the submit logic, e.g., save the input text
    console.log(`Submitted: ${inputText}`);
    handleHideInputDialog();
  };

  const sendUserMessage = async () => {
    if (userMessage) {
      setBotTyping(true);

      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = data.bot_response;
        setBotResponses((prevResponses) => [
          ...prevResponses,
          { message: userMessage, type: 'user' },
          { message: botResponse, type: 'bot' },
        ]);
        const chatHistoryInner = document.getElementById('chat-history-inner');
        chatHistoryInner.scrollTop = chatHistoryInner.scrollHeight;
        setBotTyping(false);
        console.error('success:', response.statusText);
      } else {
        console.error('Error sending message to chatbot:', response.statusText);
        setBotTyping(false);
      }
      setUserMessage('');
    }
  };

  const cardDetails = [
    {
      variant: 'Light',
      header: (<img 
        src={winner}
        alt='winner img'
        width="50"
        height='50'
        />),
      title: 'Winners',
      description: 'We are happy to have the best online website award of 2023.',
    },
    {
      variant: 'Light',
      header: (<img 
        src={gift}
        alt='winner img'
        width="50"
        height='50'
        />),
      title: 'Discounts',
      description: 'You can now purchase your loved items with seasonal offers.',
    },
    {
      variant: 'Light',
      header: (<img 
        src={cheers}
        alt='winner img'
        width="50"
        height='50'
        />),
      title: 'Subscribes',
      description: 'We are proud to have millions of happy customer base.',
    },
    {
      variant: 'Light',
      header: (<img 
        src={chatbot}
        alt='winner img'
        width="50"
        height='50'
        />),
      title: 'Chat Bot',
      description: 'Now you can ask any question from the happy chat bot.',
    },
  ];

  return (
    <div className='content-body'>
      <div className='banner'>
      <Carousel>
      <Carousel.Item interval={5000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
              className="d-block w-100"
              src={banner7} // Replace with the path to your first image
              alt="First slide"
              style={{ objectFit: 'cover', width: '100%', height: '350px' }}
            />
        <Carousel.Caption>
        <h3 style={{ color: 'black' }}>Accessories</h3>
        <p style={{ color: 'black' }}>Monitors | Keyboards | Headphones | Mouse | Printers | Network | Gaming | Camera | UPS | CCTV | Mobile | Laptop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
              className="d-block w-100"
              src={banner6} // Replace with the path to your first image
              alt="First slide"
              style={{ objectFit: 'cover', width: '100%', height: '350px' }}
            />
        <Carousel.Caption>
        <h3 style={{ color: 'white' }}>Sevices</h3>
        <p style={{ color: 'white' }}>Delivery | Software | Hardware</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
              className="d-block w-100"
              src={banner5} // Replace with the path to your first image
              alt="First slide"
              style={{ objectFit: 'cover', width: '100%', height: '350px' }}
            />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Partners</h3>
          <p style={{ color: 'black' }}>
            Asus | Dell | HP | Apple | Lenovo | Samsung | Huawei | Hikvision
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='aboutus'>
        <div className="row">
          {cardDetails.map((card, index) => (
            <div key={index} className="col-md-3">
              <Card
                bg={card.variant.toLowerCase()}
                text={card.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-3"
              >
                <Card.Header>{card.header}</Card.Header>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className='product_board'>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 20 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ width: '18rem', marginBottom: '5%' }}>
                <Card.Img variant="top" src={gateway} />
                <Card.Body>
                  <Card.Title>AAEON ICS-6280 - Gateway</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button variant="primary">Click to preview</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className='chatBot'>
        <img
          src={chatBot}
          alt='AI Powerd Chatbot'
          width='60'
          height='60'
          onClick={handleShowInputDialog}
          className="chatBotImage"
        />
        {/* chat bot start */}
            <p style={{ color: 'grey', padding: '1%', borderRadius: '10%', textAlign: 'left'}}>HappyBot</p>
            {showInputDialog && (
        <div className="inputDialogBackground">
          <p style={{color: 'grey'}}>Hi! I'm happy to hear your thoughts.</p>
        <div className="inputDialog">
         <div className="chat-history">
          <div className="chat-history-inner" id="chat-history-inner">
          {botResponses.map((response, index) => (
  <div key={index} className={`message ${response.type === 'user' ? 'user-message' : 'bot-message'}`}>
    <div className="message-content">
      {response.message}
    </div>
  </div>
))}

        {botTyping && <div className="message bot">Bot is typing...</div>}
        </div>
      </div>
      <input
         type="text"
         value={userMessage}
         onChange={(e) => setUserMessage(e.target.value)}
         placeholder="Type your message..."
          style={{
                padding: '10px',        // Add padding for spacing
               border: '1px solid #ccc', // Add a border
               borderRadius: '5px',      // Add rounded corners
               width: '99%',           // Make the input full width
               fontSize: '16px',        // Adjust the font size
               margin: '1%'
             }}
/>
          
          <div className="button-container">
            <Button variant="primary" onClick={sendUserMessage}>
              Send
            </Button>
            <Button variant="danger" onClick={handleHideInputDialog}>
              Back
            </Button>
          </div>
        </div>
      </div>
      )}
      </div>
        

        {/* chat bot end */}
        <div className='pagination'>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        </div>
      </div>

      
    
  );
}


function Footer() {
    return (
        <div className='footer'>
            <ul className='leftUl'>
            <img src={AI} alt='AI brain' style={{ width: '30px', height: '30px' }} />
                <li className='AIimage'>AI Integrated</li>
            </ul>
            <ul className='rightUl'>
                <li>ContactUs</li>
                <li>Privacy</li>
                <li>Terms of use</li>
                <li>Trademarks</li>
                <li>About our ads</li>
                <li>&copy; Power Solutions 2023</li>
            </ul>
        </div>
    )
}