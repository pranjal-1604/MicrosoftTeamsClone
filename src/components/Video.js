
import '../styling/video.css'
import {Card,Navbar} from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'


function Video(){
    return(
    <Card>
     <div className="navigation-menu">
        <Navbar bg="dark" expand="lg">
        <span className="icons">
          <i className="material-icons chat video-icons">chat</i>
          <i className="material-icons more_horiz video-icons">more_horiz</i>
          <i className="material-icons videocam video-icons">videocam</i>
          <i className="material-icons mic video-icons">mic</i>
          <Button variant="danger">
          Leave
          </Button>
        </span>
        
        </Navbar>
     </div>
     </Card>
     
    );
}
export default Video;
