import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const CharacterCard = props => {
    return(
        <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <p>{props.gender}</p>
            </CardBody>
        </Card>
    )
}
export default CharacterCard;