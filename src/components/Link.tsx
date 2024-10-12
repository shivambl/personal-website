const Link = ({ href='/', children='Link', isExternal = false }) => {
    let attributes = {
        className: 'underline underline-offset-[4.5px] text-orange-100 decoration-[1.5px] hover:text-orange-200',
    }
    if (isExternal) {
        attributes['target'] = '_blank'
        attributes['rel'] = 'noopener noreferrer'
    }

    return (
        <a href={href} {...attributes}>
            {children}{isExternal && ' ↗'}
        </a>
    )
}

export default Link
