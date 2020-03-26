import User from '../classes/User';

describe('User.js', () =>{
    test('getEmail', () => {
        expect(User.getEmail()).toBe('trojan@okoh.co.uk');
    })
});
