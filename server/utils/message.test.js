const {generateMessage} = require('./message');

test('generating Message', () => {
    let from = "Jen";
    let text = "Some message";
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number')
    expect(message).toMatchObject({from, text})
})