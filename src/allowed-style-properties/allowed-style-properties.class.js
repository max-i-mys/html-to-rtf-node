const StyleProperties = require('./style-properties.module');

class AllowedStyleProperties {
  static isTagAllowed(propertyName) {
    let isAllowed = false;
    for(let i = 0; i < StyleProperties.length; i++) {
      if(StyleProperties[i].propertyName === propertyName)
        return (StyleProperties[i].allowed === true);
    }
    return isAllowed;
  }

  static getAllowedTags() {
    let allowedTags = [];
    StyleProperties.forEach((value) => {
      if(value.allowed)
        allowedTags.push(value);
    });
    return allowedTags;
  }
}
module.exports = AllowedStyleProperties;


