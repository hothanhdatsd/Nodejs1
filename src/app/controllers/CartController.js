/** @format */

const res = require('express/lib/response');
const Cart = require('../Model/Cart');

const { mongoseToObject, mutipleMongooseToObject } = require('../../util/mongoese');

class CartController {
	show(req, res, next) {
		Cart.find({ userId: req.session?.user?._id })
			.populate('productId')
			.then((cart) => {
				res.render('cart/show', { cart: mutipleMongooseToObject(cart) });
			})
			.catch(next);
	}
	async create(req, res) {
		const productId = req.params?.id;

		if (!productId) {
			res.redirect('/');
			return;
		}

		const userId = req.session?.user?._id;

		try {
			let checkExist = await Cart.findOne({ productId: productId, userId: userId });

			if (checkExist) {
				await Cart.findByIdAndUpdate(checkExist._id, {
					quantity: checkExist.quantity + 1,
                    
				});
			} else {
				const cart = new Cart();
				cart.productId = productId;
				cart.quantity = 1;
				cart.userId = userId;
				await cart.save();
			}

			res.redirect('/cart');
		} catch (e) {
			console.error(e);

			res.redirect('back');
		}
	}
	async delete(req, res) {
		const cartId = req.params?.id;

		if (!cartId) {
			res.redirect('/');
			return;
		}

		const userId = req.session?.user?._id;

		try {
			let checkExist = await Cart.findOneAndDelete({ _id: cartId, userId: userId });

			res.redirect('/cart');
		} catch (e) {
			console.error(e);

			res.redirect('back');
		}
	}
}

module.exports = new CartController();
