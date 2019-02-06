const expect = require('jest');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should genereate the correct message object', () => {
        let from = "Jen";
        let text = "Some message";
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({from,text})
    })
})