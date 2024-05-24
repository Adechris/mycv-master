import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaHome, FaUserAlt, FaBookOpen, FaAddressBook} from 'react-icons/fa';
import img1 from '../../Assets/image2.JPG'



const MyNavbar = () =>{
    return (
    <Container fluid='md'>
        <Navbar expand="lg" className="my-5">
      <Container>
        <Navbar.Brand as={Link} to="/" ><img src={img1}  height={30} style={{borderRadius:'50%'}}/> <span className='home'>Ade</span><span className='span1'>Chris </span></Navbar.Brand>
        <Navbar.Toggle className='shadow-none' aria-controls="basic-navbar-nav" />
      </Container>
      
      <Container>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-end">
            <Nav.Link as={Link} to="/" ><span  className='font'> <FaHome/></span> <span className='list-item '>Home</span></Nav.Link>
            <Nav.Link as={Link}  to="about"><span className='font '><FaUserAlt /></span> <span className='list-item '>About</span> </Nav.Link>
            <Nav.Link as={Link}  to="project"> <span className='font '><FaBookOpen /></span><span className='list-item '>Project</span></Nav.Link>
            <Nav.Link as={Link}  to="contact"><span className='font '><FaAddressBook /></span> <span className='list-item '>Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    <hr/>
    </Container>
    )
}
export default MyNavbar;