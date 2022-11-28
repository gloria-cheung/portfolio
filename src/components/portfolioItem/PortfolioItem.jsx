import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./PortfolioItem.scss";

export default function PortfolioItem(props) {
  const { id, img, title, gif, desc, source } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="portfolioItem" key={id} onClick={handleShow}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{desc}</p>
          <div>
            <img src={gif} alt={title} className="modalImage" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button variant="outline-secondary">
              <a href={source}>Details</a>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
