import React, { useEffect, useState } from 'react'
import './PlansScreen.css'
import db from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { loadStripe } from '@stripe/stripe-js'



function PlanScreen() {
  const [products, setProducts] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then(querySnapshot => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection
            ("prices").get();
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            }
          })
        })
        setProducts(products)
      })
  }, [])

  console.log(products)

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        //show to the user the error
        alert(`An error occurred: ${error.message}`)
      }

      if (sessionId) {
        //session valid, let's redirect to checkout
        //init stripe
        const stripe = await loadStripe(
          'pk_test_51MWgmRDEEPNki5jdQup2N4loSLpFPrvyQu3eBj4pJemESXjGgbgZh1Ms4GLaaPzf48T3MZT5626Udl3mEWkgSGjR00EJPZpZ6R'
        )
        stripe.redirectToCheckout({ sessionId })
      }
    })
  }

  return (
    <div className='plansScreen'>
      {Object.entries(products).map(([productId, productData]) => {
        // checking if subscription is active
        return (
          <div className='plansScreen__plan'>
            <div className='plansScreen__info'>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>

          </div>
        )
      })}
    </div>
  )
}

export default PlanScreen