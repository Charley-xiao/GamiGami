import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-4">Welcome to GamiGami!</h1>
      <Link to="/quiz">
        <button className="px-6 py-3 text-lg font-semibold bg-yellow-400 rounded-lg hover:bg-yellow-500">
          Start Your Learning Adventure
        </button>
      </Link>
      <Link to="/leaderboard" className="mt-4">
        <button className="px-6 py-3 text-lg font-semibold bg-green-400 rounded-lg hover:bg-green-500">
          View Leaderboard
        </button>
      </Link>
      <Link to="/auth" className="mt-4">
        <button className="px-6 py-3 text-lg font-semibold bg-red-400 rounded-lg hover:bg-red-500">
          Login / Register
        </button>
      </Link>
    </div>
  );
};

export default Home;
