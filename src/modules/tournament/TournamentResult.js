import React from 'react';

// Import Component
import ResultTable from './components/ResultTable';

class TournamentResult extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            tournaments : [],
        }
    }

    componentWillMount(){
        this.initPage();
    }

    initPage(){
        
        // Get tournament result data
        $.ajax({
            type: 'GET',
            url : baseApiUrl + '/result/world',
        }).done((data) => {

            let tournaments = data;
            console.log(data)
            // Set state
            this.setState({tournaments: tournaments});

        });

    }

    render(){
        return(
            <div>
                <ResultTable tournaments={this.state.tournaments} />
            </div>
        );
    }

}

export default TournamentResult;