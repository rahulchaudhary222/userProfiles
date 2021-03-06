import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import setActiveUser from "../../redux/actions/setactiveUser";

const CardList = ({ history }) => {
  const users = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();

  const selectActive = (id) => {
    dispatch(setActiveUser(id));
    history.push("/profile");
  };

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {users.map((ele) => {
          return (
            <Col key={ele.id}>
              <UserCard
                onSelect={selectActive}
                id={ele.id}
                name={ele.name}
                email={ele.email}
                phone={ele.phone}
                website={ele.website}
                imgSrc={`https://avatars.dicebear.com/api/male/${ele.id}.svg`}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default CardList;
