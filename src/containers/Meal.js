import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Meal({ meal }) {
  let history = useHistory();
  return (
    <div style={{ width: "32%", padding: "2%" }}>
      <Card>
        <CardImg top width="100%" src={meal.url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{meal.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Preparation time: {meal.prep_time}
          </CardSubtitle>
          <CardText>
            Cookware required: 
            {meal.cookware}
          </CardText>
          <Button onClick={() => history.push(`/meal/${meal.id}`)}>Order now</Button>
        </CardBody>
      </Card>
    </div>
  );
}
