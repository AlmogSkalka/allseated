import { useState, useEffect } from 'react';
import ChaserElement from './Comps/ChaserElement';
import Modal from 'react-modal';
import EscapeElement from './Comps/EscapeElement';
import { Button } from 'bootstrap';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {

  const [WindowCords, setWindowCords] = useState({ x: 0, y: 0 });
  const [isShown, setIsShown] = useState(false);
  const [Score, setScore] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal() {
    setIsOpen(false);
    window.location.reload(false);
  }

  const EscaperCaught = () => {
    let tmpScore = Score;
    tmpScore += 5;
    setScore(tmpScore)
  }


  useEffect(() => {
    const handleWindowMouseMove = event => {
      setWindowCords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  return (
    <>
      <div>
        <span style={{ position: 'absolute', right: '50%', top: '0', border: '2px solid green' }}>
          Current Score: {Score}
        </span>
      </div>
          <ChaserElement ParentGameOver={openModal} position={WindowCords} />
      <EscapeElement
        parentCaught={EscaperCaught}
        position={WindowCords}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <button onClick={closeModal}>close</button>
        <h1>GAME OVER</h1>
        <h2>Score: {Score}</h2>
      </Modal>
    </>

  );
}

export default App;
