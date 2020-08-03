# careful not to save and publish live keys
export STRIPE_SIGNING_UPD_SUB="whsec_VsCgys65PrFiMcmSbuAHOq813vgqRhv5"
export STRIPE_TOKEN="sk_test_6EAXSQOCVAA2o0DPbm6wvHHD"
export STRIPE_DEFAULT_PRICE_PLAN="price_1HBRCPJpKTxPdmItwPCtUFO3"
export STRIPE_RETURN_URL="https://tail-story.netlify.app"

firebase functions:config:set \
    stripe.upd_sub_signing=$STRIPE_SIGNING_UPD_SUB \
    stripe.token=$STRIPE_TOKEN \
    stripe.default_plan=$STRIPE_DEFAULT_PRICE_PLAN \
    stripe.return_url=$STRIPE_RETURN_URL
firebase deploy --only functions
