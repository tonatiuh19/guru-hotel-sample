import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import { useQuery } from "@apollo/client";
import Queries from "../../apollo/Queries";
import { Col, ListGroup, Row } from "react-bootstrap";

const Reviews = ({ id = "" }) => {
  const [reviews, setReviews] = useState([]);
  const toQuery: string | any = Queries("getBusinessReviews");
  const { loading, error, data } = useQuery(toQuery, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      if (data.reviews.review === undefined) {
        setReviews([]);
      } else {
        setReviews(data.reviews.review);
      }
    }
  }, [loading, data]);

  if (id === "") {
    return null;
  } else {
    if (reviews.length === 0) {
      return <h5>0 reviews</h5>;
    } else {
      return (
        <ListGroup>
          {reviews.slice(0, 5).map((item: any, index: number) => {
            return (
              <ListGroup.Item key={index}>
                <Row>
                  <Col>
                    <Row>
                      <Col className="text-center">
                        <img
                          src={item.user.image_url}
                          className={styles.imgUser}
                        ></img>
                        <h5>{item.user.name}</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <i className="text-start">{item.text}</i>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      );
    }
  }
};

export default Reviews;
