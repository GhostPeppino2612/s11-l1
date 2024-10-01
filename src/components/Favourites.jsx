import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Favourites = () => {
  const favoriteCompanies = useSelector((state) => {
    console.log("Current favorite companies:", state.favorites);
    return state.favorites;
  });

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1>Favourite Companies</h1>
          {favoriteCompanies.length > 0 ? (
            favoriteCompanies.map((company, index) => (
              <Row key={index} className="mx-0 mt-3 p-3">
                <Col>
                  <Link to={`/${company.company_name}`}>{company.company_name}</Link>
                </Col>
              </Row>
            ))
          ) : (
            <p>No favorite companies added yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
