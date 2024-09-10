import { Demo } from '@/components/demo';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div>
      <h1>Signin</h1>
      <Demo />
      <Link to='/dashboard'>Home</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}
