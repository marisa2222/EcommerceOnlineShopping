/**
 * Title: Remove image
 * Description: Deletion perform from cloudinary cloud for image file
 * Author: Maryam-Svitlana
 * Date: 11/05/2023
 */

/* external import */
const cloudinary = require("cloudinary");

/* remove image from cloudinary */
async function remove(public_id) {
  await cloudinary.uploader.destroy(public_id);
}

module.exports = remove;
