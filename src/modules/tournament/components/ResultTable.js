import React from 'react';

// Refs CSS
require('style!../../../public/css/result.css');

class ResultTable extends React.Component{

    constructor(props){
        super(props);
    }

    displayTournaments(){

        if(!this.props.tournaments){
            return (
                <tr></tr>
            );
        }

        return this.props.tournaments.map( (tournament, i) => {

            // Check winner

            let winnerText = " - ";

            if(tournament.winner){
                winnerText = (
                    <span>
                        <i className="fa fa-trophy" aria-hidden="true"></i> {tournament.winner.team.name}
                    </span>
                )
                
            }

            return (
                <tr key={i}>
                    <td width="252">
                        {tournament.name}
                    </td>
                    <td>
                        {winnerText}
                    </td>
                </tr>
            );
        })

    }

    render(){

        return (<table className="resultTableDark">
            <thead>
                <tr>
                    <th colSpan="2">CS:GO</th>
                </tr>
            </thead>
            <tbody>
                {this.displayTournaments()}
            </tbody>
        </table>);

    }

}

export default ResultTable;