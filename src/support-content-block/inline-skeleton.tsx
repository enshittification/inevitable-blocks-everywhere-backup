import React from 'react';
import classnames from 'classnames';

type InlineSkeletonProps = {
	loaded: boolean;
	hidden?: boolean;
	large?: boolean;
	children: React.ReactNode;
};

/**
 * Loading skeleton that takes its sizes from the font size
 */
export const InlineSkeleton = ( props: InlineSkeletonProps ) => {
	if ( props.loaded ) {
		return <>{ props.children }</>;
	}
	return (
		<span
			className={ classnames( 'be-support-content-inline-skeleton', {
				'is-hidden': props.hidden,
				'is-large': props.large,
			} ) }
		></span>
	);
};
