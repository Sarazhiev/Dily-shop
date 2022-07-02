import React from 'react';
import {findUser} from "../../../../redux/reducers/user";
import {useDispatch, useSelector} from "react-redux";




const CompilationCardLike = ({title, img, price, id}) => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();


    const addFav = () => {
        localStorage.setItem('user', JSON.stringify({
            ...user, favourites:
                user.favourites.findIndex(el => el.id === id) >= 0 ?
                    user.favourites.filter((el) => el.id !== id) :
                    [...user.favourites, {
                        image: img,
                        id,
                        title,
                        price,
                    }]
        }));

        dispatch(findUser({user: JSON.parse(localStorage.getItem('user'))}));
    };



    return (
        <span className="compilation__card-like" onClick={() => {
            addFav()
        }}>
             {
                 // console.log(user)
                 user?.favourites?.filter(el => el.id === id ).length ?
                     <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M8.03 3.09733L8.66451 4.10748L9.29987 3.09786C9.8688 2.19379 10.5294 1.69113 11.1634 1.46275C11.7973 1.23439 12.4552 1.26123 13.0617 1.50137C14.2792 1.98342 15.3308 3.35645 15.3308 5.29086C15.3308 5.90049 15.0098 6.70073 14.3879 7.63753C13.7801 8.55309 12.9499 9.50359 12.0788 10.3932C11.2107 11.2796 10.3195 12.0879 9.6002 12.7209C9.34182 12.9483 9.10813 13.1508 8.90427 13.3275C8.82359 13.3975 8.74758 13.4634 8.67656 13.5251C8.67057 13.5303 8.6646 13.5355 8.65864 13.5407C8.64895 13.5326 8.63923 13.5244 8.62948 13.5163C8.52575 13.4293 8.41384 13.3361 8.29316 13.2357C8.10561 13.0795 7.89688 12.9057 7.66481 12.7103C6.91217 12.0764 5.97713 11.2675 5.06524 10.3803C4.15002 9.48994 3.27704 8.53888 2.6378 7.62307C1.98227 6.68394 1.64941 5.88913 1.64941 5.29086C1.64941 3.36814 2.76258 1.98439 4.0806 1.49436C5.35678 1.01988 6.92862 1.34392 8.03 3.09733Z" fill="#00C65E" stroke="#00C65E" strokeWidth="1.5"/>
                     </svg> :

                     <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.95639 2.37161L8.29009 2.87804L8.62422 2.3719C9.87742 0.473542 11.6294 0.0948946 13.0509 0.63139C14.4953 1.17655 15.6696 2.69254 15.6696 4.74398C15.6696 5.45358 15.2853 6.32286 14.6209 7.27687C13.9651 8.21854 13.0763 9.18711 12.1545 10.0844C11.2345 10.98 10.2917 11.795 9.53402 12.4306C9.26185 12.6589 9.01493 12.863 8.80078 13.0399C8.71643 13.1096 8.63716 13.1751 8.56344 13.2362C8.46272 13.3197 8.36974 13.3972 8.28792 13.4666C8.20168 13.3955 8.10344 13.3165 7.99731 13.2317C7.89077 13.1465 7.77408 13.0539 7.64771 12.9536C7.44979 12.7965 7.22814 12.6206 6.98469 12.4251C6.19238 11.7891 5.20356 10.9737 4.23745 10.0777C3.26943 9.17999 2.33491 8.21105 1.64523 7.26916C0.945605 6.31368 0.544043 5.44728 0.544043 4.74398C0.544043 2.69125 1.79598 1.16897 3.34062 0.621516C4.86843 0.0800294 6.71146 0.482269 7.95639 2.37161Z" stroke="#00C65E" strokeWidth="0.8"/></svg>

             }
        </span>
    );
};

export default CompilationCardLike;