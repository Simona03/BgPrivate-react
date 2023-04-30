import React, {memo} from 'react';
import Link from 'next/link';
import {useRouter,} from 'next/router';
import PropTypes from 'prop-types';

interface CustomLinkInterface {
    href: string;
    as?: string;
    title?: string;
    className?: string;
    rel?: string;
    target?: string;
    children?: any;
    onClick?: any;
    shallow?: boolean;
    style?: any;
    forwardRef?: any;
    func?: any;
};

interface LinkObjectInterface {
    href?: string;
    as?: string;
    title?: string;
    className?: string;
    rel?: string;
    target?: string;
    children?: any;
    onClick?: any;
    shallow?: boolean;
    style?: any;
    ref?: any;
    func?: any;
};

const CustomLink = (props: CustomLinkInterface) => {

    const router = useRouter();

    let {href, as, title, className, rel, target, children, onClick, shallow, style, forwardRef} = props;

    const linkProps: LinkObjectInterface = {
        className,
        title
    };

    if (!as) as = href;
    if (rel) linkProps.rel = rel;
    if (target) linkProps.target = target;
    if (onClick) linkProps.onClick = onClick;
    if (style) linkProps.style = style;
    if (forwardRef) linkProps.ref = forwardRef;
    if (router.asPath === as && !onClick) linkProps.onClick = router.reload;

    return (

        <Link
            href={href}
            as={as}
            shallow={shallow}
            prefetch={false}
            {...linkProps}
        >
            {children}
        </Link>

    )
};

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    as: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
    lang: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.any,
    shallow: PropTypes.bool,
    forwardRef: PropTypes.func,
    onClick: PropTypes.func
};

export default memo(CustomLink);