const cheerio = require('cheerio');
const $ = cheerio.load('');
const Color= require('../color/color.class');
const Alignment= require('../alignment/alignment.class');
const FontSize= require('../font-size/font-size.class');
const AllowedStyleProperties= require('../allowed-style-properties/allowed-style-properties.class');

class Style {
  static getRtfReferenceColor(value) {
    return Color.getRtfReferenceColor(value);
  }

  static getRtfColorTable() {
    return Color.getRtfColorTable();
  }

  static getRtfAlignmentReference(value) {
    return Alignment.getRtfAlignmentReference(value);
  }

  static getRtfFontSizeReference(value) {
    return FontSize.getRtfFontSizeReference(value);
  }

  static getRtfReferencesInStyleProperty(styleValue) {
    if(styleValue === '')
      return undefined;

    let fictitiousTagWithTruthStyle = "<span style='"+styleValue+"'></span>";
    let listOfRtfReferences = '';

    AllowedStyleProperties.getAllowedTags().forEach(value => {
      if($(fictitiousTagWithTruthStyle).css(value.propertyName) !== undefined) {
        switch(value.propertyName) {
          case 'color': listOfRtfReferences += this.getRtfReferenceColor($(fictitiousTagWithTruthStyle).css(value.propertyName)); break;
          case 'font-size': listOfRtfReferences += this.getRtfFontSizeReference($(fictitiousTagWithTruthStyle).css(value.propertyName)); break;
          case 'text-align': listOfRtfReferences += this.getRtfAlignmentReference($(fictitiousTagWithTruthStyle).css(value.propertyName)); break;
        }
      }
    });

    if(listOfRtfReferences === '')
      return undefined;

    return listOfRtfReferences;
  }
}
module.exports = Style;
