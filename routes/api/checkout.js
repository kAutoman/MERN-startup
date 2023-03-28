const stripe = require('stripe')('sk_test_51MoOFsKuZdcMdc5tI0sASY2shmMzxe5BI9qRYPbnNsB6fJZNtytxlnXTwrdIFI4Cvou134uCzV44YAshh5Ln4l1I00M9mpEAXn');
const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const Transactions = require('../../models/Transactions');
const Profile = require('../../models/Profile');
const moment = require('moment');

const API_URL = 'http://localhost:3000'

router.post('/create-checkout-session', async (req, res) => {
    if(!req.body.price_id || !req.body.token || !req.body.membership_type) {
        return res.status(400).json('no price_id');
    }
    const membership_type = req.body.membership_type;
    jwt.verify(req.body.token, config.get('jwtSecret'), async (error, decoded) => {
        if (error) {
            return res.status(401).json({ msg: 'Token is not valid' });
        } else {
            const user = decoded.user;
            
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: req.body.price_id,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                allow_promotion_codes: true,
                invoice_creation: {enabled: true},
                success_url: `${API_URL}/channels`,
                cancel_url: `${API_URL}/membership`,
            });
            
            //save transaction log
            let transactionModel = new Transactions({
                user : user.id,
                price_id: req.body.price_id,
                amount: session.amount_subtotal,
            });
      
            await transactionModel.save();

            //update membership column on profile table
            let profile = await Profile.findOne({user: user.id});
            profile.membership = {
                type: membership_type,
                expire: moment().add(1,'month')
            }
            await profile.save();

            res.redirect(303, session.url);
        }
    });
    
});

module.exports = router