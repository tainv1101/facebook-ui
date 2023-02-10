import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import className from 'classnames/bind';
import { FaFacebookMessenger, FaChevronRight, FaQuestionCircle } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { GoGear, GoReport, GoSignOut } from 'react-icons/go';
import { MdNightlight } from 'react-icons/md';

import style from './Header.module.scss';
import imgs from '~/assets/imgs';
import config from '~/configs';
import Search from '~/Layouts/components/Search';
import Avatar from '~/components/Avatar';
import Menu from '~/Layouts/components/Menu';
import Messenger from './Messenger';

const cx = className.bind(style);

const fakeData = [
    {
        icon: <GoGear />,
        title: 'Cài đặt & quyền riêng tư',
        cheveron: <FaChevronRight />,
    },

    {
        icon: <FaQuestionCircle />,
        title: 'Trợ giúp & hỗ trợ',
        cheveron: <FaChevronRight />,
    },

    {
        icon: <MdNightlight />,
        title: 'Màn hình & trợ năng',
    },
    {
        icon: <GoReport />,
        title: 'Đóng góp ý kiến',
    },
    {
        icon: <GoSignOut />,
        title: 'Đăng xuất',
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to={config.routeConfig.home} className={cx('logo')}>
                <img src={imgs.logo} alt="" />
            </Link>

            <Search />

            <div className={cx('action')}>
                <Messenger offset={[100, 10]} title="Chat" use>
                    <Tippy delay={[300, 0]} content="Messenger">
                        <div className={cx('action-btn')}>
                            <FaFacebookMessenger className={cx('action-icon')} />
                        </div>
                    </Tippy>
                </Messenger>

                <Messenger offset={[50, 10]} title="Thông báo">
                    <Tippy delay={[300, 0]} content="Notifications">
                        <div className={cx('action-btn')}>
                            <IoNotifications className={cx('action-icon')} />
                        </div>
                    </Tippy>
                </Messenger>

                <Menu items={fakeData}>
                    <Tippy delay={[300, 0]} zIndex={8888} content="Account">
                        <div>
                            <Avatar
                                large
                                more
                                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX-8T8hA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfCYnnZk1FvCPPGzAFkSINlexBpXvti2sfF8YoJpBbbxrw&oe=63E84C29"
                            />
                        </div>
                    </Tippy>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
