export class UserFaker {

    static createUser(){
        const timestamp = Date.now();

        return {
            email: `user${timestamp}@test.com`,
            password: 'Password123.',
            country: 'United States',
            firstName: 'Test',
            lastName: 'User',
            street: '111 Sample Street',
            apartment: '99 Corp Building',
            city: 'Manila',
            state: 'New York',
            zipcode: '10001',
            phone: '09991234567',
            cardNumber: '4242 4242 4242 4242',
            expiryDate: '09/26',
            securityCode: '123'
        }
    }
}