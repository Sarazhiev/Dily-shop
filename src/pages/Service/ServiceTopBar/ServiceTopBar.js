import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'


const ServiceTopBar = () => {
    return (
        <>

            <ul className={'header-under__list'}>
                <li className={'header-under__item'}>
                    <span>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7772 13.5635L5.8575 4.12848C5.8575 4.04077 5.77526 3.76665 5.72592 3.44868C5.69976 2.89206 5.48959 2.35986 5.12835 1.93557C4.48693 1.32155 3.59331 0.882968 2.90254 1.07485L3.74133 1.96298C3.86542 2.07601 3.96513 2.21318 4.03437 2.36609C4.1036 2.519 4.1409 2.68442 4.14398 2.85225C4.14706 3.02007 4.11585 3.18676 4.05228 3.3421C3.9887 3.49744 3.89409 3.63818 3.77423 3.75569C3.64992 3.86471 3.50453 3.947 3.34707 3.99747C3.18962 4.04793 3.02348 4.06548 2.85896 4.04903C2.69444 4.03258 2.53506 3.98247 2.39071 3.90183C2.24637 3.82119 2.12015 3.71173 2.0199 3.58025L1.1811 2.69212C0.923437 3.37193 1.33461 4.28747 1.90477 4.96179C2.3109 5.35366 2.83513 5.60036 3.39595 5.66353C3.77971 5.75124 4.10317 5.84444 4.10317 5.84444L12.9845 15.2466C12.9038 15.614 12.9146 15.9956 13.0159 16.3579C13.1172 16.7202 13.306 17.0521 13.5656 17.3244C13.7661 17.5382 14.0068 17.7104 14.2738 17.8312C14.5409 17.9521 14.8291 18.0191 15.1221 18.0285C15.4151 18.0379 15.7071 17.9895 15.9813 17.8861C16.2556 17.7827 16.5068 17.6263 16.7207 17.4258C16.9345 17.2253 17.1067 16.9846 17.2275 16.7175C17.3484 16.4505 17.4154 16.1622 17.4248 15.8693C17.4342 15.5763 17.3858 15.2843 17.2824 15.01C17.179 14.7358 17.0226 14.4845 16.8221 14.2707C16.5647 13.9951 16.2438 13.7866 15.8874 13.6633C15.531 13.5401 15.1499 13.5058 14.7772 13.5635Z" fill="white" stroke="#00C65E" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.6966 1.90154L16.2306 1.43555L16.121 1.54519L13.7033 3.35983L13.9938 3.65039L9.56961 8.09653L8.676 7.2084L8.12777 7.75663L8.35255 8.30486L7.80432 8.85309L1.57643 15.1248C1.31765 15.3848 1.17236 15.7366 1.17236 16.1034C1.17236 16.4702 1.31765 16.8221 1.57643 17.082L1.7409 17.252C1.86972 17.3809 2.02269 17.4832 2.19108 17.553C2.35946 17.6228 2.53995 17.6588 2.72223 17.6588C2.90451 17.6588 3.085 17.6228 3.25339 17.553C3.42177 17.4832 3.57475 17.3809 3.70356 17.252L10.4961 10.4978L11.0444 10.7225L11.5926 10.1743L10.7044 9.28619L15.1944 4.84005L15.4905 5.13061L17.3216 2.72937L17.4257 2.61972L16.9543 2.14824L16.6966 1.90154Z" fill="white" stroke="#00C65E" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.16625 9.26529L8.8574 8.95312L8.70796 9.10589L8.78766 9.30182L8.5884 9.50108L4.99319 13.1096C4.94801 13.1543 4.91214 13.2076 4.88766 13.2663C4.86319 13.325 4.85059 13.388 4.85059 13.4516C4.85059 13.5152 4.86319 13.5782 4.88766 13.6369C4.91214 13.6956 4.94801 13.7489 4.99319 13.7937L5.05297 13.8535C5.09774 13.8987 5.15102 13.9345 5.20973 13.959C5.26844 13.9835 5.33142 13.9961 5.39503 13.9961C5.45863 13.9961 5.52161 13.9835 5.58032 13.959C5.63903 13.9345 5.69231 13.8987 5.73708 13.8535L9.54151 10.059L9.73413 10.1387L9.88357 9.98594L9.5714 9.67377L9.16625 9.26529Z" fill="#00C65E"/>
                        <path d="M16.0981 16.3812C15.9806 16.5677 15.8103 16.7149 15.6089 16.8041C15.4074 16.8933 15.1839 16.9205 14.9669 16.8821C14.75 16.8437 14.5493 16.7416 14.3907 16.5887C14.232 16.4358 14.1225 16.2391 14.0761 16.0237C14.0297 15.8083 14.0486 15.584 14.1303 15.3794C14.2119 15.1747 14.3527 14.9991 14.5347 14.8748C14.7166 14.7505 14.9315 14.6833 15.1518 14.6817C15.3722 14.6801 15.588 14.7441 15.7717 14.8657C15.8928 14.9437 15.9972 15.0448 16.0791 15.1632C16.1611 15.2816 16.2188 15.415 16.2491 15.5558C16.2795 15.6966 16.2817 15.8419 16.2558 15.9835C16.2299 16.1252 16.1763 16.2603 16.0981 16.3812Z" fill="#00C65E"/>
                        </svg>

                    </span> Что мы чиним
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.23466 5.00741L1.5409 8.83129C1.28588 9.09529 0.872391 9.0953 0.617367 8.8313C0.362343 8.5673 0.362353 8.13927 0.617374 7.87527L3.84944 4.52947L0.617045 1.18333C0.36202 0.919331 0.36203 0.491295 0.617052 0.227299C0.872074 -0.0366984 1.28556 -0.0367079 1.54058 0.227291L5.21966 4.03584C5.22483 4.04085 5.22963 4.04615 5.23467 4.05138C5.45749 4.28237 5.48559 4.63914 5.31833 4.90138C5.2944 4.93888 5.26655 4.9744 5.23466 5.00741Z" fill="#363A45"/></svg>
                </li>
                <li className={'header-under__item'}>
                    <span>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.63399 0.557905L8.63397 0.557926L8.63748 0.5603L15.2249 5.01509C15.4068 5.13849 15.5443 5.31714 15.6168 5.52465L15.9472 5.40908L15.6168 5.52465C15.6894 5.73217 15.6934 5.95753 15.628 6.16743C15.5627 6.37734 15.4315 6.56066 15.254 6.69029C15.0764 6.81993 14.8619 6.88901 14.642 6.88732C14.5487 6.88661 14.459 6.92317 14.3928 6.98888C14.3266 7.05459 14.2893 7.14402 14.2893 7.23731V16.3607C14.2893 16.4407 14.2576 16.5174 14.201 16.574C14.1444 16.6306 14.0677 16.6624 13.9877 16.6624H2.13912H2.13907C2.05688 16.6624 1.97797 16.6301 1.91933 16.5725L1.67408 16.8222L1.91933 16.5725C1.8613 16.5155 1.82772 16.4382 1.82561 16.357V7.23731C1.82561 7.04415 1.66912 6.88751 1.47595 6.88731C1.25687 6.8871 1.04363 6.81665 0.867535 6.68632C0.691438 6.55599 0.561761 6.37264 0.497541 6.16318C0.433321 5.95372 0.43794 5.7292 0.510721 5.52256C0.583482 5.31598 0.720536 5.13815 0.901772 5.01518C0.901821 5.01514 0.901869 5.01511 0.901918 5.01508L7.48931 0.5603L7.48932 0.560321L7.4928 0.557905C7.66035 0.441615 7.85944 0.379297 8.06339 0.379297C8.26735 0.379297 8.46643 0.441615 8.63399 0.557905Z" stroke="#363A45" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.5635 8.67188C11.5635 11.3681 8.06348 14.9219 8.06348 14.9219C8.06348 14.9219 4.56348 11.3681 4.56348 8.67188C4.56348 7.67731 4.93223 6.72349 5.5886 6.02022C6.24498 5.31696 7.13522 4.92188 8.06348 4.92188C8.99173 4.92188 9.88197 5.31696 10.5384 6.02022C11.1947 6.72349 11.5635 7.67731 11.5635 8.67188Z" fill="#00C65E"/>
                        <ellipse cx="8.06336" cy="8.73664" rx="1.87" ry="1.97883" fill="white"/>
                        </svg>

                    </span>Адреса сервисов
                </li>
            </ul>

            <div className={'header-under-left'}>
                <div className='header-under__cont'>
                    <span className='header-under__icon'><AiOutlineSearch/></span>
                    <input className='header-under__search' placeholder='Я хочу купить' type="text"/>
                    <button className='header-under__btn'>Найти</button>
                </div>
                <button className='header-under__add'>Заказать ремонт</button>
            </div>
        </>
    );
};

export default ServiceTopBar;