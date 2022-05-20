import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Queries from "../../apollo/Queries";
import HoursDay from "../HoursDay/HoursDay";
import { ListGroup } from "react-bootstrap";

const Hours = ({ id = "" }) => {
  const [hours, setHours] = useState([]);
  const toQuery: string | any = Queries("getBusinessHours");
  const { loading, error, data } = useQuery(toQuery, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      if (data.business.hours[0].open === undefined) {
        setHours([]);
      } else {
        setHours(data.business.hours[0].open);
      }
    }
  }, [loading, data]);

  if (id === "") {
    return null;
  } else {
    if (hours.length === 0) {
      return <h5>No schedule Data</h5>;
    } else {
      return (
        <ListGroup>
          {hours.map((item: any, index: number) => {
            return (
              <HoursDay
                key={index}
                day={item.day}
                start={item.start}
                end={item.end}
              />
            );
          })}
        </ListGroup>
      );
    }
  }
};

export default Hours;
