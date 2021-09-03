'use strict'

const translate = require('translate-api'), fs = require('fs');

let palavras = [];
fs.readFile('./message.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    palavras = data.toString().split(', ');
    processWords('');
});

let quantidade = 6;

let langs = [
  'auto',
  'af',
  'sq',
  'ar',
  'hy',
  'az',
  'eu',
  'be',
  'bn',
  'bs',
  'bg',
  'ca',
  'ceb',
  'ny',
  'zh-cn',
  'zh-tw',
  'co',
  'hr',
  'cs',
  'da',
  'nl',
  'en',
  'eo',
  'et',
  'tl',
  'fi',
  'fr',
  'fy',
  'gl',
  'ka',
  'de',
  'el',
  'gu',
  'ht',
  'ha',
  'haw',
  'iw',
  'hi',
  'hmn',
  'hu',
  'is',
  'ig',
  'id',
  'ga',
  'it',
  'ja',
  'jw',
  'kn',
  'kk',
  'km',
  'ko',
  'ku',
  'ky',
  'lo',
  'la',
  'lv',
  'lt',
  'lb',
  'mk',
  'mg',
  'ms',
  'ml',
  'mt',
  'mi',
  'mr',
  'mn',
  'my',
  'ne',
  'no',
  'ps',
  'fa',
  'pl',
  'pt',
  'ma',
  'ro',
  'ru',
  'sm',
  'gd',
  'sr',
  'st',
  'sn',
  'sd',
  'si',
  'sk',
  'sl',
  'so',
  'es',
  'su',
  'sw',
  'sv',
  'tg',
  'ta',
  'te',
  'th',
  'tr',
  'uk',
  'ur',
  'uz',
  'vi',
  'cy',
  'xh',
  'yi',
  'yo',
  'zu'
];

function processWords(text) {
  let transText = '';
  if (text == ''){
    for(var i = 0; i < quantidade; i ++) {
      transText += palavras[Math.floor(Math.random() * palavras.length - 1)] + ', ';
    }
  }
  else{
    transText = text;
  }
  
  let lang = langs[Math.floor(Math.random() * langs.length - 1)];
  
  translate.getText(transText, {to: lang}).then(function(text){
    if (Math.round(Math.random()) > 0) {
      processWords(text.text);
      console.log("traduzindodnv");
    }
    else{
      console.log(text.text);
    }
  });
}
