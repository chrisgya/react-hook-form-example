import React from "react";
import Form1 from "./component/form/Form1";
import { Modal } from "./component/shared/Modal";

function App() {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const toggleModal = ()=> {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button onClick={toggleModal}>show modal</button>
      <Modal show={showModal} onHide={toggleModal}>
        <h1 style={{backgroundColor: "red", color: "white", textAlign: "center"}}> example modal box...how it's going to work</h1>
      </Modal>

      <Form1 />
    </div>
  );
}

export default App;

// npx create-react-app react-hook-form-example --use-npm --typescript
