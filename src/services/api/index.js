import foods from './foods'
import cart from './cart'
import order from './order'

export default {
    ...foods,
    ...cart,
    ...order
}