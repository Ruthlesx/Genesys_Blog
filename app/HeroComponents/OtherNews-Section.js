import { Row, Col, Image } from "antd";

export const OtherNews = () => {
    return (
        <Row className="row 2">
        <Col
          style={{
            display: "flex",
            flexWrap: "noWrap",
            alignItems: "flexStart",
          }}
          >

            {/** First Other News Block */}
          <div
            style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
            <Image
              className="first-ic"
              src="/images/street.png"
              style={{ height: "150px", width: "250px", marginLeft: "20px" }}
            />

            <NewsBlock />

            
          </div>

          <div
            style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
            <Image
              className="first-ic"
              src="/images/Qualifers.png"
              style={{ height: "150px", width: "250px", marginLeft: "20px" }}
            />

            < NewsBlock />

          </div>

          <div
            style={{ width: "700px", marginLeft: "50px", marginTop: "40px" }}>
            <Image
              className="first-ic"
              src="/images/w1240-p16x9-pele-paris-mbappe 1.png"
              style={{ height: "150px", width: "250px", marginLeft: "20px" }}
            />

            < NewsBlock />


            
          </div>
        </Col>
      </Row>
    )
};


//Reusable News Block for other news

const NewsBlock = () => (
    <div className="" style={{ marginTop: "15px", marginLeft: "20px" }}>
    <p className="first-p" style={{ marginRight: "20px" }}>
      {" "}
      March 22 2022
    </p>
    <p
      className="first-pp"
      style={{ width: "280px", marginTop: "10px" }}>
      {" "}
      lorem 30
      <strong>
        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
        augue which looks like this: Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer nec odio. Praesent
        libero.
      </strong>
    </p>

    <p
      style={{
        marginTop: "30px",
        width: "280px",
        marginBottom: "20px",
      }}>
      mauris. Fusce nec tellus sed augue which looks like this: Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
      odio. Praesent libero.
    </p>

    <a href="" style={{ color: "blue", marginTop: "70px" }}>
      Read more
    </a>
  </div>
)

