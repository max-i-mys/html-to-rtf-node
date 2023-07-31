const FONT_SIZE_RTF_REFERENCE = '\\fs';
const ONE_PIXEL_IN_POINT = 1.48;

class FontSize {
  static getRtfFontSizeReference(value) {
    if(value.includes('px'))
      return this.getFontSizeReferenceInPx(value);
    if(value.includes('pt')) {
      return  this.getFontSizeReferenceInPt(value)
    }
    return undefined;
  }

  static getFontSizeReferenceInPx(valueInPixel) {
    return FONT_SIZE_RTF_REFERENCE + Math.ceil(parseFloat(valueInPixel) * ONE_PIXEL_IN_POINT);

  }
  static getFontSizeReferenceInPt(valueInPoints) {
    return FONT_SIZE_RTF_REFERENCE + Math.trunc(parseFloat(valueInPoints) * 2);
  }
}
module.exports = FontSize;
