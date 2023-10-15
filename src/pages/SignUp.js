import React, { useState } from "react";
import googleIcon from "../assets/google.png";
import { Link } from "react-router-dom";
import Terms from "../components/term&policy/Terms";
import Policy from "../components/term&policy/Policy";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/FirebaseService";
import { isEmailValid, isPasswordValid } from "../utils/FormValidation";

function SignUp() {
  const { login } = useAuth();
  const [username, changeUsername] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleChangeUsername = (e) => {
    changeUsername(e.target.value);
    if (e.target.value !== "") {
      setErrorUsername(false);
    }
  };

  const handleChangeEmail = (e) => {
    changeEmail(e.target.value);
    if (e.target.value !== "") {
      setErrorEmail(false);
    }
  };

  const handleChangePassword = (e) => {
    changePassword(e.target.value);
    if (e.target.value !== "") {
      setErrorPassword(false);
    }
  };

  const handleSignupGoogle = () => {
    console.log("===== handleSignupGoogle =====");
    authService
      .loginWithGoogle()
      .then((result) => {
        if (result.user) {
          const { uid } = result.user;
          const { email } = result.user;
          const { displayName } = result.user;
          const profile = result._tokenResponse;
          const firstName = profile.firstName || profile.givenName;
          const lastName = profile.lastName || profile.familyName;
          const fullName = displayName || `${firstName} ${lastName}`;
          const photoUrl = profile.photoUrl;

          const user = {
            uid,
            email,
            username: fullName,
            firstName,
            lastName,
            avatar: photoUrl,
          };

          login(user);
        }
        console.log("===== loginWithGoogle result: ", result);
      })
      .catch((err) => {
        console.log("===== loginWithGoogle error: ", err);
      });
  };

  const handleSignupEmailAndPassword = () => {
    console.log("===== handleSignupEmailAndPassword =====");
    console.log("===== email: ", email);
    console.log("===== password: ", password);

    let error = false;
    if (username === "") {
      setErrorUsername(true);
      error = true;
    }

    if (email === "" || !isEmailValid(email)) {
      setErrorEmail(true);
      error = true;
    }

    if (!isPasswordValid(password)) {
      setErrorPassword(true);
      error = true;
    }

    console.log("===== error: ", error);

    if (error) {
      return;
    }

    setErrorUsername(false);
    setErrorEmail(false);
    setErrorPassword(false);

    console.log(`${username}, ${email}, ${password}`);
    authService
      .register(email, password)
      .then((result) => {
        console.log("===== register result: ", result);
      })
      .catch((err) => {
        console.log("===== register error: ", err);
      });
  };

  return (
    <div className="bg-white w-full flex flex-col pb-14 lg:pb-20">
      <section className="flex flex-col items-center lg:items-start mt-12 lg:mt-9 mb-7 lg:mb-0 lg:px-9 w-full">
        <h1 className="text-gray-900 text-2xl font-semibold">Coflow</h1>
      </section>
      <section className="w-full flex justify-center px-5 lg:px-0">
        <div className="border border-gray-200 rounded-md shadow-md py-8 lg:py-14 px-10 w-full max-w-3xl flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 w-full max-w-md">
            Creez votre compte pour poursuivre votre participation
          </h1>
          <button
            className="btn bg-white border border-gray-200 flex gap-3 mt-4 mb-5 lg:mt-6 lg:mb-7 text-gray-900 hover:bg-white hover:scale-105 transition-all hover:border-gray-300"
            onClick={handleSignupGoogle}
          >
            <img src={googleIcon} alt="signUp by google" />
            S’inscrire via google
          </button>
          <h2 className="text-base font-semibold text-gray-900">
            Ou bien inscrivez-vous avec votre adresse email
          </h2>
          <div className="w-full mt-8 flex flex-col gap-10">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-base text-left font-bold text-gray-900"
              >
                Nom d’utilisateur
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={username}
                  onChange={handleChangeUsername}
                  autoComplete="username"
                  className={`bg-gray-200 block w-full rounded-md border py-4 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    errorUsername ? "border-red-800" : "border-gray-200"
                  }`}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-base text-left font-bold text-gray-900"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  autoComplete="email"
                  className={`bg-gray-200 block w-full rounded-md border py-4 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    errorEmail ? "border-red-800" : "border-gray-200"
                  }`}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-base text-left font-bold text-gray-900"
              >
                Mot de passe
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  autoComplete="password"
                  className={`bg-gray-200 block w-full rounded-md border py-4 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    errorPassword ? "border-red-800" : "border-gray-200"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="text-gray-900 text-base font-semibold flex justify-center w-full mt-6 lg:mt-8">
            <h3 className="px-0 lg:px-28">
              En creant votre compte vous acceptez les{" "}
              <span
                className="text-primary hover:cursor-pointer"
                onClick={() => document.getElementById("termes").showModal()}
              >
                termes et conditions
              </span>
              , et notre{" "}
              <span
                className="text-primary hover:cursor-pointer"
                onClick={() => document.getElementById("politique").showModal()}
              >
                politique deconfidentialite
              </span>
            </h3>
          </div>
          {/* <Link to="/presentation" className="w-full"> */}
          <button
            className="btn btn-primary text-white mt-6 lg:mt-8 mb-5 w-full hover:text-white hover:bg-primary hover:-translate-y-1 transition-all"
            onClick={handleSignupEmailAndPassword}
          >
            S’inscrire
          </button>
          {/* </Link> */}
          <span className="text-base text-gray-900 font-bold">
            Deja inscrit?{" "}
            <Link to="/">
              <span className="text-primary">Connecte toi</span>
            </Link>
          </span>
        </div>
      </section>
      <Terms />
      <Policy />
    </div>
  );
}

export default SignUp;
