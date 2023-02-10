import classNames from 'classnames/bind';
import Advertaise from '~/components/Advertise';
import style from './Sponsor.module.scss';
const cx = classNames.bind(style);
function Sponsor() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Được tài trợ</span>
            <Advertaise />
            <Advertaise />
        </div>
    );
}

export default Sponsor;
