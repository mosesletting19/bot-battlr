import React from 'react';

const YourBotArmy = ({ selectedBots, onToggleEnlistment }) => {
    return (
        <div>
            <h3>All Enlisted Bots</h3>
            <div className="yourEnlistedBots">
                {selectedBots.map((selectedBot) => (
                    <div className="enlisted-bot-card" key={selectedBot.id}>
                        <img src={selectedBot.avatar_url} alt={selectedBot.name} className='enlisted-bot-card-image' />
                        <div className="enlisted-bot-image">
                            <h2>Bot name: {selectedBot.name}</h2>
                            <small>Created at: {selectedBot.created_at}</small><br />
                            <small>Updated at: {selectedBot.updated_at}</small><br />
                            <small>&#9889; {selectedBot.health}</small>
                            <small>&#128148; {selectedBot.damage}</small>
                            <small>&#128737; {selectedBot.armor}</small>
                        </div>
                        <button onClick={() => onToggleEnlistment(selectedBot)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourBotArmy;