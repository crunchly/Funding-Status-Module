import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import Funding from '../Client/src/Components/fundingStatus.jsx';
import {expect} from 'chai';

import { describeWithDOM, render, shallow, mount , spyLifecycle} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<Funding />);

describe('<Funding />', () => {
	it('expect Funding component to exist', () => {
		expect(wrapper).to.have.length(1);
	})
		
	it('should render a `.list`', () => {
		const wrapper = mount(<Funding />);
		expect(wrapper.find('.list')).to.have.length(1);
	});

	it('calls componentDidMount', () => {
    spy(Funding.prototype, 'componentDidMount');
    const wrapper = mount(<Funding />);
    expect(Funding.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should call sortTable when a button is clicked', () => {
  	const onButtonClick = spy();
  	spy(Funding.prototype, 'sortTable');
  	const wrapper = mount((
  		<Funding onClick={onButtonClick} />
  	));
  	wrapper.find('button #announcedDate').simulate('click');
  	expect(Funding.prototype.sortTable.calledOnce).to.equal(true);
  });

	it('should call fetch after component mounts', () => {
		spy(Funding.prototype, 'fetchData');
    const wrapper = mount(<Funding />);
    expect(Funding.prototype.fetchData.calledOnce).to.equal(true);
  });

  it('formatMoney function should format data properly', () => {
  	spy(Funding.prototype, 'formatMoney');
    const wrapper = mount(<Funding />);
    expect(Funding.prototype.formatMoney(100000000)).to.equal('$100M');
  });

  it('should change state when a button is clicked', () => {
  	const onButtonClick = spy();
  	const wrapper = mount((
  		<Funding onClick={onButtonClick} />
  	));
  	wrapper.find('button #announcedDate').simulate('click');
  	expect(wrapper.state().announcedDate).to.equal(true);
  });

  it('updating state should result in totalFundingAmount to be run', () => {
  	const wrapper = mount(<Funding />);
  	wrapper.setState({rounds: [
  		{
  			announcedDate: "2005-05-01",
				company: "Facebook",
				leadInvestor: "Lowercase Capital",
				moneyRaised: 32500000,
				numInvestors: 3,
				transactionName: "series-a"
  		},
  		{
  			announcedDate: "2003-05-01",
				company: "Facebook",
				leadInvestor: "Lowercase Capital",
				moneyRaised: 1200000,
				numInvestors: 3,
				transactionName: "seed"
  		}
  	]});

  	spy(Funding.prototype, 'totalFundingAmount');
  	expect(wrapper.find('.totalFundingAmount').text()).to.equal('$33.7M');
  });

});







