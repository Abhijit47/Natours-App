import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51MVQziSGJh9U4XqEFl1X2EhS1kajS1qQOzYCVKmdhhqM15gwZxSRNkbfvS7hIwxlvETtlHf5iJt7dQzNPDASxCgr009jhDZrTc'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    // 2) Create checkout from + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
