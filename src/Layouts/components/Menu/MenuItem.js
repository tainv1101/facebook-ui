import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);
function MenuItem({ data, onClick }) {
    return (
        <div className={cx('menu-item')} onClick={onClick}>
            <div className={cx('icon')}>{data.icon}</div>
            <div className={cx('title')}>{data.title}</div>
        </div>
    );
}

export default MenuItem;
