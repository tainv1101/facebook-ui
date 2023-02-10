import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiFillFlag, AiTwotoneAppstore } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { BsBookmarkFill, BsClockFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi2';
import { FiLink } from 'react-icons/fi';

import style from './LeftSidebar.module.scss';
import config from '~/configs';
import NavItem from '~/components/NavItem';
import AccountItem from '~/components/AcountItem';

const cx = classNames.bind(style);

function LeftSibar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav')}>
                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem icon={AiFillHome} title="Trang chủ" />
                    </div>
                </NavLink>
                <NavLink className={cx('item')} to={config.routeConfig.home}>
                    <AccountItem className={cx('no-padding')} small />
                </NavLink>
            </nav>

            <nav className={cx('nav')}>
                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem icon={FaUserFriends} title="Bạn bè" />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem icon={AiFillFlag} title="Trang" />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem icon={BsBookmarkFill} title="Đã lưu" />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem icon={BsClockFill} title="Gần đây nhất" />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem icon={HiUserGroup} title="Nhóm" />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem background icon={AiTwotoneAppstore} title="Xem tất cả" />
                    </div>
                </NavLink>
            </nav>

            <nav className={cx('nav')}>
                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem background icon={HiUserGroup} title="Gần đây nhất" />
                    </div>
                </NavLink>
            </nav>

            <nav className={cx('nav')}>
                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem
                            src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX8AFheB&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAEbAryeMi8TyYfZKpkEpZvMQRaDGhgOIJbvIXGwKcGcw&oe=63EA4669"
                            title="Nhóm của bạn"
                        />
                    </div>
                </NavLink>

                <NavLink className={cx('item-wrapper')} to={config.routeConfig.home}>
                    <div className={cx('item')}>
                        <NavItem background icon={FiLink} title="Xem tất cả lối tắt" />
                    </div>
                </NavLink>
            </nav>

            <nav className={cx('nav')}>
                <div className={cx('footer')}>
                    Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo · Cookie · · Meta © 2023
                </div>
            </nav>
        </div>
    );
}

export default LeftSibar;
