// BotProfile.js
import React from 'react';

const BotProfile = ({ bot, addToArmy }) => {
    const handleAddToArmy = () => {
        addToArmy(bot);
    };

    return (
        <div>
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <img src={bot.avatar_url} alt={bot.name} />
            <button onClick={handleAddToArmy}>Add to Army</button>
        </div>
    );
};

export default BotProfile;
