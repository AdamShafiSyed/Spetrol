// import {Dimensions} from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const scaling = {windowWidth, windowHeight};

// const screenSizes = [
//   //keep it on the same order
//   {size: 0, label: 's'},
//   {size: 320, label: 'm'},
//   {size: 400, label: 'l'},
//   {size: 480, label: 'xl'},
// ];

// screenSizes.forEach(variant => {
//   if (windowWidth > variant.size) {
//     scaling.screenSize = variant.label;
//   }
// });

// scaling.setValue = function (size, value, defaultValue) {
//   if (scaling.screenSize === size) {
//     return value;
//   } else {
//     return defaultValue;
//   }
// };

// // {m: 320}
// scaling.setValues = function (values) {
//   let result = null;
//   Object.keys(values).forEach(size => {
//     if (size === scaling.screenSize) {
//       result = values[size];
//     }
//   });
//   // if the screen is l and m value is available
//   // if the screen is s and m,l value is available
//   if (!result) {
//     for (var i = 0; i < screenSizes.length; i++) {
//       let variant = screenSizes[i];
//       if (values[variant.label]) {
//         result = values[variant.label];
//         variant = screenSizes[i + 1];
//         if (variant && variant.size > windowWidth) {
//           break;
//         }
//       }
//     }
//   }
//   return result;
// };

// scaling.scaleFont = size => {
//   if (scaling.screenSize === 's') {
//     return size * 0.7;
//   }
//   if (scaling.screenSize === 'm') {
//     return size * 0.9;
//   }
//   return size;
// };

// scaling.scaleSize = size => {
//   if (scaling.screenSize === 's') {
//     return size * 0.7;
//   }
//   if (scaling.screenSize === 'm') {
//     return size * 0.8;
//   }
//   return size;
// };

// export default scaling;
