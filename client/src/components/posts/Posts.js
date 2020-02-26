import React, { Fragment, useContext, useEffect } from 'react';
import PostItem from './PostItem';
import PostListItem from './PostListItem';
import Spinner from '../layout/Spinner';
import PostContext from '../../context/post/postContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Posts = ({ postSection }) => {
	const postContext = useContext(PostContext);
	const {
		posts,
		filtered,
		loading,
		getAllPosts,
		getPostsBySection
	} = postContext;

	useEffect(() => {
		postSection === 'dashboard'
			? getAllPosts()
			: getPostsBySection(postSection);
		// eslint-disable-next-line
	}, []);

	if (posts !== null && posts.length === 0 && !loading) {
		return <h4>Loading Error: unable to load any posts</h4>;
	}

	return (
		<Fragment>
			{console.log(posts)}
			{posts !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null
						? filtered.map((post, index) => (
								<CSSTransition key={post._id} timeout={500} className='item'>
									{postSection === 'dashboard' ? (
										<PostListItem post={post} index={index + 1} />
									) : (
										<PostItem post={post} />
									)}
								</CSSTransition>
						  ))
						: posts.map((post, index) => (
								<CSSTransition key={post._id} timeout={500} className='item'>
									{postSection === 'dashboard' ? (
										<PostListItem post={post} index={index + 1} />
									) : (
										<PostItem post={post} />
									)}
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Posts;
