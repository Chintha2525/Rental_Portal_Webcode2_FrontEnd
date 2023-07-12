import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Loading from './Loading';
import { Config } from './Config';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const payload = { email, password };
      const response = await axios.post(`${Config.api}/login`, payload);
      const { message, token } = response.data;
      sessionStorage.setItem('token', token);
      setLoading(false);
      navigate('/addproduct');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login">
      {isLoading && <Loading />}
      <div className='login__container'>
        <Link to="/" className='login__logo'>
          <h1 className='login-head' >RentXpert</h1>
        </Link>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className='login__h'>Email</Form.Label>
            <Form.Control className='login__input' type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='login__h'>Password</Form.Label>
            <Form.Control className='login__input' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <Button className='login__signInButton' onClick={handleLogin}>
            LOGIN
          </Button>
        </Form>
        <div className='login__icon'>
          <a href='https://www.linkedin.com/in/chinthamani-g-02b29a265/' target='_blank' className='icon' rel='noopener noreferrer'>
            <LinkedInIcon fontSize='large' />
          </a>

          <a href='https://github.com/Chintha2525' target='_blank' className='icon' rel='noopener noreferrer'>
            <GitHubIcon fontSize='large' />
          </a>
        </div>


      </div>
      <div className='login__pass'>
        <h3>Email : rentahh@gmail.com</h3>
        <h3>Password : Admin@123</h3>
      </div>

    </div>

  );
}

export default Login;
