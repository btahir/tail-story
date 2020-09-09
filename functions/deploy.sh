# careful not to save and publish live keys
export STRIPE_SIGNING_UPD_SUB="whsec_CTFcgTLw28qDplSZ2NITgifnpSV2Jept"
export STRIPE_TOKEN="sk_test_51HPLspGcmYzIoqR7VzUXJWAzBP6AVeJfvMG2cyU6A5wLhqMOwKlfuSKUzXc3fas3OhGyvW31lPUqWtMgcdkSxqcg00otqSzc8I"
export STRIPE_DEFAULT_PRICE_PLAN="price_1HPLwxGcmYzIoqR7ZvI7V0Jo"
export STRIPE_RETURN_URL="https://project-job.netlify.app"

firebase functions:config:set \
    stripe.upd_sub_signing=$STRIPE_SIGNING_UPD_SUB \
    stripe.token=$STRIPE_TOKEN \
    stripe.default_plan=$STRIPE_DEFAULT_PRICE_PLAN \
    stripe.return_url=$STRIPE_RETURN_URL
firebase deploy --only functions
