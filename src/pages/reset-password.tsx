import Auth from 'templates/Auth';
import FormResetPassword from 'components/FormResetPassword';

const ResetPassword = () => {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  );
};

export default ResetPassword;
