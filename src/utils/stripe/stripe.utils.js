import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
// );

export const stripePromise = loadStripe(
  "pk_test_51KtFaiSILjMSaj4xRh3AMsdQDup1ppFatxX0nLhBctFqJbtwEu0CmSfmAsJFlTAWPEC54dbKskmjfKoTIkkTeXoU000VcKt8uf"
);
