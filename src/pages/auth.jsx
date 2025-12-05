import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Login successful!");
    } else {
      alert("Signup successful! Now you can login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">
          {isLogin ? "Login to your account" : "Create a new account"}
        </h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
          )}

          <div className="auth-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          {!isLogin && (
            <div className="auth-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                required
              />
            </div>
          )}

          <button className="auth-btn" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="auth-toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="auth-toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
