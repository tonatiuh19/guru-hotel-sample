import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Badge, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Queries from "../apollo/Queries";
import { useQuery } from "@apollo/client";
import { Business } from "../interfaces/Business.interface";
import Rating from "../components/Rating/Rating";
import Hours from "../components/Hours/Hours";
import Reviews from "../components/Reviews/Reviews";
import { FaEye } from "react-icons/fa";
import Loading from "../components/Loading/Loading";
import BackButton from "../components/BackButton/BackButton";
import { useSelector } from "react-redux";
import isClosedBusinesses from "../utils/isClosedBusinesses";

const Detail = () => {
  const router: any = useRouter();
  const storeIds = useSelector((state: any) => state.business);
  const [business, setBusiness] = useState<Business | any>({});
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState<any>({});
  const [dispacthState, setDispacthState] = useState(true);
  const [meta, setMeta] = useState({
    title: "",
    description: "",
  });
  const toQuery: string | any = Queries("getBusinessById");
  const { loading, error, data } = useQuery(toQuery, {
    variables: {
      id: router.query.id,
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      setBusiness(data.business);
      setPhotos(data.business.photos);
      setLocation(data.business.location);
      setMeta({
        title: data.business.name,
        description: data.business.phone,
      });
    }
  }, [loading, data]);

  return (
    <div>
      <Head>
        <title>{`Guru Hotel Sample | ${meta.title}`}</title>
        <meta
          name="description"
          content={`Here you can find the phone number | ${meta.description}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <Card>
            <Card.Body>
              <BackButton id={router.query.id} />

              <Carousel>
                {photos.map((item: any, index: number) => {
                  return (
                    <Carousel.Item key={index}>
                      <img className={styles.cardImgTop} src={item} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <Container className="mt-2">
                <Row>
                  <Col>
                    <h2 className="float-start">{business.name}</h2>{" "}
                    <h5 className="float-end">{business.price}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Rating
                      rating={business.rating}
                      rating_num={business.review_count}
                    />{" "}
                    {business.is_closed ? (
                      <Badge bg="success">Open</Badge>
                    ) : (
                      <Badge bg="danger">Closed</Badge>
                    )}
                    &nbsp;
                    {isClosedBusinesses(storeIds, router.query.id) ? (
                      <Badge bg="secondary">
                        <FaEye />
                      </Badge>
                    ) : null}
                  </Col>
                  <Col>
                    <h5 className="float-end">
                      {`${location.address1}, ${location.city}, ${location.state}`}
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5 className="float-start">{business.display_phone}</h5>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Hours id={router.query.id} />
                  </Col>
                  <Col>
                    <Reviews id={router.query.id} />
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Detail;
