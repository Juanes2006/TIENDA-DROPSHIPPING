import React, { useEffect, useRef } from "react";
import "../modalVideo.css";

export default function ModalVideo({ open, onClose, videoSrc, title = "Video del producto" }) {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="modal-overlay"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose}>✕</button>

        <div className="aspect-video">
          <video
  ref={videoRef}
  src={videoSrc}
  controls
  autoPlay
  playsInline
  className="aspect-video__inner"
/>

        </div>

        <div className="modal__footer">
          <h3 className="modal__title">{title}</h3>
        </div>
      </div>
    </div>
  );
}
