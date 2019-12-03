export const processImageKey = (content) => {
  let keys = Object.keys(content);
  let imageUrl = '';
  keys.forEach((key, i) => {
    let featureRegEx = /^featureImage/;
    let featuredRegEx = /^featuredImage/;
    if (featureRegEx.test(key) || featuredRegEx.test(key)) {
      imageUrl = content[key];
    }
  });
  return imageUrl;
}


export const truncateDesc = (desc) => {
  if (desc.length > 100) {
    return desc.substring(0, 100) + '....';
  }
  return desc;
}