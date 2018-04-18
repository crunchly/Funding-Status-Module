import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from 'List.js';

class Funding extends React.Component {
	constructor() {
		super();
		this.state = {
			rounds: [],
		}
	}

	componentDidMount() {
		var options = {
  		valueNames: [ {'name': 'Date', attr: 'data-value'}, 'Transaction Name', 'Number of Investors', { name: 'Money', attr: 'data-value' }, 'Lead Investors']
		};

		var userList = new List('funding_rounds', options);

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
  			<button className="sort" data-sort="Date">
    			Announced Date
  			</button>
  			<button className="sort" data-sort="Transaction Name">
    			Transaction Name
  			</button>
  			<button className="sort" data-sort="Number of Investors">
    			Number of Investors
  			</button>
  			<button className="sort" data-sort="Money">
    			Money Raised
  			</button>
  			<button className="sort" data-sort="Lead Investors">
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



			      // <tr>
			      //   <td className="Announced Date" data-value='20170810'>Aug 10, 2017</td>
			      //   <td className="Transaction Name">Series D - Coinbase</td>
			      //   <td className="Number of Investors">13</td>
			      //   <td className="Money Raised" data-value='0108100000'>$108.1M</td>
			      //   <td className="Lead Investors">IVP (Institutional Venture Partners)</td>
			      // </tr>
			      // <tr>
			      //   <td className="Announced Date" data-value='20160707'>Jul 7, 2016</td>
			      //   <td className="Transaction Name">Series C - Coinbase</td>
			      //   <td className="Number of Investors">13</td>
			      //   <td className="Money Raised" data-value='0075000000'>$75M</td>
			      //   <td className="Lead Investors">Andreessen Horowitz</td>
			      // </tr>
			      // <tr>
			      //   <td className="Announced Date" data-value='20151210'>Dec 10, 2015</td>
			      //   <td className="Transaction Name">Series A - Coinbase</td>
			      //   <td className="Number of Investors">2</td>
			      //   <td className="Money Raised" data-value='0010000000'>$10M</td>
			      //   <td className="Lead Investors">IVP (Institutional Venture Partners)</td>
			      // </tr>
			      // <tr>
			      //   <td className="Announced Date" data-value='20150110'>Jan 10, 2015</td>
			      //   <td className="Transaction Name">Seed Round - Coinbase</td>
			      //   <td className="Number of Investors">5</td>
			      //   <td className="Money Raised" data-value='0000600000'>$600K</td>
			      //   <td className="Lead Investors">Lowercase Capital</td>
			      // </tr>


























