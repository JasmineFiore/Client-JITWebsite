const LoadingOverlay = ({ overlayOnly = false }) => {
  return (
    <div
      style={{
        position: overlayOnly ? "absolute" : "fixed",
        inset: 0,
        backgroundColor: overlayOnly
          ? "rgba(255, 255, 255, 0.06)"
          : "rgba(0, 0, 0, 0.3)",
        zIndex: 1050,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
