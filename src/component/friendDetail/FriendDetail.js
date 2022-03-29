import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>Helllo bondhuuuu :{friendId}</h1>
            <h2>Name: {friend.name}</h2>
            <h3>Email: {friend.email}</h3>
            <h4>Website: {friend.website}</h4>
            <p>City: {friend.address?.city}</p>
            <p>Lat: {friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDetail;