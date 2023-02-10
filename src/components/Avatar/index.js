import classNames from 'classnames/bind';
import style from './Avatar.mudule.scss';
import { GoChevronDown } from 'react-icons/go';

const cx = classNames.bind(style);

function Avatar({ src, alt, xlarge = false, large = false, medium = false, small = true, className, more = false }) {
    const classes = cx('avatar', {
        [className]: className,
        xlarge,
        large,
        medium,
        small,
    });

    return (
        <div className={cx('wrapper')}>
            <img className={classes} src={src} alt={alt} />
            {more && (
                <div className={cx('more-wrapper')}>
                    <GoChevronDown className={cx('more-icon')} />
                </div>
            )}
        </div>
    );
}

export default Avatar;
