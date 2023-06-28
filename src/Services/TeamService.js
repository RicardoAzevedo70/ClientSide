import axios from 'axios';
const TeamService = {
  getCaptainListTeams: async (username, token) => {
        try {
            const response = await fetch('http://localhost:7080/teams/postlistteamscaptain', {
            method: 'post',
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(username),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error occurred during login');
        }
  },
  getListTeamsGames: async (team, token) => {
    try {
        const requestData = { team: team };
        const response = await axios.post('http://localhost:7060/games/listallgamesfromteam', requestData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error occurred during login');
    }
  },  
  getListTeamPlayers: async (teamId, token) => {
    try {
        const requestData = { teamId: teamId };
        const response = await axios.post('http://localhost:7080/teams/getNamesMembersOfTeam', requestData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error('Error occurred during login');
    }
  },
  addTeamPlayer: async (new_member, name, token) => {
    try {
        const requestData = { new_member: new_member, name: name };
        const response = await axios.post('http://localhost:7080/teams/addmember', requestData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error occurred during login');
    }
  },
  removeTeamPlayer: async (name, remove_member, token) => {
    try {
        const requestData = { remove_member: remove_member, name: name };
        const response = await axios.post('http://localhost:7080/teams/removemember', requestData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error occurred during login');
    }
  },
};
  
export default TeamService;
  