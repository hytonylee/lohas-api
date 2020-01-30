import React, { Fragment } from 'react';
import AdminMenu from '../layout/AdminMenu';
import Posts from '../posts/Posts';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Dashboard = () => {
	return (
		<div>
			<TransitionGroup>
				<CSSTransition timeout={500}>
					<AdminMenu />
				</CSSTransition>
			</TransitionGroup>
			<div className='container'>
				This is Dashboard
				<Posts page='blog' />
			</div>
		</div>
	);
};

export default Dashboard;
