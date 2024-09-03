/**
 * product controller
 */

import { factories } from '@strapi/strapi'
// export default factories.createCoreController('api::product.product',  )

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
    async update(ctx) {
      try {
        const {  data: {newCountry,address} } = ctx.request.body;
        const {id} = ctx.params
  
        // const updatedAddress = await strapi.service('api::product.product').updateCountryByProductName(productName, newCountry);
        const entry = await strapi.entityService.update('api::product.product', id, {
            data:  ctx.request.body,
          });

         strapi.entityService.update('api::address.address', address, {
            data:  {country: newCountry},
          });
  // entry laf noi dung tra ve
  
        return ctx.send({ message: 'Country updated successfully', entry });
      } catch (error) {
        ctx.throw(500, error);
      }
    }
  }));
