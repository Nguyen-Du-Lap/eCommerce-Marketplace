
import { TypeUserModel } from '@/types';
import React from 'react';
import { getUsers } from './action';

export default async function AdminPage(){
   const users = await getUsers();
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Users</h2>
            <ul>
                {users.map((user: TypeUserModel) => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};