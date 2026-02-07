import { useState } from "react";
import setmatcha from "../assets/setmatcha.png";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      if (isSignUp) {
        // Sign up
        const response = await api.post("/auth/register", { username, password });
        if (response.success) {
          localStorage.setItem("user", JSON.stringify(response.user));
          navigate("/profile");
        }
      } else {
        // Login
        const response = await api.post("/auth/login", { username, password });
        if (response.success) {
          localStorage.setItem("user", JSON.stringify(response.user));
          navigate("/profile");
        }
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="h-screen flex items-center bg-cover bg-[#B5C196] pt-14 px-34">
        <div>
          <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
            <div className="w-[340px] md:w-[380px]">
              <img
                src={setmatcha}
                alt="matcha tools"
                className="h-auto w-full object-contain drop-shadow"
              />
            </div>
            <div className="flex items-center">
              <form
                className="w-full max-w-[520px] ml-auto bg-transparent"
                onSubmit={handleSubmit}
              >
                <h1 className="font-instrument text-[48px] md:text-[52px] italic text-[#61371E] [text-shadow:0_3px_0_rgba(0,0,0,.35)]">
                  {isSignUp ? "create account" : "welcome matcha lover"}
                </h1>

                {error && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}

                <label className="font-instrument mt-10 block text-[20px] text-[#61371E]">
                  Username
                  <input
                    name="username"
                    type="text"
                    required
                    className="mt-2 w-full bg-transparent outline-none border-0 border-b border-[#61371E]/60 focus:border-[#61371E] py-2 text-[#61371E]"
                    placeholder=""
                  />
                </label>
                <label className="font-instrument mt-6 block text-[20px] text-[#61371E]">
                  Password
                  <input
                    name="password"
                    type="password"
                    required
                    className="mt-2 w-full bg-transparent outline-none border-0 border-b border-[#61371E]/60 focus:border-[#61371E] py-2 text-[#61371E]"
                    placeholder=""
                  />
                </label>
                <div className="mt-8 space-y-4 flex flex-col items-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="font-instrument w-[220px] rounded-full bg-[#495632] px-6 py-3 text-white tracking-wide hover:brightness-110 active:scale-[.99] transition disabled:opacity-50"
                  >
                    {isLoading ? "Loading..." : isSignUp ? "SIGN UP" : "LOG IN"}
                  </button>
                  <p className="font-instrument text-center text-[#61371E]">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      setError("");
                    }}
                    className="font-instrument w-[220px] rounded-full bg-[#495632] px-6 py-3 text-white tracking-wide hover:brightness-110 active:scale-[.99] transition"
                  >
                    {isSignUp ? "LOG IN" : "SIGN UP"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
