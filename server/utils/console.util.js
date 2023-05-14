/**
 * Title: Colored statements
 * Description: Display colored statement in colors
 * Author: Maryam-Svitlana
 * Date: 10/03/2023
 */

/* external import */
const colors = require("colors");

/* set colors as theme */
colors.setTheme({
  success: "cyan",
  error: "red",
});

exports.successMessage = (message) => {
  console.log(`[Success] - ${message}`.success);
};

exports.errorMessage = (message) => {
  console.log(`[Error] - ${message}`.error.bold.italic);
};
