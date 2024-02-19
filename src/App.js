import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import axios from 'axios';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setselectedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/bots')
      .then(response => {
        setBots(response.data);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
      });
  }, []);

  const selectBot = (bot) => {
    setSelectedBot(bot);
  }

  const enlistOrReleaseBot = (bot) => {
    if (selectedBots.find(b => b.id === bot.id)) {

      const updatedselectedBots = selectedBots.filter(b => b.id !== bot.id);
      setselectedBots(updatedselectedBots);
    } else {

      setselectedBots([...selectedBots, bot]);
    }
  }

  return (
    <div className="app-container">
      <div className="section bot-army-section">
        <YourBotArmy selectedBots={selectedBots} onToggleEnlistment={enlistOrReleaseBot} />
      </div>

      <div className="section all-bots-section">
        <h3>All Bots Collection</h3>
        <div className="botsCollections">
          {bots.map(bot => (
            <BotCollection
              key={bot.id}
              bot={bot}
              isSelected={selectedBot && selectedBot.id === bot.id}
              onToggleEnlistment={() => enlistOrReleaseBot(bot)}
              onClick={() => selectBot(bot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;