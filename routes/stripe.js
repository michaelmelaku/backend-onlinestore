const router = require("express").Router();
const stripe = require("stripe")('sk_test_51JsLJnL4ZN6qtyNcLyYDvgBvFTFx6C8wASKt71KTSXZ2jAUVhdOB3nktHHFpK7VbPpPVjCMEfeWo0A2lWF50cHd300DlfdO24g');

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        }, (stripeErr, stripeRes) => {
            if(stripeErr){
               return  res.status(500).json(stripeErr);
            } else {
                return res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;