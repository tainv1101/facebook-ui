import TippyHeadless from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    return (
        <div>
            <TippyHeadless
                zIndex={9999}
                placement="bottom-end"
                interactive
                trigger="click"
                render={(attrs) => (
                    <div className={cx('items-list')} tabIndex="-1" {...attrs}>
                        {items.map((item, index) => {
                            return <MenuItem key={index} data={item} />;
                        })}
                    </div>
                )}
            >
                {children}
            </TippyHeadless>
        </div>
    );
}

export default Menu;
