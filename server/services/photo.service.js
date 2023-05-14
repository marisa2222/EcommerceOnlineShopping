/**
 * Title: Servicing single photo
 * Description: Service photo at upload and update scheme
 * Author: Maryam-Svitlana
 * Date: 11/05/2023
 */

/* internal import */
const remove = require("../utils/remove.util");

/* remove image from cloudinary */
async function removePhoto(public_id) {
  await remove(public_id);
}

/* export cloudinary remover */
module.exports = removePhoto;
