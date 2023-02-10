import className from 'classnames/bind';
import { TfiClose } from 'react-icons/tfi';
import Avatar from '~/components/Avatar';
import style from './AccountItem.module.scss';

const cx = className.bind(style);

function AccountItem({ xlarge, large, medium, small, src, des, clear, className, nameCss }) {
    const classes = cx('account-item', {
        xlarge,
        large,
        small,
        medium,
        [className]: className,
    });
    return (
        <div className={classes}>
            <Avatar
                xlarge={xlarge}
                medium={medium}
                large={large}
                small={small}
                alt=""
                src={
                    src ||
                    'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/276237927_1114779206044679_4324894397053032984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6n_L0eNjmB0AX-8T8hA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBGdC_SwLPKh9QW_8WIFyqUhiAHGm-b2kNF_z0jlYYjCA&oe=63EA4669'
                }
            />
            <div className={cx('account-info')}>
                <span
                    className={cx('name', {
                        [nameCss]: nameCss,
                    })}
                >
                    Nguyễn Văn Tài
                </span>
                {des && <span className={cx('description')}>{des}</span>}
            </div>
            {clear && (
                <div className={cx('clear-btn')}>
                    <TfiClose className={cx('clear-icon')} />
                </div>
            )}
        </div>
    );
}

export default AccountItem;
