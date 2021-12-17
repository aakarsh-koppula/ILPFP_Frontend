export interface Order{
    _id?: string,
    user?: string,
    orderPlaceOn?: string,
    isDelivered: Boolean,
    orderDeliveredOn?: string,
    cart?: any[]
}
