import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ModalDemo.module.scss";
import Modal from "../../components/Modal";

const cx = classNames.bind(styles);

function ModalDemo() {
  const [open, setOpen] = useState(null);
  const close = () => setOpen(null);

  return (
    <div className={cx("wrapper")}>
      <h1>Modal Showcase</h1>

      {/* Nút mở modal */}
      <div className={cx("buttons")}>
        <button onClick={() => setOpen("default")}>Default Modal</button>
        <button onClick={() => setOpen("timeout")}>Modal with Timeout</button>
        <button onClick={() => setOpen("callbacks")}>Modal with Callbacks</button>
        <button onClick={() => setOpen("noOverlay")}>No Overlay Close</button>
        <button onClick={() => setOpen("noEsc")}>No ESC Close</button>
        <button onClick={() => setOpen("customClass")}>Custom Styled Modal</button>
        <button onClick={() => setOpen("scroll")}>Long Content Modal</button>
        <button onClick={() => setOpen("bodyClass")}>Modal with Body Class</button>
        <button onClick={() => setOpen("htmlClass")}>Modal with HTML Class</button>
      </div>

      {/* Default Modal */}
      <Modal isOpen={open === "default"} onRequestClose={close}>
        <h2>Default Modal</h2>
        <p>Đây là modal mặc định.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* Timeout Modal */}
      <Modal
        isOpen={open === "timeout"}
        onRequestClose={close}
        closeTimeoutMS={300}
      >
        <h2>Timeout Modal</h2>
        <p>Modal này có animation delay 300ms.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* Callbacks Modal */}
      <Modal
        isOpen={open === "callbacks"}
        onRequestClose={close}
        onAfterOpen={() => alert("Modal opened!")}
        onAfterClose={() => alert("Modal closed!")}
      >
        <h2>Callbacks Modal</h2>
        <p>Mỗi lần mở/đóng sẽ chạy callback.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* No Overlay Close */}
      <Modal
        isOpen={open === "noOverlay"}
        onRequestClose={close}
        shouldCloseOnOverlayClick={false}
      >
        <h2>No Overlay Close</h2>
        <p>Không thể đóng bằng click overlay.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* No ESC Close */}
      <Modal
        isOpen={open === "noEsc"}
        onRequestClose={close}
        shouldCloseOnEsc={false}
      >
        <h2>No ESC Close</h2>
        <p>Không thể đóng bằng phím ESC.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* Custom Styled Modal */}
      <Modal
        isOpen={open === "customClass"}
        onRequestClose={close}
        overlayClassName={cx("overlayCustom")}
        className={cx("contentCustom")}
      >
        <h2>Custom Styled Modal</h2>
        <p>Modal này dùng className custom.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* Long Scroll Modal */}
      <Modal isOpen={open === "scroll"} onRequestClose={close}>
        <h2>Long Scroll Modal</h2>
        <div className={cx("longContent")}>
          {[...Array(20)].map((_, i) => (
            <p key={i}>Dòng nội dung số {i + 1}</p>
          ))}
        </div>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* Modal with Body Class */}
      <Modal
        isOpen={open === "bodyClass"}
        onRequestClose={close}
        bodyOpenClassName="modal-open-body"
      >
        <h2>Body Class Modal</h2>
        <p>Khi mở modal này, thẻ <code>&lt;body&gt;</code> sẽ có class
           <b> modal-open-body</b>.</p>
        <button onClick={close}>Đóng</button>
      </Modal>

      {/* Modal with HTML Class */}
      <Modal
        isOpen={open === "htmlClass"}
        onRequestClose={close}
        htmlOpenClassName="modal-open-html"
      >
        <h2>HTML Class Modal</h2>
        <p>Khi mở modal này, thẻ <code>&lt;html&gt;</code> sẽ có class
           <b> modal-open-html</b>.</p>
        <button onClick={close}>Đóng</button>
      </Modal>
    </div>
  );
}

export default ModalDemo;
