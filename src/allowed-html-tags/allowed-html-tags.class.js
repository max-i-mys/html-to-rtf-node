const HtmlTags = require('./html-tags.module');

class AllowedHtmlTags {
  static getRtfReferenceTag(tagName) {
    let allowedTag;

    tagName = tagName.toLowerCase();
    allowedTag = this.getAllowedTag(tagName);

    if(allowedTag) {
      return tagName === allowedTag.opening ? allowedTag.openingRtf : allowedTag.closingRtf;
    }
    return undefined
  }

  static isFamiliarTag(tag) {
    let isFamiliarTag = this.getAllowedTag(tag);
    return Boolean(isFamiliarTag);
  }

  static getAllowedTag(tag) {
    tag = tag.toLowerCase();
    return HtmlTags.find(familiarTag => familiarTag.opening === tag || familiarTag.closing === tag);
  }

}
module.exports = AllowedHtmlTags;
