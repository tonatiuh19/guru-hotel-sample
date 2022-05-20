import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import HoursTreatment from "../../utils/HoursTreatment";

const HoursDay = ({ day = 0, start = "", end = "" }) => {
  if (day === 0) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Monday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else if (day === 1) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Tuesday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else if (day === 2) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Wednesday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else if (day === 3) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Thursday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else if (day === 4) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Friday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else if (day === 5) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Saturday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else if (day === 5) {
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Sunday: </b>
          </Col>
          <Col>
            {HoursTreatment(start)} - {HoursTreatment(end)}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  } else {
    return null;
  }
};

export default HoursDay;
