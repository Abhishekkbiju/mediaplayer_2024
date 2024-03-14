import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-video fa-bounce fa-2xl me-3" style={{color:'orange'}}></i>
            {' '}
          Media Player 2024
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header