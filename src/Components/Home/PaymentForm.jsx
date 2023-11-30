/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import './form.css'
import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../../hooks/useAuth'
import { PaymentToken, SaveInfo, UpdateInfo } from '../../API/PaymentAPI'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'


const PaymentForm = ({ data={}, closeModal }) => {
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  // Create Payment Intent
  useEffect(()=>{
    PaymentToken(data.price).then(res=>{
        console.log(res.clientSecret);
        setClientSecret(res.clientSecret)
    })
  },[data])

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
      // save payment information to the server
      // Update room status in db
      const participator = parseInt(data.participator) + 1;
      const participatorStr = participator.toString()
      const info = {
          mainId:data._id,
          name:data.name,
          email:data.email,
          prizemoney:data.prizemoney,
          participator:participatorStr,
          participentEmail: user?.email,
          participentName: user?.displayName,
          transactionId: paymentIntent.id,
          date: new Date(),
        }
        console.log(info);
        SaveInfo(info).then(res=>{
            console.log(res);
            if(res.insertedId){
                UpdateInfo(data._id,participatorStr).then(res=>{
                    console.log(res);
                    if(res.modifiedCount>0){
                        setProcessing(false)
                        toast.success("Successfully Done");
                        navigate('/dashboard/my-participate')
                    }
                })
            }
        })

      setProcessing(false)
    }
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
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
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              'Pay'
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default PaymentForm