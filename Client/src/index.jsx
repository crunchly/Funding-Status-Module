import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Funding extends React.Component {
	constructor() {
		super();
		this.state = {
			rounds: [],
			announcedDate: false,
			transactionName: false,
			numInvestors: false,
			moneyRaised: false,
			leadInvestor: false,
		}
		this.sortTable = this.sortTable.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		$.ajax({
			method: 'GET',
			url: '/api/funding_round',
			contentType: 'application/json',
			success: (data) => {
				console.log('success');
				this.setState({rounds: data});
			}
		})
	}

	sortTable(e) {
		var data = this.state;

		if (this.state[e.target.id] === false) {
			data.rounds.sort(function(a, b) {
				if (typeof a[e.target.id] === 'string') {
					return b[e.target.id].localeCompare(a[e.target.id]);
				} else {
					return b[e.target.id] - a[e.target.id];
				}
			});			
		} else {
			data.rounds.sort(function(a, b) {
				if (typeof a[e.target.id] === 'string') {
					return a[e.target.id].localeCompare(b[e.target.id]);
				} else {
					return a[e.target.id] - b[e.target.id];
				}
			});		
		}

		data[e.target.id] = !data[e.target.id];
		this.setState(data);
	}

	render() {

		var tableRows = [];

		tableRows = this.state.rounds.map(function(row) {
			var date = row.announcedDate.slice(0, 4) + row.announcedDate.slice(5, 7) + row.announcedDate.slice(8, 10);
			
			var longDate = (new Date(row.announcedDate)).toString();
			var formattedDate = longDate.substring(4,10) + ',' + longDate.substring(10,15);

			var formattedTransactionName = row.transactionName.substring(0,1).toUpperCase() + row.transactionName.substring(1);

			if (formattedTransactionName.includes('Series')) {
				formattedTransactionName = formattedTransactionName.substring(0,7) +
																	 formattedTransactionName.substring(7,8).toUpperCase() +
																	 formattedTransactionName.substring(8);
			}

			var amountRaised = row.moneyRaised.toString();
			var amountData = amountRaised
			for (var i = 0; i < (12 - amountRaised.length); i++) {
				amountData = '0' + amountData;
			}

			if (amountRaised.length >= 4 && amountRaised.length <=6) {
				var formattedAmountRaised = '$' + (row.moneyRaised / 1000).toString() + 'K';
			} else if (amountRaised.length >= 7 && amountRaised.length <=9) {
				var formattedAmountRaised = '$' + (row.moneyRaised / 1000000).toString() + 'M';
			} else if (amountRaised.length >= 10 && amountRaised.length <=12) {
				var formattedAmountRaised = '$' + (row.moneyRaised / 1000000000).toString() + 'B';
			}

			return (
	      <tr>
	        <td className="Announced Date" data-value={date}>{formattedDate}</td>
	        <td className="Transaction Name">{formattedTransactionName}</td>
	        <td className="Number of Investors">{row.numInvestors}</td>
	        <td className="Money Raised" data-value={amountData}>{formattedAmountRaised}</td>
	        <td className="Lead Investors">{row.leadInvestor}</td>
	      </tr>
			)
		})

		return (
			<div id="funding_rounds">
  			<button onClick={this.sortTable} className="sort-button" id="announcedDate">
    			Announced Date
  			</button>
  			<button onClick={this.sortTable} className="sort-button" id="transactionName">
    			Transaction Name
  			</button>
  			<button onClick={this.sortTable} className="sort-button" id="numInvestors">
    			Number of Investors
  			</button>
  			<button onClick={this.sortTable} className="sort-button" id="moneyRaised">
    			Money Raised
  			</button>
  			<button onClick={this.sortTable} className="sort-button" id="Lead Investors">
    			Lead Investors
  			</button>  	

			  <table>
			    <tbody className="list">
			  		{tableRows}
			    </tbody>
			  </table>
			</div>
		)
	}
}

ReactDOM.render(<Funding />, document.getElementById('funding_status'));


























