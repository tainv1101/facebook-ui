import classNames from 'classnames/bind';
import style from './Advertise.module.scss';

const cx = classNames.bind(style);
function Advertaise() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('advert')} href="couserking.org">
                <img
                    className={cx('img')}
                    src="https://i.pcmag.com/imagery/reviews/05LfIOxtkYAZ4BIOXwOnZJs-24..v1626447626.png"
                    alt=""
                />
                <div className={cx('info')}>
                    <span className={cx('title')}>2023 sale: Courses As Low As $11.9</span>
                    <span className={cx('link')}>couserking.org</span>
                </div>
            </a>
        </div>
    );
}

export default Advertaise;
