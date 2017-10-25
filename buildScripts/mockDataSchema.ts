export const schema: object = {
    id: {
        chance: 'guid',
    },
    firstName: {
        faker: 'name.firstName',
    },
    lastName: {
        faker: 'name.lastName',
    },
    country: {
        faker: 'address.country',
    },
    createdAt: {
        faker: 'date.past',
    },
    email: {
        faker: 'internet.email',
    },
};
