let users = [
  {
    id: '1',
    name: 'Pavan M',
    email: 'pavan@gmail.com',
    phone: '1234567890',
    password: 'password123',
    signupTime: new Date().toISOString(),
    loginTime: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Mohit P',
    email: 'mohit@gmail.com',
    phone: '0987654321',
    password: 'password123',
    signupTime: new Date().toISOString(),
    loginTime: new Date().toISOString()
  }
];

export const createUser = (userData) => {
  const newUser = {
    ...userData,
    id: Date.now().toString(),
    signupTime: new Date().toISOString()
  };
  users.push(newUser);
  return newUser;
};

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

export const getAllUsers = () => {
  return users;
};

export const updateUserLoginTime = (userId) => {
  const user = users.find(user => user.id === userId);
  if (user) {
    user.loginTime = new Date().toISOString();
  }
  return user;
};
