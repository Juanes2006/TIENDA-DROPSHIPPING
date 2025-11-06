// ModalYoutubeVideo.jsx
import React, { useEffect, useRef, useState } from "react";
import "../modalVideo.css"; // importa los estilos (ver abajo)

const loadYouTubeAPI = () =>
  new Promise((resolve) => {
    if (window.YT && window.YT.Player) return resolve(window.YT);
    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existing) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (prev) prev();
      resolve(window.YT);
    };
  });

const ModalYoutubeVideo = ({
  open,
  onClose,
  youtubeId,
  title = "Video del producto",
  startWithSoundPreferred = true, // intentamos iniciar con sonido
}) => {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Cierre con ESC y bloqueo de scroll del body
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  // Crear / destruir el reproductor YouTube
  useEffect(() => {
    let destroyed = false;

    const createPlayer = async () => {
      if (!open) return;
      await loadYouTubeAPI();
      if (destroyed) return;

      // limpia instancia anterior si existe
      if (playerRef.current) {
        try {
          playerRef.current.stopVideo();
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }

      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          mute: startWithSoundPreferred ? 1 : 1, // empezamos mute para garantizar autoplay
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
        },
        events: {
          onReady: (e) => {
            setPlayerReady(true);
            try {
              e.target.playVideo();

              if (startWithSoundPreferred) {
                // Intento de habilitar sonido (puede ser bloqueado por el navegador)
                e.target.unMute();
                e.target.setVolume(100);
                e.target.playVideo();
                const isMuted = e.target.isMuted?.() ?? true;
                setSoundEnabled(!isMuted);
              } else {
                setSoundEnabled(false);
              }
            } catch {
              setSoundEnabled(false);
            }
          },
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.PLAYING) {
              const isMuted = e.target.isMuted?.() ?? true;
              setSoundEnabled(!isMuted);
            }
          },
        },
      });
    };

    if (open) {
      createPlayer();
    }

    return () => {
      destroyed = true;
      if (playerRef.current) {
        try {
          playerRef.current.stopVideo();
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
      setPlayerReady(false);
      setSoundEnabled(false);
    };
  }, [open, youtubeId, startWithSoundPreferred]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  const enableSound = () => {
    const p = playerRef.current;
    if (!p) return;
    try {
      p.unMute();
      p.setVolume(100);
      p.playVideo(); // clic del usuario: ya permite sonido
      setSoundEnabled(true);
    } catch {}
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="modal-overlay"
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      <div className="modal">
        {/* Botón cerrar */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="modal__close"
          aria-label="Cerrar"
          title="Cerrar"
        >
          ✕
        </button>

        {/* Contenedor del video 16:9 */}
        <div className="aspect-video">
          <div ref={playerContainerRef} className="aspect-video__inner" />

          {/* CTA para activar sonido si el autoplay con sonido fue bloqueado */}
          {playerReady && !soundEnabled && (
            <div className="sound-cta">
              <button onClick={enableSound} className="btn btn--primary">
                🔊 Reproducir con sonido
              </button>
            </div>
          )}

          {/* Toggle pequeño de sonido */}
          {playerReady && (
            <button
              onClick={() => {
                const p = playerRef.current;
                if (!p) return;
                if (p.isMuted()) {
                  p.unMute();
                  p.setVolume(100);
                  setSoundEnabled(true);
                } else {
                  p.mute();
                  setSoundEnabled(false);
                }
              }}
              className="sound-toggle"
            >
              {soundEnabled ? "🔈 Silenciar" : "🔊 Sonido"}
            </button>
          )}
        </div>

        {/* Pie opcional */}
        <div className="modal__footer">
          <div>
            <h3 className="modal__title">{title}</h3>
            <p className="modal__subtitle">Conoce lo esencial en 30 segundos.</p>
          </div>
          <button onClick={onClose} className="btn btn--ghost">
            Empezar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalYoutubeVideo;