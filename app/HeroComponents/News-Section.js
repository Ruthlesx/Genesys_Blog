"use client"
import { Row, Col, Image } from "antd";

const NewsSection = () => {
  return (
    <>
    <Row className="row-1">
      <Col
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
        }}
      >
        {/** First News Block **/}
        <div style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
          <Image
            className="first-ic"
            src="/images/Chinese_flag.png"
            style={{ height: "150px", width: "250px", marginLeft: "20px" }}
          />
          <ContentBlock />
        </div>

        {/** Second News Block **/}
        <div style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
          <Image
          
            className="first-ic"
            src="/images/president.png"
            style={{ height: "150px", width: "250px", marginLeft: "20px" }}
          />
          <ContentBlock />
        </div>

        {/** Third News Block **/}
        <div style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
          <Image
            className="first-ic"
            src="/images/download31.png"
            style={{ height: "150px", width: "250px", marginLeft: "20px" }}
          />
          <ContentBlock />
        </div>
      </Col>
    </Row>

    <Row className="row 2">
        <Col
          style={{
            display: "flex",
            flexWrap: "noWrap",
            alignItems: "flexStart",
          }}>
          <div
          
            style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
            <Image
              className="first-ic"
              src="/images/Olaf-Scholz.png"
              style={{ height: "150px", width: "250px", marginLeft: "20px" }}
            />

           <ContentBlock />
          </div>

          <div
            style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
            <Image
              className="first-ic"
              src="/images/sonia-gandhi.png"
              style={{ height: "150px", width: "250px", marginLeft: "20px" }}
            />

           <ContentBlock />
          </div>

          <div
            style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
            <Image
              className="first-ic"
              src="/images/Elaine-Bredehoft-Amber-Heard.png"
              style={{ height: "150px", width: "250px", marginLeft: "20px" }}
            />

            <ContentBlock />
          </div>
        </Col>
      </Row>


    </>
  );
};

// Reusable Content Block for News Items
const ContentBlock = () => (
  <div style={{ marginTop: "15px", marginLeft: "20px" }}>
    <p className="first-p" style={{ marginRight: "20px" }}>March 22 2022</p>
    <p className="first-pp" style={{ width: "280px", marginTop: "10px" }}>
      lorem 30
      <strong>
        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue which looks like this: 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
      </strong>
    </p>
    <p style={{ marginTop: "30px", width: "280px", marginBottom: "20px" }}>
      mauris. Fusce nec tellus sed augue which looks like this: Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Integer nec odio. Praesent libero.
    </p>
    <a href="#" style={{ color: "blue", marginTop: "70px" }}>Read more</a>
  </div>
);

export default NewsSection;
