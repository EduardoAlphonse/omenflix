import React from 'react';

function ButtonLink(props) {
	const { className, href, children } = props;

	return (
		<a href={href} className={className}>
			{children}
		</a>
	)
}

export default ButtonLink;