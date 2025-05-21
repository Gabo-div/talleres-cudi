import { useState } from "react";

function TwitterFollowCard({ name, username, imagen }) {
  const [following, setFollowing] = useState(false);

  const text = following ? "Siguiendo" : "Seguir";

  const handleClick = () => {
    setFollowing(!following);
  };

  return (
    <div className="twitter-card">
      <img src={imagen} />
      <div>
        <p>{name}</p>
        <span>{username}</span>
      </div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default TwitterFollowCard;
