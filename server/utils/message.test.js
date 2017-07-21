var expect = require ('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
 it ('should generate correct message object', () => {

   //get response store res in variable
   //asser from matches the value passed in
   //assert text matches up
   //assert createdAt is number

   var from = 'Jen';
   var text = 'Some message';
   var message = generateMessage(from, text);

   expect(message.createdAt).toBeA('number');
   expect(message).toInclude({
     from,
     text
   });
 });
});
