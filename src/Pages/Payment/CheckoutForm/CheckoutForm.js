import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, customerName, email, totalPrice } = order;

    useEffect(() => {
        const url = 'http://localhost:5000/create-payment-intent';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setLoading(true);

        // Stripe.js API card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setLoading(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess("Congratulation! Your payment is success.");

            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    console.log(data)
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='primary-button-lg mt-4 mb-2' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                cardError && <p style={{ color: "#f25c05" }}>{cardError}</p>
            }
            {
                success && <>
                    <p style={{ color: "#00A83C" }}>{success}</p>
                    <p className='fw-bold text-black'>Your Transaction ID: <span className='fw-normal'>{transactionId}</span></p>
                </>
            }

        </>
    );
};

export default CheckoutForm;