import { useRef, useState } from 'react';
import className from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Search.module.scss';
import AccountItem from '~/components/AcountItem';

const cx = className.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setshowResult] = useState(false);
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <TippyHeadless
                interactive
                visible={showResult}
                appendTo={() => document.body}
                sticky
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <span className={cx('search-heading')}>Tìm kiếm gần đây</span>
                        <div className={cx('account-item')}>
                            <AccountItem medium clear />
                        </div>
                        <div className={cx('account-item')}>
                            <AccountItem medium clear />
                        </div>
                        <div className={cx('account-item')}>
                            <AccountItem medium clear />
                        </div>
                        <div className={cx('account-item')}>
                            <AccountItem medium clear />
                        </div>
                    </div>
                )}
                onClickOutside={() => {
                    setshowResult(false);
                }}
            >
                <div className={cx('wrapper')}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} onClick={handleFocus} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm trên Facebook"
                        className={cx('input')}
                        value={searchValue}
                        onFocus={() => {
                            setshowResult(true);
                        }}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
