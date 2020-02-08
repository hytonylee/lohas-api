import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const AdminMenu = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	return (
		<div style={{ backgroundColor: '#3f3e3e', height: '30px', color: 'white' }}>
			<div className='sub-menu'>
				<ul>
					<li>Hello, {user && user.name}</li>
					<li>
						<i className='fas fa-plus-circle'></i>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminMenu;
