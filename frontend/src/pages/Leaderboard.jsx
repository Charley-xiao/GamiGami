import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();
      setUsers(data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ol>
        {users.map((user, idx) => (
          <li key={idx}>
            {user.username} - XP: {user.xp}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
