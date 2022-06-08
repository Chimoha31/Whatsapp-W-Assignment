import React, { useState } from 'react';
import './Signup.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import defaultPic from '../img/defaultPic.png';


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Image
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  
  function validateImg(e) {
    const file = e.target.files[0];
    setImage(file);
    // URLを作成してくれる
    setImagePreview(URL.createObjectURL(file));
  }

//cloudinaryへupload 
  async function uploadImage() {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'l6awljn3')
    try{
      setUploadingImg(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/dkovxib6o/image/upload", {
        method: 'post',
        body: data
      })
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;

    }catch(err){
      setUploadingImg(false);
      console.log(err);
    }
  }
  
  async function handleSignup(e) {
    e.preventDefault();
    if(!image) return alert("Please select profile picture");
    const url = await uploadImage(image);
    console.log(url);

    // signup user

  }

  return (
    <Container>
    <Row>
      <Col md={7} className="d-flex flex-direction-column align-items-center justify-content-center">
      <Form style={{width: "80%", maxwidth: 500}} onSubmit={handleSignup} >
        <div className="signup-profile-pic__container">
          <h2 className="text-center">Sign Up</h2>
          <img src={imagePreview || defaultPic} className="signup-profile-pic" alt="profile" />
          <label htmlFor="image-upload" className="image-upload-label">
            <i className="fas fa-plus-circle add-picture-icon"></i>
          </label>
          <input type="file" id="image-upload" hidden onChange={validateImg} />
        </div>

        {/* name */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassword" value={password} onChange={(e) => setPassword(e.target.value)} > 
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {uploadingImg ? "Signing you up..." : "Signup"}
        </Button>

        <div className="py-4">
          <p className="text-center">Already have an account ? <Link to="/login">Login</Link></p>
        </div>

      </Form>
      </Col>

      <Col md={5} className="signup__bg">
      {/* bg-image */}
      </Col>
    </Row>
  </Container>
  )
}

export default Signup
