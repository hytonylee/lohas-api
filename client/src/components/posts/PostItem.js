import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';
import Post from './Post';

const PostItem = ({ post }) => {
	const { _id, title, content, imgUrl, date } = post;

	return (
		<div className='card-post' keys={_id}>
			<img className='image' src={imgUrl} alt={'postImage: ' + title} />
			<h3>{title.toUpperCase()}</h3>
			<div className='card-container'>
				<h6>Posted on {date.slice(0, 10)}</h6>
				<p>
					{content.slice(0, 20)}{' '}
					<Link to={`/posts/post/${_id}`}>Read More...</Link>
				</p>
			</div>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired
};

PostItem.defaultProps = {
	imgUrl: defaultImage
};

export default PostItem;
