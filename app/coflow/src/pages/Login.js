import React, { useEffect, useState } from "react";
import googleIcon from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import Terms from "../components/term&policy/Terms";
import Policy from "../components/term&policy/Policy";
import { useApp } from "../services/app.context";
import { authService, userService } from "../services/firebase.service";
import { isEmailValid, isPasswordValid } from "../utils/form-validation";

import {
  generateReferralCode,
  getCurrentTimestamp,
  getDailyPoints,
} from "../utils/utils";
import { INIT_USER, Notify, Path } from "../constants/constants";
import { Errors } from "../constants/FirebaseErrorMessages";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../components/spinner/Spinner";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const { currentUser } = useApp();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

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

  const handleSignInGoogle = async () => {
    console.log("===== handleSignInGoogle =====");
    setLoading(true);
    try {
      const userCredential = await authService.loginWithGoogle();

      const { uid, email, displayName } = userCredential.user;

      const docSnap = await userService.getUser(uid);
      if (docSnap.exists()) {
        const userInfo = docSnap.data();
        userInfo.points = userInfo.points + getDailyPoints(userInfo.visited);
        userInfo.visited = getCurrentTimestamp();

        await userService.updateUser(uid, userInfo);

        login(userInfo);
      } else {
        const profile = userCredential._tokenResponse;
        const firstName = profile.firstName || profile.givenName;
        const lastName = profile.lastName || profile.familyName;
        const fullName = displayName || `${firstName} ${lastName}`;
        const photoUrl = profile.photoUrl;

        const userInfo = INIT_USER;
        userInfo.id = uid;
        userInfo.email = email;
        userInfo.username = fullName;
        userInfo.firstName = firstName;
        userInfo.lastName = lastName;
        userInfo.avatar = photoUrl;
        userInfo.referralCode = generateReferralCode();
        userInfo.points = userInfo.points + getDailyPoints(userInfo.visited);
        userInfo.visited = getCurrentTimestamp();

        await userService.saveUser(uid, userInfo);

        login(userInfo);
      }

      setLoading(false);

      navigate(`/${Path.HOME}`);
    } catch (err) {
      console.log("===== authService.register error: ", err);
      console.log("===== authService.register error: ", err.code);
      console.log("===== authService.register error: ", err.message);
      toast.error(Errors[err.code], Notify.Option);
    }
  };

  const handleSignInEmailAndPassword = () => {
    console.log("===== handleSignInEmailAndPassword =====");
    console.log("===== email: ", email);
    console.log("===== password: ", password);

    let error = false;
    if (!isEmailValid(email)) {
      setErrorEmail(true);
      error = true;
    }

    if (!isPasswordValid(password)) {
      setErrorPassword(true);
      error = true;
    }

    if (error) {
      return;
    }

    setErrorEmail(false);
    setErrorPassword(false);

    setLoading(true);

    authService
      .login(email, password)
      .then(async (result) => {
        console.log("===== login result: ", result);
        if (result.user) {
          const { uid } = result.user;

          const docSnap = await userService.getUser(uid);
          if (docSnap.exists()) {
            console.log("===== user: ", docSnap.data());

            const user = docSnap.data();
            user.points = user.points + getDailyPoints(user.visited);
            user.visited = getCurrentTimestamp();

            await userService.updateUser(user.id, user);

            login(user);

            navigate(`/${Path.HOME}`);
          } else {
            toast.error("The user doesn't exist.", Notify.Option);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("===== login error code: ", err.code);
        console.log("===== login error message: ", err.message);
        toast.error(Errors[err.code], Notify.Option);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("===== loaded signin page: ", currentUser);
  }, [currentUser]);

  return (
    <div className="w-full flex flex-col pb-32">
      <section className="flex flex-col items-center lg:items-start mt-12 lg:mt-9 mb-7 lg:mb-0 lg:px-9 w-full">
        <Link to="/">
          <h1 className="text-white text-2xl font-semibold">Coflow</h1>
        </Link>
      </section>
      <section className="w-full flex justify-center px-5 lg:px-0">
        <div
          className="rounded-md shadow-md py-8 lg:py-14 px-10 w-full max-w-3xl flex flex-col items-center"
          style={{ background: "#333" }}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-white text-center w-full md:px-20">
            Connectes toi pour poursuivre ton achat
          </h1>

          <button
            className="btn bg-transparent border border-gray-200 flex gap-3 mt-4 mb-5 lg:mt-6 lg:mb-7 text-white hover:bg-white hover:scale-105 transition-all hover:border-gray-300"
            onClick={handleSignInGoogle}
          >
            <img src={googleIcon} alt="signUp by google" />
            Se connecter via Google
          </button>
          <h2 className="text-base font-semibold text-white">
            Ou bien connectes-toi avec ton adresse mail
          </h2>
          <div className="w-full mt-8 flex flex-col gap-10">
            {/* <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-base text-left font-bold text-white"
              >
                Nom d’utilisateur
              </label>
              <div className="mt-2">
                <input
                  style={{ background: "rgba(249, 250, 251, 0.10)" }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-xl py-4 pl-2 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-base text-left font-bold text-white"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  style={{ background: "rgba(249, 250, 251, 0.10)" }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChangeEmail}
                  className={`block w-full rounded-xl py-4 pl-2 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    errorEmail ? "border border-red-800" : ""
                  }`}
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-base text-left font-bold text-white"
              >
                Mot de passe
              </label>
              <div className="mt-2">
                <input
                  style={{ background: "rgba(249, 250, 251, 0.10)" }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  value={password}
                  onChange={handleChangePassword}
                  className={`rounded-xl block w-full py-4 pl-2 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    errorPassword ? "border border-red-800" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="text-white text-base font-semibold flex justify-center w-full mt-6 lg:mt-8">
            <h3 className="px-0 lg:px-28 text-center">
              En créant ton compte tu acceptes les
              <br />{" "}
              <span
                className="text-main hover:cursor-pointer"
                onClick={() => document.getElementById("termes").showModal()}
              >
                termes et conditions
              </span>
              , et notre{" "}
              <span
                className="text-main hover:cursor-pointer"
                onClick={() => document.getElementById("politique").showModal()}
              >
                politique de confidentialité
              </span>
            </h3>
          </div>
          <button
            type="buttom"
            className="text-white py-3 px-8 rounded-md mt-6 lg:mt-8 mb-5 text-lg font-semibold w-full transition-all hover:-translate-y-1"
            style={{
              background: "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
              boxShadow: " 0px 4px 0px 0px #196700",
            }}
            onClick={handleSignInEmailAndPassword}
          >
            Se connecter
          </button>
          {/* </Link> */}
          <div className="w-full justify-center flex flex-col sm:flex-row gap-2 sm:gap-0 items-center">
            <span className="text-base text-white font-bold">
              Pas encore inscrit ?{" "}
              <Link to="/signup">
                <span className="text-main">Crée ton compte</span>
              </Link>
            </span>
          </div>
        </div>
      </section>

      <Terms />
      <Policy />

      {loading && <Spinner />}
      <ToastContainer />
    </div>
  );
}

export default Login;
