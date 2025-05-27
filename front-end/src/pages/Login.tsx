import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div className="container-login">
      <input
      className='input'
        type="text"
        placeholder="Անուն..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
        <input
          className='input'
          type={showPassword ? "text" : "password"}
          placeholder="Գաղտնաբառ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
         <Link to=''id="regbtn"> Register</Link>
    </div>
  );

}


