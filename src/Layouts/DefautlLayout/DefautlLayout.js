import classNames from 'classnames/bind';

import Header from '~/Layouts/components/Header';
import style from './DefualtLayout.module.scss';
import LeftSibar from '~/Layouts/components/LeftSidebar';
import RightSibar from '~/Layouts/components/RightSibar';

const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <LeftSibar></LeftSibar>
                <div className={cx('content')}>{children}</div>
                <RightSibar></RightSibar>
            </div>
        </div>
    );
}

export default DefaultLayout;
