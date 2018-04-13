import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from 'List.js';

class Funding extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		var options = {
  		valueNames: [ {'name': 'Date', attr: 'data-value'}, 'Transaction Name', 'Number of Investors', { name: 'Money', attr: 'data-value' }, 'Lead Investors']
		};

		var userList = new List('funding_rounds', options);

		//Call fetchData()
	}

	fetchData() {
		//fetch database values for a specific company

		//get request to api
	}

	render() {

		// var tableRows = [];
		// var data = [];

		// tableRows = data.map(function(row) {
		// 	return (
	 //      <tr>
	 //        <td className="Announced Date" data-value='20170810'>Aug 10, 2017</td>
	 //        <td className="Transaction Name">Series D - Coinbase</td>
	 //        <td className="Number of Investors">13</td>
	 //        <td className="Money Raised" data-value='0108100000'>$108.1M</td>
	 //        <td className="Lead Investors">IVP (Institutional Venture Partners)</td>
	 //      </tr>
		// 	)
		// })

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
			      <tr>
			        <td className="Announced Date" data-value='20170810'>Aug 10, 2017</td>
			        <td className="Transaction Name">Series D - Coinbase</td>
			        <td className="Number of Investors">13</td>
			        <td className="Money Raised" data-value='0108100000'>$108.1M</td>
			        <td className="Lead Investors">IVP (Institutional Venture Partners)</td>
			      </tr>
			      <tr>
			        <td className="Announced Date" data-value='20160707'>Jul 7, 2016</td>
			        <td className="Transaction Name">Series C - Coinbase</td>
			        <td className="Number of Investors">13</td>
			        <td className="Money Raised" data-value='0075000000'>$75M</td>
			        <td className="Lead Investors">Andreessen Horowitz</td>
			      </tr>
			      <tr>
			        <td className="Announced Date" data-value='20151210'>Dec 10, 2015</td>
			        <td className="Transaction Name">Series A - Coinbase</td>
			        <td className="Number of Investors">2</td>
			        <td className="Money Raised" data-value='0010000000'>$10M</td>
			        <td className="Lead Investors">IVP (Institutional Venture Partners)</td>
			      </tr>
			      <tr>
			        <td className="Announced Date" data-value='20150110'>Jan 10, 2015</td>
			        <td className="Transaction Name">Seed Round - Coinbase</td>
			        <td className="Number of Investors">5</td>
			        <td className="Money Raised" data-value='0000600000'>$600K</td>
			        <td className="Lead Investors">Lowercase Capital</td>
			      </tr>
			    </tbody>
			  </table>
			</div>
		)
	}
}

ReactDOM.render(<Funding />, document.getElementById('funding_status'));