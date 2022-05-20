import React from "react";
import { Badge } from "react-bootstrap";
import { FaRegStarHalf, FaRegStar } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";

const Rating = ({ rating = 0, rating_num = 0 }) => {
  if (rating === 0) {
    return (
      <span>
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating < 1 && rating !== 0) {
    return (
      <span>
        <FaRegStarHalf />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating === 1) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating < 2 && rating !== 1) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStarHalf />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating === 2) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating < 3 && rating !== 2) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStarHalf />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating === 3) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating < 4 && rating !== 3) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStarHalf />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating === 4) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating < 5 && rating !== 4) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStarHalf />
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else if (rating === 5) {
    return (
      <span>
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <FaRegStar />
        &nbsp;
        <small>
          <Badge bg="dark">
            <ImUserCheck /> &nbsp;
            {rating_num}
          </Badge>
        </small>
      </span>
    );
  } else {
    return null;
  }
};

export default Rating;
