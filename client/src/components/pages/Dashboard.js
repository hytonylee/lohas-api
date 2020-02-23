import React, { useContext, useEffect } from 'react';
import AddBtn from '../layout/AddBtn';
import Posts from '../posts/Posts';
import PostFilter from '../posts/PostFilter';
import PostForm from '../posts/PostForm';
import AddPostModal from '../posts/AddPostModal';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='container'>
			<AddBtn />
			<PostFilter />
			<Posts postSection='dashboard' />
		</div>
	);
};

export default Dashboard;
