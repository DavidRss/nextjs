import { httpsCallable } from "firebase/functions";

export default class CheckoutService {
  constructor(functions) {
    this.functions = functions;
  }

  async createCheckoutWithData(checkout) {
    try {
      const createCheckout = httpsCallable(this.functions, "createCheckout");
      const res = await createCheckout(checkout);
      if (res.data.success) {
        return res.data.checkout;
      } else {
        console.log("===== createCheckoutWithData error: ", res.data.message);
      }
    } catch (err) {
      console.log("===== createCheckoutWithData error: ", err);
    }

    return null;
  }
}
