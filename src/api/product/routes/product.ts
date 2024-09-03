/**
 * product router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::product.product');
//  module.exports = {
//       routes: [
//         {
//           method: "PUT",
//           path: "/products",
//           handler: "product.update",
//           config: {
//             policies: [],
//             middlewares: [],
//           },
//         },

//       ],
//     };