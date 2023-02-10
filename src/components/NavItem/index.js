import classNames from 'classnames/bind';
import style from './NavItem.module.scss';

const cx = classNames.bind(style);

function NavItem({ title, icon, src, background }) {
    let Component = icon;
    return (
        <div className={cx('wrapper')}>
            {icon && (
                <div className={cx('icon-wrapper', { background })}>
                    <Component className={cx('icon')} />
                </div>
            )}
            {src && <img className={cx('img')} src={src} alt="" />}
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default NavItem;
