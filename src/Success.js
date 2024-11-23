export default function Success({ isVisible, ErrorMessage = null }) {
  if (isVisible) {
    return (
      <form className="Success">
        <div
          style={{
            background: "white",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "0px",
            borderRadius: "7px",
          }}
        >
          <h2 style={{ color: ErrorMessage ? "red" : "green" }}>
            {ErrorMessage == null
              ? "uploade information successfully"
              : ErrorMessage}
          </h2>
        </div>
      </form>
    );
  } else {
    return <></>;
  }
}
