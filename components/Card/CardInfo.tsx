import React from "react";
import styles from "./CardInfo.module.css";
import { Badge, Button, Card } from "react-bootstrap";
import { CardInfo } from "../../interfaces/CardInfo.interface";
import { FaEye } from "react-icons/fa";
import Rating from "../Rating/Rating";
import Link from "next/link";

const CardInfo = ({
  id = "",
  images = [],
  name = "",
  location = "",
  rating_num = 0,
  rating = 0,
  phone_number = "",
  isSeen = false,
  price = "",
  is_closed = false,
}: CardInfo) => {
  return (
    <Card>
      <Card.Img variant="top" src={images[0]} className={styles.cardImgTop} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span className="float-start">
            <Rating rating={rating} rating_num={rating_num} />
            <br />
            &nbsp;<span>{phone_number}</span>
          </span>
          <span className="float-end">
            <Link
              href={{
                pathname: "/detail",
                query: {
                  id: id,
                },
              }}
            >
              <Button variant="primary">See more</Button>
            </Link>
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <span className="float-start">{location}</span>
          <span className="float-end">
            {isSeen ? (
              <div>
                <Badge bg="secondary">
                  <FaEye /> Seen
                </Badge>
              </div>
            ) : null}
          </span>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default CardInfo;
