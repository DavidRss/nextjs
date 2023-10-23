import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";

export default class AuthService {
  constructor(auth, googleProvider) {
    this.auth = auth;
    this.googleProvider = googleProvider;
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email, password) {
    const $this = this;
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword($this.auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  loginWithGoogle() {
    const $this = this;

    return new Promise((resolve, reject) => {
      signInWithPopup($this.auth, this.googleProvider)
        .then((userCredential) => {
          resolve(userCredential);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
