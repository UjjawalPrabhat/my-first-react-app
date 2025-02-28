import "./AuthenticationStyles.css";

function Authentication() {
  return (
    <>
      <form className="authentication-form">
        <div>
          <div>
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Enter Your password</label>
            <input type="password" id="password" />
          </div>
          <button>Enter</button>
        </div>
      </form>
    </>
  );
}

export default Authentication;
