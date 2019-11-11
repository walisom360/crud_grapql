const User = require('./User');

module.exports = {
	Query: {
		users: () => User.find(),
		user: (root, { id }) => User.find(id)
	},

	Mutation: {
		createUser: (root, { name, email }) =>
			User.create({
				name,
				email
			}),
		updateUser: (root, { id, name, email }) =>
			User.findByIdAndUpdate(
				id,
				{ name, email },
				{
					new: true
				}
			),
		deleteUser: (root, { id }) => User.findByIdAndDelete(id)
	}
};
