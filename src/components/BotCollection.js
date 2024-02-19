import React from "react";
function BotCollection({ bot, isSelected, onToggleEnlistment }) {
    return (
        <div className={`bot-card ${isSelected ? 'selected' : ''}`}>
            <img src={bot.avatar_url} alt={bot.name} title="Can I be your Soldier" className="bot-card-image" />
            <div className="color">
                <h2>Bot name: {bot.name}</h2><br />

                <small>Created at: {bot.created_at}</small><br />
                <small>&#9889; {bot.health}</small><br />
                <p>&#128148; {bot.damage}</p>
                <p> &#128737; {bot.armor}</p>
            </div>
            <button onClick={() => onToggleEnlistment(bot)}>Add to Army</button>
        </div>
    );
}

export default BotCollection;