import Auth from 'templates/Auth';
import FormForgotPassword from 'components/FormForgotPassword';

const ForgotPassword = () => {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  );
};

export default ForgotPassword;
