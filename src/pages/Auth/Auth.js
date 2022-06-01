import React from 'react';
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Google from "./RegisterOrLoginFromSocials/Google/Google";

const Auth = () => {
    return (
        <div className='auth'>
            <div className='auth__left'>
                <h2 className='auth__title'><svg width="150" height="63" viewBox="0 0 150 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 18.2429H15.1677V51.7099H21.4728C35.6206 51.7099 42.6918 44.836 42.6863 31.088C42.6863 17.621 36.1212 10.8899 22.991 10.8949H20.3423V0L22.2361 0C33.53 0 42.3046 2.71016 48.56 8.13049C54.8153 13.5508 57.9402 21.0974 57.9347 30.7702C57.9347 41.0688 54.6964 48.953 48.2198 54.4226C41.7432 59.8922 32.3685 62.6442 20.0957 62.6787H0.5V18.2429Z" fill="white"/>
                    <path d="M15.176 0H0.5V13.0753H15.176V0Z" fill="white"/>
                    <path d="M71.9651 26.3898H66.9361V44.6177H71.9651V26.3898ZM72.3282 21.1975C72.3282 20.3623 72.0559 19.6724 71.5294 19.1641C70.9847 18.6557 70.2585 18.4016 69.3508 18.4016C68.5156 18.4016 67.8439 18.6557 67.3355 19.1641C66.8272 19.6724 66.573 20.3623 66.573 21.1975C66.573 22.0326 66.809 22.7043 67.3174 23.2127C67.8257 23.721 68.4975 23.9752 69.3508 23.9752C70.2585 23.9752 70.9847 23.721 71.5294 23.2127C72.0559 22.7043 72.3282 22.0326 72.3282 21.1975ZM82.2047 18.5831H77.1757V44.6177H82.2047V18.5831ZM91.5001 45.7251C90.901 47.1049 89.848 47.7767 88.3411 47.7767C87.5968 47.7767 86.9795 47.6678 86.4893 47.4136V51.8616L86.8524 51.9887C87.1066 52.0976 87.4878 52.1884 88.0325 52.2792C88.559 52.3881 89.1036 52.4244 89.6483 52.4244C92.6984 52.4244 95.0404 50.1913 96.7107 45.7251L103.955 26.3898H98.7622L94.4776 38.4812L90.2111 26.3898H85.0006L92.0629 44.4361L91.5001 45.7251ZM103.737 42.203C103.737 42.9474 104.027 43.601 104.608 44.1456C105.189 44.7085 105.879 44.9808 106.714 44.9808C107.531 44.9808 108.239 44.7085 108.82 44.1456C109.401 43.601 109.692 42.9474 109.692 42.203C109.692 41.4587 109.401 40.8051 108.82 40.2423C108.239 39.6976 107.531 39.4071 106.714 39.4071C105.879 39.4071 105.189 39.6976 104.608 40.2423C104.027 40.8051 103.737 41.4587 103.737 42.203ZM124.561 26.2083H123.816C122.818 26.2083 121.874 26.4443 120.966 26.88C120.058 27.3339 119.477 27.697 119.205 27.9693C118.951 28.2417 118.733 28.4595 118.588 28.6229V26.3898H113.577V44.6177H118.588V35.885C118.588 34.3237 118.987 33.1254 119.75 32.2903C120.512 31.4551 121.565 31.0376 122.872 31.0376C123.617 31.0557 124.18 31.1284 124.543 31.2554L124.561 26.2083ZM139.63 44.6177H144.64V26.3898H139.63V36.0666C139.63 37.4464 139.285 38.4994 138.613 39.2256C137.941 39.9699 137.033 40.333 135.908 40.333C134.891 40.333 134.038 40.0063 133.366 39.3345C132.694 38.6809 132.368 37.8276 132.368 36.8109V26.3898H127.357V37.3011C127.357 39.625 128.01 41.495 129.317 42.8929C130.625 44.2909 132.331 44.9808 134.419 44.9808C135.399 44.9808 136.343 44.7811 137.251 44.3817C138.159 43.9822 138.74 43.6554 139.012 43.4013C139.266 43.1471 139.484 42.9474 139.63 42.7658V44.6177Z" fill="white"/>
                </svg></h2>
                <p className='auth__subtitle'>Супер доска объявлений</p>
                <ul className='auth__list'>
                    <li className='auth__item'><span><svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.28424" y="1.37799" width="19.5588" height="23.9706" rx="0.639284" fill="#00C65E" stroke="white"/>
<path d="M13.5188 22.8005V21.6869H12.729V20.8848H13.5188V20.1109H12.729V19.1106H13.5188V16.0625H15.5458C16.4022 16.0625 17.0303 16.2355 17.43 16.5815C17.836 16.9213 18.039 17.4057 18.039 18.0348C18.039 18.4249 17.9502 18.7772 17.7726 19.0918C17.5949 19.4063 17.3126 19.6548 16.9256 19.8373C16.545 20.0197 16.0438 20.1109 15.4221 20.1109H14.7369V20.8848H16.2405V21.6869H14.7369V22.8005H13.5188ZM15.2888 19.1106C15.752 19.1106 16.1199 19.032 16.3927 18.8747C16.6655 18.7174 16.8019 18.45 16.8019 18.0726C16.8019 17.7328 16.6909 17.4812 16.4689 17.3176C16.2532 17.1477 15.9201 17.0628 15.4697 17.0628H14.7369V19.1106H15.2888Z" fill="white"/>
<rect x="4.53223" y="4.83691" width="13.0623" height="1.57282" rx="0.78641" fill="white"/>
<rect x="4.53223" y="8.70654" width="13.0623" height="1.57282" rx="0.78641" fill="white"/>
<rect x="4.53223" y="12.5762" width="9.86658" height="1.57282" rx="0.78641" fill="white"/>
<rect x="4.53223" y="16.4465" width="6.94971" height="1.57282" rx="0.78641" fill="white"/>
<rect x="4.53223" y="20.3154" width="3.7079" height="1.57282" rx="0.78641" fill="white"/>
</svg>
</span> Размещайте объявления бесплатно</li>
                    <li className='auth__item'><span><svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1658_49718" fill="white">
<path d="M15.7506 19.3987C14.606 21.0567 11.9483 22.2185 8.85254 22.2185C5.75682 22.2185 3.09926 21.0568 1.95463 19.3988C1.87434 19.5151 1.80149 19.6339 1.73646 19.7548H1.354V21.3461H1.35669C1.46217 23.8539 4.77784 25.8667 8.85264 25.8667C12.9274 25.8667 16.2431 23.8539 16.3486 21.3461H16.3511V21.2464L16.3512 21.2228L16.3511 21.1993V19.7548H15.9688C15.9038 19.6338 15.8309 19.515 15.7506 19.3987Z"/>
</mask>
<path d="M15.7506 19.3987C14.606 21.0567 11.9483 22.2185 8.85254 22.2185C5.75682 22.2185 3.09926 21.0568 1.95463 19.3988C1.87434 19.5151 1.80149 19.6339 1.73646 19.7548H1.354V21.3461H1.35669C1.46217 23.8539 4.77784 25.8667 8.85264 25.8667C12.9274 25.8667 16.2431 23.8539 16.3486 21.3461H16.3511V21.2464L16.3512 21.2228L16.3511 21.1993V19.7548H15.9688C15.9038 19.6338 15.8309 19.515 15.7506 19.3987Z" fill="#00C65E"/>
<path d="M15.7506 19.3987L16.5976 18.8139C16.4054 18.5355 16.0888 18.3694 15.7505 18.3694C15.4123 18.3694 15.0956 18.5356 14.9035 18.8139L15.7506 19.3987ZM1.95463 19.3988L2.80167 18.814C2.6095 18.5357 2.29284 18.3695 1.9546 18.3695C1.61636 18.3695 1.29971 18.5357 1.10756 18.8141L1.95463 19.3988ZM1.73646 19.7548V20.7841C2.11537 20.7841 2.46364 20.576 2.64306 20.2422L1.73646 19.7548ZM1.354 19.7548V18.7255C0.785536 18.7255 0.324702 19.1864 0.324702 19.7548H1.354ZM1.354 21.3461H0.324702C0.324702 21.9145 0.785536 22.3754 1.354 22.3754L1.354 21.3461ZM1.35669 21.3461L2.38508 21.3028C2.3619 20.7516 1.90833 20.3168 1.35669 20.3168V21.3461ZM16.3486 21.3461V20.3168C15.7969 20.3168 15.3434 20.7516 15.3202 21.3028L16.3486 21.3461ZM16.3511 21.3461V22.3754C16.9196 22.3754 17.3804 21.9145 17.3804 21.3461H16.3511ZM16.3511 21.2464L15.3218 21.2423V21.2464H16.3511ZM16.3512 21.2228L17.3805 21.227L17.3805 21.2187L16.3512 21.2228ZM16.3511 21.1993H15.3218L15.3218 21.2034L16.3511 21.1993ZM16.3511 19.7548H17.3804C17.3804 19.1864 16.9196 18.7255 16.3511 18.7255V19.7548ZM15.9688 19.7548L15.0622 20.2422C15.2416 20.576 15.5899 20.7841 15.9688 20.7841V19.7548ZM14.9035 18.8139C14.0223 20.0904 11.7586 21.1892 8.85254 21.1892V23.2478C12.1381 23.2478 15.1896 22.023 16.5976 19.9834L14.9035 18.8139ZM8.85254 21.1892C5.94655 21.1892 3.68289 20.0904 2.80167 18.814L1.10758 19.9836C2.51562 22.0231 5.5671 23.2478 8.85254 23.2478V21.1892ZM1.10756 18.8141C1.00654 18.9604 0.913657 19.1116 0.829861 19.2675L2.64306 20.2422C2.68932 20.1562 2.74213 20.0699 2.8017 19.9836L1.10756 18.8141ZM1.73646 18.7255H1.354V20.7841H1.73646V18.7255ZM0.324702 19.7548V21.3461H2.38331V19.7548H0.324702ZM1.354 22.3754H1.35669V20.3168H1.354V22.3754ZM0.328294 21.3893C0.400861 23.1146 1.56517 24.51 3.08381 25.4278C4.61927 26.3557 6.65694 26.896 8.85264 26.896V24.8374C6.97354 24.8374 5.31597 24.3714 4.14853 23.6659C2.96426 22.9502 2.41799 22.0853 2.38508 21.3028L0.328294 21.3893ZM8.85264 26.896C11.0483 26.896 13.086 26.3557 14.6215 25.4278C16.1401 24.51 17.3044 23.1146 17.377 21.3893L15.3202 21.3028C15.2873 22.0853 14.741 22.9502 13.5567 23.6659C12.3893 24.3714 10.7317 24.8374 8.85264 24.8374V26.896ZM16.3486 22.3754H16.3511V20.3168H16.3486V22.3754ZM17.3804 21.3461V21.2464H15.3218V21.3461H17.3804ZM17.3804 21.2505L17.3805 21.227L15.3219 21.2187L15.3218 21.2423L17.3804 21.2505ZM17.3805 21.2187L17.3804 21.1951L15.3218 21.2034L15.3219 21.227L17.3805 21.2187ZM17.3804 21.1993V19.7548H15.3218V21.1993H17.3804ZM16.3511 18.7255H15.9688V20.7841H16.3511V18.7255ZM16.8754 19.2675C16.7916 19.1115 16.6987 18.9603 16.5976 18.8139L14.9035 19.9835C14.9631 20.0698 15.0159 20.1561 15.0622 20.2422L16.8754 19.2675Z" fill="white" mask="url(#path-1-inside-1_1658_49718)"/>
<path d="M15.8374 19.5979C15.8374 20.5452 15.1747 21.4982 13.8967 22.2429C12.6314 22.9801 10.8495 23.4527 8.85352 23.4527C6.8575 23.4527 5.07562 22.9801 3.81036 22.2429C2.53236 21.4982 1.86963 20.5452 1.86963 19.5979C1.86963 18.6507 2.53236 17.6976 3.81036 16.9529C5.07562 16.2157 6.8575 15.7432 8.85352 15.7432C10.8495 15.7432 12.6314 16.2157 13.8967 16.9529C15.1747 17.6976 15.8374 18.6507 15.8374 19.5979Z" fill="#00C65E" stroke="white" />
<mask id="path-4-inside-2_1658_49718" fill="white">
<path d="M8.0857 9.38256C9.53894 7.83371 11.0936 6.22446 12.1456 5.26733C14.1445 3.4486 15.4093 2.63083 15.845 2.37143C15.9552 2.30579 16.0837 2.28153 16.2048 2.32382C16.2941 2.35502 16.4107 2.4053 16.5447 2.48573L17.1094 1.97199C17.0473 1.63255 17.133 1.29924 17.3723 1.08145C17.7804 0.710198 18.4805 0.815184 18.9361 1.31594C19.3917 1.8167 19.4303 2.52361 19.0223 2.89486C18.783 3.11256 18.4433 3.1665 18.1113 3.0729L17.5618 3.57292C17.6505 3.74325 17.6987 3.88816 17.7249 3.99449C17.7555 4.11906 17.7193 4.24467 17.6436 4.34823C17.3443 4.75748 16.411 5.93969 14.4121 7.75841C13.3602 8.71554 11.6117 10.1118 9.93283 11.4127L12.4267 14.1536C12.6794 14.4314 12.6591 14.8614 12.3814 15.1141L8.88752 18.2931C8.60977 18.5458 8.17975 18.5255 7.92704 18.2477L0.946549 10.5757C0.693837 10.298 0.714132 9.86796 0.991879 9.61524L4.48576 6.43629C4.76351 6.18358 5.19353 6.20387 5.44624 6.48162L8.0857 9.38256Z"/>
</mask>
<path d="M8.0857 9.38256C9.53894 7.83371 11.0936 6.22446 12.1456 5.26733C14.1445 3.4486 15.4093 2.63083 15.845 2.37143C15.9552 2.30579 16.0837 2.28153 16.2048 2.32382C16.2941 2.35502 16.4107 2.4053 16.5447 2.48573L17.1094 1.97199C17.0473 1.63255 17.133 1.29924 17.3723 1.08145C17.7804 0.710198 18.4805 0.815184 18.9361 1.31594C19.3917 1.8167 19.4303 2.52361 19.0223 2.89486C18.783 3.11256 18.4433 3.1665 18.1113 3.0729L17.5618 3.57292C17.6505 3.74325 17.6987 3.88816 17.7249 3.99449C17.7555 4.11906 17.7193 4.24467 17.6436 4.34823C17.3443 4.75748 16.411 5.93969 14.4121 7.75841C13.3602 8.71554 11.6117 10.1118 9.93283 11.4127L12.4267 14.1536C12.6794 14.4314 12.6591 14.8614 12.3814 15.1141L8.88752 18.2931C8.60977 18.5458 8.17975 18.5255 7.92704 18.2477L0.946549 10.5757C0.693837 10.298 0.714132 9.86796 0.991879 9.61524L4.48576 6.43629C4.76351 6.18358 5.19353 6.20387 5.44624 6.48162L8.0857 9.38256Z" fill="#00C65E"/>
<path d="M12.1456 5.26733L12.8383 6.02866V6.02866L12.1456 5.26733ZM8.0857 9.38256L7.32437 10.0753L8.07408 10.8992L8.83632 10.0869L8.0857 9.38256ZM15.845 2.37143L16.3716 3.25582V3.25582L15.845 2.37143ZM16.2048 2.32382L16.544 1.35204L16.544 1.35204L16.2048 2.32382ZM16.5447 2.48573L16.0152 3.36838L16.6714 3.76205L17.2374 3.24706L16.5447 2.48573ZM17.1094 1.97199L17.8021 2.73332L18.2246 2.34884L18.1219 1.78684L17.1094 1.97199ZM17.3723 1.08145L16.6796 0.320117L16.6796 0.320121L17.3723 1.08145ZM18.9361 1.31594L19.6974 0.623238V0.623238L18.9361 1.31594ZM19.0223 2.89486L18.3296 2.13353V2.13353L19.0223 2.89486ZM18.1113 3.0729L18.3907 2.08222L17.841 1.92724L17.4186 2.31157L18.1113 3.0729ZM17.5618 3.57292L16.8691 2.81159L16.2827 3.34509L16.6488 4.04823L17.5618 3.57292ZM17.7249 3.99449L18.7243 3.74826L18.7243 3.74824L17.7249 3.99449ZM17.6436 4.34823L18.4744 4.9558L18.4744 4.9558L17.6436 4.34823ZM14.4121 7.75841L15.1048 8.51974V8.51974L14.4121 7.75841ZM9.93283 11.4127L9.30236 10.5991L8.42179 11.2814L9.1715 12.1054L9.93283 11.4127ZM12.4267 14.1536L13.1881 13.4609L13.1881 13.4609L12.4267 14.1536ZM12.3814 15.1141L13.0741 15.8754H13.0741L12.3814 15.1141ZM8.88752 18.2931L9.58022 19.0544H9.58022L8.88752 18.2931ZM7.92704 18.2477L7.16571 18.9405L7.16571 18.9405L7.92704 18.2477ZM0.946549 10.5757L1.70788 9.88302L1.70788 9.88302L0.946549 10.5757ZM0.991879 9.61524L1.68458 10.3766L1.68458 10.3766L0.991879 9.61524ZM4.48576 6.43629L5.17847 7.19762H5.17847L4.48576 6.43629ZM5.44624 6.48162L4.68491 7.17432L4.68491 7.17433L5.44624 6.48162ZM11.4529 4.506C10.3671 5.49389 8.78698 7.13085 7.33508 8.67827L8.83632 10.0869C10.2909 8.53657 11.8202 6.95502 12.8383 6.02866L11.4529 4.506ZM15.3183 1.48705C14.818 1.78497 13.4981 2.64517 11.4529 4.506L12.8383 6.02866C14.7909 4.25203 16.0007 3.47668 16.3716 3.25582L15.3183 1.48705ZM16.544 1.35204C16.0736 1.18781 15.6279 1.30269 15.3183 1.48705L16.3716 3.25582C16.2824 3.30889 16.0937 3.37525 15.8655 3.2956L16.544 1.35204ZM17.0742 1.60308C16.8765 1.48444 16.6958 1.405 16.544 1.35204L15.8655 3.2956C15.8925 3.30503 15.9448 3.32615 16.0152 3.36838L17.0742 1.60308ZM16.4167 1.21066L15.852 1.7244L17.2374 3.24706L17.8021 2.73332L16.4167 1.21066ZM16.6796 0.320121C16.1238 0.82587 15.9851 1.54601 16.0968 2.15714L18.1219 1.78684C18.1163 1.75631 18.1217 1.74907 18.1177 1.76309C18.1156 1.77058 18.111 1.78308 18.1017 1.79831C18.0923 1.81383 18.0799 1.82928 18.065 1.84277L16.6796 0.320121ZM19.6974 0.623238C18.9986 -0.144854 17.6464 -0.559542 16.6796 0.320117L18.065 1.84278C18.0381 1.86728 18.009 1.88054 17.9888 1.8859C17.9707 1.8907 17.9681 1.88726 17.9837 1.88961C18.0183 1.8948 18.0965 1.9226 18.1748 2.00865L19.6974 0.623238ZM19.715 3.65619C20.6818 2.77652 20.3963 1.39133 19.6974 0.623238L18.1748 2.00865C18.2531 2.09469 18.2734 2.17516 18.2753 2.21006C18.2762 2.22588 18.273 2.22289 18.2795 2.20537C18.2867 2.18576 18.3026 2.15803 18.3296 2.13353L19.715 3.65619ZM17.832 4.06357C18.4297 4.23211 19.1594 4.16172 19.715 3.65619L18.3296 2.13353C18.3444 2.12004 18.3609 2.10909 18.3773 2.10118C18.3933 2.09343 18.4062 2.09 18.4138 2.08858C18.4282 2.08591 18.4205 2.09064 18.3907 2.08222L17.832 4.06357ZM18.2545 4.33425L18.804 3.83423L17.4186 2.31157L16.8691 2.81159L18.2545 4.33425ZM18.7243 3.74824C18.6798 3.56758 18.6037 3.34517 18.4748 3.09761L16.6488 4.04823C16.6973 4.14132 16.7176 4.20874 16.7254 4.24073L18.7243 3.74824ZM18.4744 4.9558C18.6871 4.66493 18.8435 4.23204 18.7243 3.74826L16.7254 4.24071C16.6676 4.00608 16.7515 3.8244 16.8127 3.74066L18.4744 4.9558ZM15.1048 8.51974C17.15 6.65891 18.1307 5.42583 18.4744 4.9558L16.8127 3.74066C16.5579 4.08912 15.6721 5.22046 13.7194 6.99708L15.1048 8.51974ZM10.5633 12.2263C12.2406 10.9266 14.0191 9.50763 15.1048 8.51974L13.7194 6.99708C12.7013 7.92345 10.9827 9.29695 9.30236 10.5991L10.5633 12.2263ZM9.1715 12.1054L11.6654 14.8463L13.1881 13.4609L10.6942 10.72L9.1715 12.1054ZM11.6654 14.8463C11.5355 14.7036 11.546 14.4826 11.6887 14.3528L13.0741 15.8754C13.7723 15.2402 13.8233 14.1592 13.1881 13.4609L11.6654 14.8463ZM11.6887 14.3528L8.19481 17.5317L9.58022 19.0544L13.0741 15.8754L11.6887 14.3528ZM8.19481 17.5317C8.33753 17.4019 8.5585 17.4123 8.68836 17.555L7.16571 18.9405C7.80099 19.6387 8.882 19.6897 9.58022 19.0544L8.19481 17.5317ZM8.68837 17.555L1.70788 9.88302L0.18522 11.2684L7.16571 18.9405L8.68837 17.555ZM1.70788 9.88302C1.83774 10.0257 1.82731 10.2467 1.68458 10.3766L0.299174 8.85392C-0.399044 9.4892 -0.450063 10.5702 0.18522 11.2684L1.70788 9.88302ZM1.68458 10.3766L5.17847 7.19762L3.79306 5.67496L0.299174 8.85392L1.68458 10.3766ZM5.17847 7.19762C5.03574 7.32748 4.81477 7.31705 4.68491 7.17432L6.20757 5.78892C5.57229 5.0907 4.49127 5.03968 3.79306 5.67496L5.17847 7.19762ZM4.68491 7.17433L7.32437 10.0753L8.84703 8.68986L6.20757 5.78891L4.68491 7.17433Z" fill="white" mask="url(#path-4-inside-2_1658_49718)"/>
</svg>
</span> Продавайте на аукционе</li>
                    <li className='auth__item'><span><svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8789 19.2956L7.76197 5.42081C7.76197 5.29182 7.64104 4.88872 7.56848 4.42112C7.53001 3.60258 7.22093 2.81995 6.68972 2.196C5.74647 1.29306 4.43236 0.648096 3.41654 0.930267L4.65003 2.23631C4.83251 2.40254 4.97914 2.60425 5.08095 2.82911C5.18277 3.05397 5.23761 3.29724 5.24214 3.54403C5.24667 3.79083 5.20078 4.03595 5.10729 4.26439C5.01379 4.49283 4.87466 4.69979 4.6984 4.8726C4.5156 5.03292 4.30179 5.15394 4.07025 5.22815C3.83871 5.30235 3.59438 5.32816 3.35244 5.30397C3.11051 5.27977 2.87613 5.2061 2.66387 5.08751C2.4516 4.96892 2.26599 4.80795 2.11856 4.61461L0.885067 3.30856C0.506152 4.30825 1.1108 5.65461 1.94925 6.64624C2.54649 7.22251 3.31741 7.58529 4.14212 7.67818C4.70647 7.80717 5.18213 7.94423 5.18213 7.94423L18.2426 21.7706C18.124 22.3109 18.1398 22.8722 18.2888 23.4049C18.4378 23.9377 18.7154 24.4257 19.0972 24.8261C19.392 25.1405 19.7459 25.3938 20.1387 25.5715C20.5314 25.7492 20.9553 25.8477 21.3861 25.8616C21.817 25.8754 22.2463 25.8043 22.6497 25.6522C23.053 25.5001 23.4224 25.2701 23.7369 24.9752C24.0513 24.6804 24.3046 24.3265 24.4823 23.9338C24.6599 23.541 24.7585 23.1171 24.7724 22.6863C24.7862 22.2555 24.7151 21.8261 24.563 21.4228C24.4109 21.0194 24.1809 20.65 23.886 20.3356C23.5075 19.9302 23.0356 19.6236 22.5115 19.4423C21.9874 19.2611 21.4269 19.2107 20.8789 19.2956Z" fill="#00C65E" stroke="white"/>
<path d="M23.7023 2.14597L23.017 1.46069L22.8558 1.62193L19.3004 4.29046L19.7277 4.71775L13.2217 11.2561L11.9076 9.95L11.1014 10.7562L11.4319 11.5624L10.6257 12.3686L1.46726 21.5916C1.0867 21.9738 0.873047 22.4912 0.873047 23.0306C0.873047 23.57 1.0867 24.0875 1.46726 24.4697L1.70912 24.7196C1.89855 24.9093 2.12351 25.0597 2.37113 25.1624C2.61874 25.265 2.88417 25.3179 3.15222 25.3179C3.42027 25.3179 3.68569 25.265 3.93331 25.1624C4.18093 25.0597 4.40589 24.9093 4.59532 24.7196L14.5842 14.7872L15.3904 15.1178L16.1966 14.3116L14.8905 13.0055L21.4933 6.46721L21.9287 6.8945L24.6214 3.36333L24.7746 3.20209L24.0812 2.50876L23.7023 2.14597Z" fill="#00C65E" stroke="white"/>
<path d="M12.6272 12.974L12.173 12.5149L11.9532 12.7395L12.0705 13.0277L11.7774 13.3207L6.49047 18.6272C6.42403 18.693 6.37128 18.7714 6.33529 18.8577C6.29929 18.9441 6.28076 19.0367 6.28076 19.1302C6.28076 19.2238 6.29929 19.3164 6.33529 19.4027C6.37128 19.489 6.42403 19.5674 6.49047 19.6332L6.57838 19.7211C6.64422 19.7876 6.72257 19.8403 6.8089 19.8763C6.89524 19.9123 6.98785 19.9308 7.08139 19.9308C7.17493 19.9308 7.26755 19.9123 7.35388 19.8763C7.44022 19.8403 7.51857 19.7876 7.58441 19.7211L13.179 14.1411L13.4623 14.2584L13.6821 14.0337L13.223 13.5746L12.6272 12.974Z" fill="#00C65E"/>
<path d="M22.8215 23.4395C22.6488 23.7137 22.3983 23.9302 22.102 24.0614C21.8058 24.1925 21.4771 24.2325 21.1581 24.1761C20.839 24.1197 20.544 23.9695 20.3106 23.7446C20.0773 23.5198 19.9163 23.2306 19.8481 22.9138C19.7798 22.597 19.8076 22.2671 19.9277 21.9662C20.0478 21.6653 20.2548 21.407 20.5224 21.2242C20.79 21.0415 21.1059 20.9426 21.4299 20.9402C21.754 20.9379 22.0713 21.0321 22.3416 21.2109C22.5195 21.3256 22.6732 21.4742 22.7936 21.6484C22.9141 21.8225 22.999 22.0187 23.0436 22.2257C23.0882 22.4327 23.0915 22.6464 23.0534 22.8547C23.0153 23.063 22.9365 23.2617 22.8215 23.4395Z" fill="white"/>
</svg>
</span> Ремонтируйте свою технику </li>
                    <li className='auth__item'><span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4759 22.6586C17.8203 23.1925 18.3715 23.7999 18.8423 24.2787C19.1437 24.5853 18.9295 25.1287 18.4995 25.1287H8.04365C7.61365 25.1287 7.39942 24.5853 7.70087 24.2787C8.1716 23.7999 8.72287 23.1925 9.06728 22.6586C9.76638 21.5747 10.004 19.8767 10.004 19.8767H16.5391C16.5391 19.8767 16.7768 21.5747 17.4759 22.6586Z" fill="#00C65E" stroke="white" />
<mask id="path-2-inside-1_1658_49724" fill="white">
<rect x="2.89551" y="4.68042" width="20.751" height="16.5044" rx="0.936552"/>
</mask>
<rect x="2.89551" y="4.68042" width="20.751" height="16.5044" rx="0.936552" fill="#00C65E" stroke="white"  mask="url(#path-2-inside-1_1658_49724)"/>
<path d="M6.42217 18.8642C5.14586 18.5438 4.76904 17.1506 4.76904 15.9478C4.76904 11.5872 6.11018 11.9541 6.06561 9.64143C6.00484 6.53467 7.5121 6.25604 8.06719 6.39071C14.3637 7.97428 17.9049 6.8551 17.9049 6.8551C20.336 6.30712 15.4738 11.3597 17.9049 16.5144C19.2501 19.4215 8.5372 19.3936 6.42217 18.8642Z" fill="#00C65E"/>
<mask id="path-4-inside-2_1658_49724" fill="white">
<rect x="2.89551" y="0.863281" width="20.751" height="4.44311" rx="0.936552"/>
</mask>
<rect x="2.89551" y="0.863281" width="20.751" height="4.44311" rx="0.936552" fill="#00C65E" stroke="white"  mask="url(#path-4-inside-2_1658_49724)"/>
<path d="M3.1761 4.5918C3.23204 4.41714 3.39443 4.29864 3.57784 4.29864H22.962C23.1454 4.29864 23.3078 4.41714 23.3637 4.5918L24.8886 9.35236C24.9758 9.62459 24.7727 9.90289 24.4869 9.90289H2.05295C1.7671 9.90289 1.56401 9.62459 1.65121 9.35236L3.1761 4.5918L2.68592 4.43479L3.1761 4.5918Z" fill="#00C65E" stroke="white"/>
<rect x="12.7383" y="3.92578" width="1.06244" height="6.12904" fill="white"/>
<path d="M18.3521 3.92578H19.4145L20.4769 10.0548H19.4145L18.3521 3.92578Z" fill="white"/>
<path d="M8.18555 3.92578H7.12311L6.06067 10.0548H7.12311L8.18555 3.92578Z" fill="white"/>
</svg>
</span> Откройте свой магазин</li>
                    <li className='auth__item'><span><svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7543 10.2084L13.2685 10.2317L13.2685 10.2316L13.2685 10.231L13.2686 10.2287L13.269 10.2196L13.2706 10.1841L13.2768 10.0482L13.2989 9.55462C13.3174 9.14124 13.3424 8.57812 13.3685 7.9792C13.4205 6.78332 13.477 5.43882 13.4941 4.86236C13.5109 4.29353 13.5615 3.61832 13.73 3.10568C13.8139 2.85032 13.9133 2.67977 14.0134 2.58127C14.0973 2.49865 14.189 2.45671 14.3307 2.46473C14.3404 2.46528 14.3501 2.46555 14.3598 2.46555C14.4787 2.46555 14.5601 2.49005 14.626 2.53192C14.6942 2.57523 14.7848 2.66207 14.8794 2.84963C15.0784 3.24456 15.2425 3.97965 15.2922 5.28514C15.3423 6.60446 15.3852 7.83936 15.4155 8.74449C15.4307 9.19702 15.4427 9.56707 15.4509 9.82395L15.4603 10.1205L15.4628 10.198L15.4634 10.2177L15.4635 10.2227L15.4636 10.2239L15.4636 10.2243L15.4636 10.2243L15.9781 10.2084L15.4636 10.2243C15.4722 10.5018 15.6992 10.7225 15.9768 10.7232C16.2544 10.7238 16.4825 10.5043 16.4924 10.2269L16.6099 6.94912C16.6595 5.89862 16.8479 5.42017 17.0121 5.20753C17.1403 5.04149 17.2858 4.99565 17.5266 4.99565C17.6245 4.99565 17.6812 5.0131 17.7249 5.04036C17.7699 5.06844 17.8493 5.13714 17.9378 5.32229C18.1257 5.71545 18.2913 6.49611 18.3261 7.99316L18.3012 17.0121C18.2977 17.0871 18.2943 17.1613 18.291 17.2347C18.2437 18.2695 18.2035 19.1507 18.1051 19.9194C17.9998 20.7425 17.8322 21.3936 17.5449 21.9235C17.5403 21.932 17.5359 21.9407 17.5317 21.9495C17.4545 22.1136 17.3485 22.3481 17.2252 22.6209C16.8916 23.359 16.4314 24.3772 16.0717 25.037L8.32313 25.037C7.51792 23.5468 6.67099 22.1609 6.12251 21.3343C5.40681 20.163 4.25135 17.6873 3.26169 15.4697C2.76882 14.3653 2.32171 13.3355 1.99778 12.5817C1.83584 12.2049 1.70474 11.8972 1.61417 11.6838C1.56889 11.5771 1.53375 11.4939 1.50995 11.4376L1.48291 11.3735L1.47606 11.3572L1.47449 11.3535L1.47436 11.3532L1.47435 11.3531L1.4742 11.3528L1.47409 11.3525L1.47395 11.3521L1.47393 11.3521L1.46995 11.3421C1.46606 11.3322 1.45988 11.3161 1.4521 11.2945C1.43647 11.2514 1.41465 11.1872 1.39185 11.1082C1.34545 10.9473 1.29899 10.7384 1.28713 10.5262C1.27504 10.3099 1.30097 10.1268 1.36509 9.99117C1.42091 9.87309 1.51661 9.76441 1.71982 9.69324C1.84649 9.64887 1.98595 9.6578 2.15873 9.73575C2.33933 9.81724 2.52855 9.96344 2.71008 10.1457C2.88848 10.3247 3.03973 10.5186 3.14761 10.6704C3.201 10.7456 3.24247 10.8087 3.27001 10.8519C3.28376 10.8736 3.29396 10.8901 3.30037 10.9007L3.30709 10.9118L3.3073 10.9122L5.51642 14.7885C5.63203 14.9913 5.86972 15.0909 6.09543 15.0311C6.32114 14.9713 6.47832 14.7671 6.47832 14.5336L6.47832 6.42734C6.47832 5.4364 6.58024 4.71849 6.74314 4.26426C6.9041 3.81546 7.05793 3.77644 7.10025 3.77268C7.23293 3.77528 7.34458 3.8286 7.46808 4.01582C7.60991 4.23083 7.73131 4.57859 7.82859 5.07098L8.54337 10.2784C8.57979 10.5438 8.81357 10.7368 9.08099 10.7224C9.34841 10.708 9.5601 10.4909 9.56781 10.2233L9.0533 10.2084L9.56781 10.2232L9.56781 10.2231L9.56783 10.2226L9.56789 10.2205L9.56813 10.2123L9.5691 10.1795L9.57294 10.053C9.57635 9.94286 9.58142 9.78317 9.58806 9.58512C9.60135 9.18898 9.62093 8.63963 9.64612 8.02686C9.69663 6.79814 9.76924 5.32539 9.85799 4.31952C9.94881 3.29026 10.0551 2.51138 10.26 1.99355C10.3594 1.74225 10.4672 1.59289 10.5719 1.50677C10.6664 1.4291 10.7882 1.37755 10.9797 1.37755C11.1922 1.37755 11.3191 1.42717 11.4051 1.48854C11.4955 1.55301 11.5857 1.66272 11.6683 1.85469C11.8441 2.26336 11.9241 2.8882 11.9914 3.75081C12.0564 4.58436 12.1185 6.1965 12.1645 7.6119C12.1874 8.31707 12.2062 8.96949 12.2193 9.44565C12.2259 9.6837 12.231 9.87765 12.2344 10.012L12.2384 10.167L12.2394 10.2074L12.2396 10.2176L12.2397 10.2202L12.2397 10.2208L12.2397 10.221L12.7543 10.2084ZM12.7543 10.2084L13.2685 10.2318C13.2559 10.5088 13.0262 10.726 12.7489 10.7231C12.4716 10.7202 12.2465 10.4982 12.2397 10.221L12.7543 10.2084Z" fill="#00C65E" stroke="white" />
<path d="M25.5494 10.2084L25.0352 10.2317L25.0352 10.2316L25.0352 10.231L25.0351 10.2287L25.0347 10.2196L25.0331 10.1841L25.0269 10.0482L25.0048 9.55462C24.9863 9.14124 24.9613 8.57812 24.9352 7.97919C24.8832 6.78332 24.8267 5.43881 24.8096 4.86236C24.7928 4.29352 24.7422 3.61832 24.5737 3.10567C24.4898 2.85032 24.3904 2.67977 24.2903 2.58126C24.2064 2.49865 24.1147 2.45671 23.973 2.46472C23.9633 2.46527 23.9536 2.46555 23.9439 2.46555C23.825 2.46555 23.7437 2.49005 23.6777 2.53192C23.6095 2.57523 23.5189 2.66207 23.4243 2.84963C23.2253 3.24456 23.0612 3.97965 23.0116 5.28514C22.9614 6.60446 22.9185 7.83936 22.8882 8.74448C22.8731 9.19702 22.861 9.56707 22.8528 9.82395L22.8434 10.1205L22.8409 10.198L22.8403 10.2177L22.8402 10.2227L22.8401 10.2239L22.8401 10.2243L22.8401 10.2243L22.3257 10.2084L22.8401 10.2243C22.8316 10.5018 22.6045 10.7225 22.3269 10.7232C22.0493 10.7238 21.8212 10.5043 21.8113 10.2269L21.6938 6.94911C21.6442 5.89861 21.4559 5.42017 21.2916 5.20753C21.1634 5.04149 21.0179 4.99564 20.7771 4.99564C20.6792 4.99564 20.6225 5.0131 20.5788 5.04036C20.5338 5.06844 20.4544 5.13714 20.3659 5.32229C20.178 5.71545 20.0124 6.49611 19.9776 7.99316L20.0026 17.0121C20.006 17.0871 20.0094 17.1613 20.0127 17.2347C20.06 18.2695 20.1002 19.1507 20.1986 19.9194C20.3039 20.7425 20.4715 21.3936 20.7588 21.9235C20.7635 21.932 20.7679 21.9407 20.772 21.9495C20.8492 22.1136 20.9552 22.3481 21.0785 22.6209C21.4121 23.359 21.8724 24.3772 22.232 25.037L29.9806 25.037C30.7858 23.5468 31.6327 22.1609 32.1812 21.3343C32.8969 20.163 34.0524 17.6873 35.042 15.4697C35.5349 14.3653 35.982 13.3355 36.3059 12.5817C36.4679 12.2049 36.599 11.8971 36.6895 11.6837C36.7348 11.5771 36.77 11.4939 36.7938 11.4376L36.8208 11.3735L36.8277 11.3572L36.8292 11.3535L36.8293 11.3531L36.8294 11.3531L36.8295 11.3528L36.8296 11.3525L36.8298 11.3521L36.8298 11.3521L36.8338 11.3421C36.8377 11.3322 36.8438 11.3161 36.8516 11.2945C36.8672 11.2514 36.8891 11.1872 36.9119 11.1082C36.9583 10.9473 37.0047 10.7384 37.0166 10.5262C37.0287 10.3099 37.0027 10.1268 36.9386 9.99117C36.8828 9.87309 36.7871 9.76441 36.5839 9.69324C36.4572 9.64887 36.3178 9.65779 36.145 9.73575C35.9644 9.81724 35.7752 9.96344 35.5936 10.1457C35.4152 10.3247 35.264 10.5186 35.1561 10.6704C35.1027 10.7456 35.0612 10.8087 35.0337 10.8519C35.02 10.8736 35.0098 10.8901 35.0033 10.9007L34.9966 10.9118L34.9964 10.9122L32.7873 14.7885C32.6717 14.9913 32.434 15.0909 32.2083 15.0311C31.9826 14.9713 31.8254 14.7671 31.8254 14.5336L31.8254 6.42734C31.8254 5.43639 31.7235 4.71849 31.5606 4.26426C31.3996 3.81546 31.2458 3.77644 31.2035 3.77268C31.0708 3.77528 30.9591 3.82859 30.8356 4.01582C30.6938 4.23083 30.5724 4.57859 30.4751 5.07098L29.7603 10.2784C29.7239 10.5438 29.4901 10.7368 29.2227 10.7224C28.9553 10.708 28.7436 10.4909 28.7359 10.2233L29.2504 10.2084L28.7359 10.2232L28.7359 10.2231L28.7359 10.2226L28.7358 10.2205L28.7356 10.2123L28.7346 10.1795L28.7308 10.053C28.7274 9.94286 28.7223 9.78317 28.7157 9.58512C28.7024 9.18898 28.6828 8.63963 28.6576 8.02686C28.6071 6.79814 28.5345 5.32539 28.4457 4.31952C28.3549 3.29026 28.2486 2.51138 28.0437 1.99355C27.9443 1.74225 27.8365 1.59289 27.7318 1.50677C27.6373 1.42909 27.5155 1.37754 27.324 1.37754C27.1115 1.37754 26.9847 1.42716 26.8986 1.48854C26.8082 1.55301 26.718 1.66271 26.6354 1.85469C26.4596 2.26336 26.3796 2.8882 26.3123 3.75081C26.2473 4.58436 26.1852 6.1965 26.1392 7.61189C26.1163 8.31707 26.0975 8.96949 26.0844 9.44565C26.0779 9.6837 26.0728 9.87765 26.0693 10.012L26.0653 10.167L26.0643 10.2074L26.0641 10.2176L26.064 10.2202L26.064 10.2208L26.064 10.221L25.5494 10.2084ZM25.5494 10.2084L25.0352 10.2318C25.0478 10.5088 25.2775 10.726 25.5548 10.7231C25.8321 10.7202 26.0572 10.4982 26.064 10.221L25.5494 10.2084Z" fill="#00C65E" stroke="white" />
<path d="M19.2246 22.7975C18.9836 22.9415 18.784 23.0591 18.6382 23.1444C18.4872 23.0508 18.2775 22.9199 18.0239 22.7598C17.4832 22.4186 16.7437 21.9449 15.9482 21.4147C14.3409 20.3438 12.5571 19.0769 11.689 18.2073C11.6778 18.196 11.6661 18.1853 11.6538 18.1751C11.0666 17.687 10.5902 17.0828 10.2552 16.4011C9.92211 15.7232 9.73612 14.9834 9.70914 14.2285C9.7275 13.2431 10.0485 12.2836 10.6304 11.4763C11.2147 10.6657 12.0342 10.0473 12.9801 9.70303C13.926 9.35877 14.9533 9.30497 15.9257 9.54822C16.8981 9.79146 17.77 10.3203 18.426 11.0645C18.5231 11.1748 18.6638 11.2387 18.8123 11.24C18.9609 11.2414 19.1031 11.1801 19.2029 11.0717C19.881 10.3353 20.7687 9.8176 21.7483 9.58693C22.7279 9.35626 23.7529 9.42354 24.6875 9.77933C25.6221 10.1351 26.4227 10.7627 26.9831 11.579C27.5407 12.3913 27.8347 13.3525 27.8261 14.3367C27.7704 15.0908 27.5597 15.8272 27.2065 16.5013C26.851 17.1797 26.3587 17.7806 25.7599 18.2667C25.7497 18.275 25.7398 18.2837 25.7302 18.2928C24.6988 19.27 22.8734 20.5165 21.2742 21.5344C20.4808 22.0394 19.7535 22.4816 19.2246 22.7975Z" fill="white" stroke="#00C65E"/>
</svg>
</span> Помогайте нуждающимся </li>
                </ul>
            </div>
            <div className='auth__right'>
                <h2 className='auth__register'>Вход и регистрация</h2>
                <p className='auth__phone'>Введите ваш номер телефона и мы вышлем
                    вам код  подтверждения для регистрации</p>
                <input className='auth__input' placeholder='+ 7 (123)-456-78-90' type="tel"/>
                <Link to='/confirm'>
                    <button className='auth__cont'>Продолжить</button>
                </Link>
                <Link to='/register'>
                    <button className='auth__login'>Регистрация</button>
                </Link>
                <Link to='/login'>
                    <button className='auth__login'>Войти</button>
                </Link>

                <p className='auth__text'>или продолжить через соцсети</p>
                <div className='auth__icons'>
                    <Google/>
                    <p className='auth__icon'><FaGithub/></p>
                </div>

                <Link to='/' className='home'>Вернуться на главную страницу</Link>
            </div>
        </div>
    );
};

export default Auth;