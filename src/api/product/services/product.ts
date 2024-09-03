/**
 * product service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product.product', ({ strapi }) => ({
    async updateCountryByProductName(productName : string, newCountry : string) {
      // Tìm product bằng name
      const product = await strapi.db.query('api::product.product').findOne({
        where: { name: productName },
        populate: { address: true },
      });
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      // Cập nhật trường country trong bảng address
      const updatedAddress = await strapi.db.query('api::address.address').update({
        where: { id: product.address.id },
        data: { country: newCountry },
      });
  
      return updatedAddress;
    }
  }));
  
