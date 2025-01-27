import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
    return (
        <div className="container">
            <form className="signup-form">
                <h2 className="welcome-text">Welcome to our community</h2>
                <h1 className="signup-title">Sign Up</h1>
                <div className="input-group">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="email" id="email" name="email" className="input-field" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input type="password" id="password" name="password" className="input-field" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="input-field" required />
                </div>
                <div className="button-container">
                    <button type="submit" className="signup-button">
                        Sign Up <AiOutlineSwapRight size={30} />
                    </button>
                </div>
                <div className="signin-link">
                    Already have an account? <Link to="/signin" className="signin-text"> Sign In</Link>
                </div>
            </form>
            <div className="image-container">
                <img src="./SignUp2.jpeg" width={500} height={500} className="signup-image" alt="Sign Up" />
            </div>
        </div>
    );
}
