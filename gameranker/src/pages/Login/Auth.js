import Input from "../../components/input/index";
import Button from "../../components/button/index";
import Form from "../../components/form/index";
import { useLogin } from "../../hooks/useLogin";

const Auth = () => {
  const {
    email,
    password,
    onFormSubmit,
    onGoogleClick,
    onSignOut,
    handleChangeEmail,
    handleChangePassword,
  } = useLogin();

  return (
    <div className="container">
      <div>
        <Form onSubmit={onFormSubmit}>
          <label>Email</label>
          <div className="form-group">
            <Input type="email" value={email} onChange={handleChangeEmail} />
          </div>
          <label>Password</label>
          <div className="form-group">
            <Input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <input type="submit" name="Submit" />
        </Form>
        <div>
          <Button onClick={onGoogleClick} text="Sign in with Google!" />
        </div>
        <div>
          <Button onClick={onSignOut} text="Sign out!" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
