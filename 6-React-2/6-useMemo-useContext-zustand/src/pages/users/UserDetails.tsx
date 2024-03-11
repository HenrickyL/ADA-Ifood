import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../interfaces/user';
import { client } from '../../network/api';

const UserDetails = () => {
  const { id } = useParams(); 
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);

  async function loadUser() {
      setIsLoading(true);
      await new Promise((res) => setTimeout(res, 3000));
      const { data } = await client.get<User>(`users/${id}`);
      setUser(data);
      setIsLoading(false);
  }


  useEffect(()=>{
    loadUser()
  }, [])

  return (
    isLoading? 
    <h1>Loading...</h1> : (
    <div>
      <h2>{user?.name}</h2>
      <p>ID do usuário: {user?.id}</p>
      <p>Email usuário: {user?.email}</p>
    </div>)
  );
}

export default UserDetails;