import { Row, Col, Image } from "antd";


export const HeroSection = () => {
  return (
    <section>
      <Row>
        <Col span={10} className="main-news">
          <div className="main-news">
            <Image
              className="peter-obi"
              src="/images/Peter-Obi.png"
              alt="Peter Obi"
              style={{ height: "250px" }}
            />
            <p style={{ margin: "15px" }}>Jun 24 2022 </p>
            <p>
              {" "}
              <strong>
                lorem 4 sentences of Lorem Ipsum, which looks like this: Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                Nulla quis sem at nibh elementum imperdiet.
              </strong>
            </p>

            <p style={{ marginTop: "15px" }}>
              consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
              elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
              nec tellus sed augue semper porta. Mauris massa. Vestibulum
              lacinia arcu eget arcu.
            </p>

            <a href="/Feed" style={{ color: "blue", marginTop: "25px" }}>
              Read more
            </a>
          </div>
        </Col>
        <Col span={10}>
          <div className="other-news">
            <Row>
              <Col span={10}>
                <Image
                  className="first-ic"
                  src="/images/wike.png"
                  style={{ height: "100px", width: "1200px" }}
                />

                <Image
                  src="/images/download7.png"
                  style={{
                    height: "100px",
                    width: "1200px",
                    marginTop: "85px",
                  }}
                />

                <Image
                  src="/images/download(6).png"
                  style={{
                    height: "100px",
                    width: "1200px",
                    marginTop: "85px",
                  }}
                />
              </Col>

              <Col span={10}>
                <div className="" style={{ marginLeft: "20px" }}>
                  <p className="first-p" style={{ marginRight: "20px" }}>
                    March 22 2022
                  </p>

                  <p
                    className="first-pp"
                    style={{ width: "380px", marginTop: "20px" }}>
                    {" "}
                    lorem 30 sentences of Lorem Ipsum, which looks like this:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </p>

                  <a href="/Feed" style={{ color: "blue", marginTop: "10px" }}>
                    Read more
                  </a>
                </div>

                <div
                  className=""
                  style={{ marginTop: "65px", marginLeft: "20px" }}>
                  <p className="first-p" style={{ marginRight: "20px" }}>
                    {" "}
                    March 22 2022
                  </p>
                  <p
                    className="first-pp"
                    style={{ width: "380px", marginTop: "20px" }}>
                    {" "}
                    lorem 30 Duis sagittis ipsum. Praesent mauris. Fusce nec
                    tellus sed augue semper porta. Mauris massa. Vestibulum
                    lacinia arcu eget arcu.
                  </p>

                  <a href="/Feed" style={{ color: "blue", marginTop: "10px" }}>
                    Read more
                  </a>
                </div>

                <div
                  className=""
                  style={{ marginTop: "65px", marginLeft: "20px" }}>
                  <p className="first-p" style={{ marginRight: "20px" }}>
                    March 22 2022
                  </p>
                  <p
                    className="first-pp"
                    style={{ width: "380px", marginTop: "20px" }}>
                    {" "}
                    lorem 30 Duis sagittis ipsum. Praesent mauris. Fusce nec
                    tellus sed augue semper porta. Mauris massa. Vestibulum
                    lacinia arcu eget arcu.
                  </p>

                  <a href="/Feed" style={{ color: "blue", marginTop: "10px" }}>
                    Read more
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};
