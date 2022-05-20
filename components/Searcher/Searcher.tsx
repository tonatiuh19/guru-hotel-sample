import React, { useState } from "react";
import styles from "./Searcher.module.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Searcher = ({ handleSearchData }: any) => {
  const [term, setTerm] = useState<string>("");
  const [location, setlocation] = useState<string>("");
  const [validTerm, setValidTerm] = useState<boolean>(true);
  const [validLocation, setValidLocation] = useState<boolean>(true);

  const dataHandling = () => {
    setValidTerm(true);
    setValidLocation(true);
    if (term.length === 0 && location.length === 0) {
      setValidTerm(false);
      setValidLocation(false);
    } else if (term.length > 0 && location.length === 0) {
      setValidTerm(true);
      setValidLocation(false);
    } else if (term.length === 0 && location.length > 0) {
      setValidTerm(false);
      setValidLocation(true);
    } else if (term.length > 0 && location.length > 0) {
      setValidTerm(true);
      setValidLocation(true);

      handleSearchData(term, location);
    }
  };

  return (
    <div className="pt-3 pb-4">
      <Card className="py-1 text-center" bg="dark" text="white">
        <Card.Body>
          <Form.Group as={Row}>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Tacos, Burritos, Pizza..."
                value={term}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTerm(e.target.value)
                }
                className={
                  validTerm
                    ? styles.formControlValid
                    : styles.formControlInvalid
                }
              />
            </Col>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setlocation(e.target.value)
                }
                className={
                  validLocation
                    ? styles.formControlValid
                    : styles.formControlInvalid
                }
              />
            </Col>
            <Col sm="2">
              <Button variant="primary" onClick={() => dataHandling()}>
                Search
              </Button>
            </Col>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Searcher;
