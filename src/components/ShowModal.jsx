import { useEffect } from "react";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h1>Stay Tuned</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
          pariatur iusto labore cumque laboriosam nesciunt quaerat ut non atque
          voluptas culpa eum quasi, ex, magnam adipisci ab excepturi saepe?
        </p>
        <button className="model-btn" onClick={closeModal}>
          I Accept
        </button>
      </div>
    </>
  );
};
export default MyModal;
