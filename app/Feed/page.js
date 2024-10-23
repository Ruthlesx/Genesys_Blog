import React from 'react'
import {Row, Col, Image, Button } from "antd";
import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";

const FeedContent = () => {
  return (
    <div className="feed-full-content" >
        <Row>
            <Col>
            <Image
              className="peter-obi"
              src="/images/Peter-Obi.png"
              alt="Peter Obi"
              style={{ height: "250px", width: "470px" }}
            />
            </Col>

            <Col className="feed-images" >
            <div style={{ display: "flex", paddingLeft: "200px" }}>
                <Image 
                src="/images/Wizkid-infinix.png"
                style={{ border: "1px solid black"}} />

            </div>
            
            <div style={{ display: "flex", paddingLeft: "200px" }}>
                <Image
                    src="/images/Origin-bottle.png"
                    style={{ border: "1px solid black"}}  />
            </div>
           

            </Col>
        </Row>

        <div>
            <Row>
                <Col>
                    <section>
                        <Button style={{backgroundColor: "#395185", color: "white"}}> <FacebookOutlined /> Share on Facebook</Button>
                        <Button style={{backgroundColor: "#55ACEE", color: "white"}}> <TwitterOutlined /> Share on Twitter</Button>
                    </section>
                </Col>
            </Row>  
        </div>
    </div>
  )
}

export default FeedContent 