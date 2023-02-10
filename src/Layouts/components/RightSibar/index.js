import classNames from 'classnames/bind';
import Sponsor from './Sponsor';
import style from './RightSibar.module.scss';

const cx = classNames.bind(style);

function ReigtSibar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sponsor />
        </div>
    );
}

export default ReigtSibar;
