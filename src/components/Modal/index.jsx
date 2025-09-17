import { useEffect, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

const Modal = forwardRef(
  (
    {
      isOpen: _isOpen,
      onAfterOpen,
      onAfterClose,
      onRequestClose,
      closeTimeoutMS = 0,
      overlayClassName = "",
      className = "",
      bodyOpenClassName = "",
      htmlOpenClassName = "",
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEsc = true,
      children,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(_isOpen || false);
    const [isVisible, setIsVisible] = useState(_isOpen || false);
    const [isClosing, setIsClosing] = useState(false);
    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }));

    useEffect(() => {
      if (typeof _isOpen === "boolean") {
        setIsOpen(_isOpen);
      }
    }, [_isOpen]);

    useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
        setIsClosing(false);

        if (bodyOpenClassName) document.body.classList.add(bodyOpenClassName);
        if (htmlOpenClassName) document.documentElement.classList.add(htmlOpenClassName);

        const timer = setTimeout(() => {
          onAfterOpen?.();
        }, closeTimeoutMS);
        return () => clearTimeout(timer);
      } else if (isVisible) {
        setIsClosing(true);

        const timer = setTimeout(() => {
          setIsVisible(false);
          setIsClosing(false);

          if (bodyOpenClassName) document.body.classList.remove(bodyOpenClassName);
          if (htmlOpenClassName) document.documentElement.classList.remove(htmlOpenClassName);

          onAfterClose?.();
        }, closeTimeoutMS);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    const handleKeyDown = useCallback(
      (e) => {
        if (e.key === "Escape" && shouldCloseOnEsc) {
          onRequestClose?.();
          setIsOpen(false);
        }
      },
      [onRequestClose, shouldCloseOnEsc]
    );

    useEffect(() => {
      if (isVisible) {
        document.addEventListener("keydown", handleKeyDown);
      }
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isVisible, handleKeyDown]);

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget && shouldCloseOnOverlayClick) {
        onRequestClose?.();
        setIsOpen(false);
      }
    };

    if (!isVisible) return null;

    return ReactDOM.createPortal(
      <div
        className={`${overlayClassName} ${cx("overlay", {
          open: !isClosing,
          closing: isClosing,
        })}`}
        onClick={handleOverlayClick}
      >
        <div
          className={`${className} ${cx("content", {
            open: !isClosing,
            closing: isClosing,
          })}`}
        >
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

export default Modal;
