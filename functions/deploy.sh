# careful not to save and publish live keys
export STRIPE_SIGNING_ADD_SUB="whsec_mFcdvSGb1ohh2vyHwnTCsE24iUpT5Vib"
export STRIPE_TOKEN="sk_test_6EAXSQOCVAA2o0DPbm6wvHHD"
export STRIPE_DEFAULT_PRICE_PLAN="price_1HBRCPJpKTxPdmItwPCtUFO3"

firebase functions:config:set \
    stripe.add_sub_signing=$STRIPE_SIGNING_ADD_SUB \
    stripe.token=$STRIPE_TOKEN \
    stripe.default_plan=$STRIPE_DEFAULT_PRICE_PLAN
firebase deploy --only functions
