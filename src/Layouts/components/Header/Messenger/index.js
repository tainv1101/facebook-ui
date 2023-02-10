import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { MdMoreHoriz } from 'react-icons/md';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { HiPencilSquare, HiVideoCamera } from 'react-icons/hi2';

import style from './Messenger.module.scss';
import AccountItem from '~/components/AcountItem';

const cx = classNames.bind(style);

function Messenger({ children, title, use, offset = [] }) {
    return (
        <div>
            <TippyHeadless
                zIndex={9999}
                placement="bottom-end"
                offset={offset}
                interactive
                trigger="click"
                render={(attrs) => (
                    <div className={cx('wrapper')}>
                        <div className={cx('items-list')} tabIndex="-1" {...attrs}>
                            <div className={cx('heading')}>
                                <span className={cx('heading-title')}>{title}</span>
                                <div className={cx('acction', { use: !use })}>
                                    <div className={cx('acction-btn')}>
                                        <MdMoreHoriz className={cx('heading-icon')} />
                                    </div>
                                    {use && (
                                        <div className={cx('acction-btn')}>
                                            <AiOutlineFullscreen className={cx('heading-icon')} />
                                        </div>
                                    )}
                                    {use && (
                                        <div className={cx('acction-btn')}>
                                            <HiVideoCamera className={cx('heading-icon')} />
                                        </div>
                                    )}
                                    {use && (
                                        <div className={cx('acction-btn')}>
                                            <HiPencilSquare className={cx('heading-icon')} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={cx('account-item')}>
                                <AccountItem xlarge des="Bạn: Okie" />
                            </div>
                            <div className={cx('account-item')}>
                                <AccountItem xlarge des="Bạn: Okie" />
                            </div>{' '}
                            <div className={cx('account-item')}>
                                <AccountItem xlarge des="Bạn: Okie" />
                            </div>{' '}
                            <div className={cx('account-item')}>
                                <AccountItem xlarge des="Bạn: Okie" />
                            </div>{' '}
                            <div className={cx('account-item')}>
                                <AccountItem xlarge des="Bạn: Okie" />
                            </div>{' '}
                            <div className={cx('account-item')}>
                                <AccountItem xlarge des="Bạn: Okie" />
                            </div>
                        </div>
                    </div>
                )}
            >
                {children}
            </TippyHeadless>
        </div>
    );
}

export default Messenger;
