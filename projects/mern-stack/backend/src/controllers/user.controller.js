import { handleHashPassword } from '../utils/hash-password.util.js';

export const changePasswordController = async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.user;

  // hash password
  // promise
  const oldPassword1 = await handleHashPassword({ password: oldPassword });
  const newPassword2 = await handleHashPassword({ password: newPassword });
  const confirmPassword3 = await handleHashPassword({ password: confirmPassword });
};
