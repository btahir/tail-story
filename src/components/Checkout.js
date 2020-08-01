const stripePromise = loadStripe("pk_test_8f6o9Uhjiz4mxCcNRJkcBZeL")

export const redirectToCheckout = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
        items: [{ sku: "sku_DjQJN2HJ1kkvI3", quantity: 1 }],
        successUrl: `http://localhost:8000/`,
        cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
        console.warn("Error:", error)
    }
}