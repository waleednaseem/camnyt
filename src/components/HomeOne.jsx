'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Modal from './UnlockModal';
import home1 from '@/images/home1.png';
import cam from '@/images/camnyt.png';
import video from '@/images/video.png';
import lock from '@/images/lock.png';
import apple from '@/images/apple.png';
import google from '@/images/google.png';
import star from '@/images/star.png';
import setting from '@/images/setting.png';
import male from '@/images/male.png'
import maleIcon from '@/images/maleIcon.png';
import femaleIcon from '@/images/femaleIcon.png';
import coupleIcon from '@/images/coupleIcon.png';
import groupButtonIcon from '@/images/groupButtonIcon.png'
import { Share2, AlignJustify, MoveRight } from 'lucide-react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import InputEmoji from "react-input-emoji";
import 'tailwindcss/tailwind.css';
import leftGirlImage from '@/images/leftGirlImage.jpg'
import leftGirl2 from '@/images/leftImage2.jpg'
import googleIcon from '@/images/googleIcon.png'
import fbLogoIcon from '@/images/fbLogoIcon.png'
import Image from 'next/image';
import Webcam from "react-webcam";
import { loadStripe } from '@stripe/stripe-js';
import { Socket, io } from 'socket.io-client';
import nextIcon from '@/images/nextIcon.png';
import pauseIcon from '@/images/pauseIcon.png';
import vectorArrow from '@/images/vectorArrow.png'
import Gender from "@/images/gender-removebg-preview.png"
import VIP from "@/images/pngtree-3d-metal-vip-badge-png-image_2893598-removebg-preview.png"
import Location from "@/images/location-removebg-preview.png"
import KillAds from "@/images/Kill_Ads-removebg-preview.png"
import GainFollowers from "@/images/gainFollowers-removebg-preview.png"
import HideLocation from "@/images/no-location-2837148-2357543-removebg-preview.png"
import IntroMessage from "@/images/IntroMessage-removebg-preview.png"
import PrivateChat from "@/images/PrivateChat-removebg-preview.png"
import LiveSupport from "@/images/LiveSupport.png"
import eye from "@/images/eye.png"
import axios from 'axios';
import apiUrl from '@/Constants/API';
import Link from 'next/link';
import { GoogleLogin } from '@react-oauth/google';


// Define the HomeOne component
function HomeOne() {

    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [RealGender, setRealGender] = useState(null);
    const [Country_code, setCountry_code] = useState('');
    const [User_pkg, setUser_pkg] = useState(true);
    const [Showverifiedbadge, setShowverifiedbadge] = useState(User_pkg);
    const [Hideme, setHideme] = useState(User_pkg);
    const [OnMsg, setOnMsg] = useState("");
    const [user1, setuser1] = useState('');
    const [user2, setuser2] = useState('');

    // console.log({ Hideme })
    useEffect(() => {
        const token = localStorage.getItem('user');
        const user_id = token && JSON.parse(atob(token.split('.')[1]));
        user_id && axios.post(`${apiUrl}/get_pkgs`, {
            user_id: user_id?.id
        })
            .then(x => {
                if (x?.data?.user_pkgs) {
                    setUser_pkg(x.data.user_pkgs.subcribed);
                    axios.get(`${apiUrl}/hide_me`, {
                        user_id: user_id?.id
                    })
                        .then(y => {
                            setHideme(y.data.hide)
                        })
                }

            })
    }, [])
    // console.log(User_pkg, "<=")
    const toggleCard = () => {
        setIsLocationOpen(!isLocationOpen);
    };

    const handleCountrySelect = (country) => {
        // console.log(country)
        const token = localStorage.getItem('user');
        // const user_id =JSON.parse(atob(token.split('.')[1]));
        setSelectedCountry(country);
        toggleCard(); // Close the card after selecting a country
        GetUsers(token)
        // setShowSubscriptionModal(true); // Open the subscription modal
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubscriptionModalClose = () => {
        setShowSubscriptionModal(false);
    };
   
    
    const countries = [
        { name: 'USA', country: 'US', flag: '/images/USA.png' },
        { name: 'Canada', country: 'CA', flag: '/images/Canda.png' },
        { name: 'UK', country: 'UK', flag: '/images/UK.png' },
        { name: 'Australia', country: 'AU', flag: '/images/Australia.png' },
        { name: 'Bangladesh', country: 'BD', flag: '/images/Bangladesh.png' },
        { name: 'Turkey', country: 'TR', flag: '/images/Turkey.png' },
        { name: 'Russia', country: 'RU', flag: '/images/Russia.png' },
        { name: 'Malaysia', country: 'MY', flag: '/images/Malaysia.png' },
        { name: 'Indonesia', country: 'ID', flag: '/images/Indonesia.png' },
        { name: 'Spain', country: 'ES', flag: '/images/Spain.png' },
        { name: 'Egypt', country: 'EG', flag: '/images/Egypt.png' },
        { name: 'Brazil', country: 'BR', flag: '/images/Brazil.png' },
        { name: 'Netherland', country: 'NL', flag: '/images/Netherlands.png' },
        { name: 'Italy', country: 'IT', flag: '/images/Italy.png' },
        { name: 'Romania', country: 'RO', flag: '/images/Romania.png' },
        { name: 'Ukraine', country: 'UA', flag: '/images/Ukrain.png' },
        { name: 'Azerbaijan', country: 'AZ', flag: '/images/Azerbaijan.png' },
        { name: 'Philippines', country: 'PH', flag: '/images/Philippines.png' },
        { name: 'Moroco', country: 'MA', flag: '/images/Morocco.png' },
        { name: 'Pakistan', country: 'PK', flag: '/images/Pakistan.png' },
        { name: 'India', country: 'IN', flag: '/images/India.png' },
        { name: 'Newzeland', country: 'NZ', flag: '/images/New_Zealand.png' },
        { name: 'Mexico', country: 'MX', flag: '/images/Mexico.png' },
        { name: 'Iraq', country: 'IQ', flag: '/images/Iraq.png' },
        { name: 'Gerogia', country: 'GE', flag: '/images/Georgia.png' },
        { name: 'Algeria', country: 'DZ', flag: '/images/Algeria.png' },
        { name: 'France', country: 'FR', flag: '/images/France.png' },
        { name: 'Jordan', country: 'JO', flag: '/images/Jordan.png' }
    ];
   

    let Product = [
        {
            month: '1 year',
            month_name: "year",
            img: 'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
            price: '89.94'
        },
        {
            month: '1 Month',
            month_name: "month",
            img: 'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
            price: '19.99'
        },
        {
            month: '1 Week',
            month_name: "week",
            img: 'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
            price: '7.99'
        }
    ]
    const handlePayNow = async (price, pkg_name) => {
        const token = localStorage.getItem('user');
        const user_id = JSON.parse(atob(token.split('.')[1]))
        //User ana chahiye 
        try {
            const stripe = await loadStripe('pk_test_51OXRsZKCQ7nACFmG8jgscRlTHyzSC40XGc9lGBcmil7dtJ6gXxrO7KQeFNQDm8py167e3OQiZC4QVPf8Az31HTn900ygHbGJEH');
            const response = await fetch(`${apiUrl}/create-checkout-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Product: [
                        {
                            price,
                            pkg_name,
                            user_id: user_id.id
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }
            localStorage.setItem('strip_wala', {
                price,
                pkg_name
            })
            const session = await response.json();
            console.log(session, '<=========')
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                throw result.error;
            }
        } catch (error) {
            console.error('Payment error:', error);
            // Handle error gracefully, e.g., display an error message to the user
        }
    };

    // Filter countries based on search term
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [chatStarted, setChatStarted] = useState(false);
    const startChat = () => {
        setChatStarted(true);
    };

    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [Start_Connect, setStart_Connect] = useState(false);
    const [after_connect, set_after_connect] = useState(false);
    const openModalSetting = () => {
        setIsOpenSetting(true);
    };

    const closeModalSetting = () => {
        setIsOpenSetting(false);

    };

    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const toggleSignUpModal = () => {
        setIsSignUpOpen(true);
        setIsUnlockModalOpen(false)

    };

    const closeModal = () => {
        setIsOpen(false);
        setIsSignUpOpen(false); // Close sign-up modal if open
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    // new

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const [isChecked, setIsChecked] = useState(false);

    const toggleHandler = () => {
        setIsChecked(!isChecked);
    };

    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const sendMessage = (e) => {
        e.preventDefault()
        // console.log(text)
        socket.emit('send_msg', { room: Room_id, msg: text })
        // setMessages(prevConversation => [...prevConversation, { msg: text }]);
        setText(""); // Clear the input field after sending the message
    };

    const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);


    const openUnlockModal = () => {
        // setIsUnlockModalOpen(true);
        setShowSubscriptionModal(true)
    };

    const closeUnlockModal = () => {
        setIsUnlockModalOpen(false);
    };

    const closeModalOnOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeUnlockModal();
        }
    };

    const [showEmailLoginFields, setShowEmailLoginFields] = useState(false);

    const openEmailLoginFields = () => {
        // setShowEmailLoginFields(true);
        setIsUnlockModalOpen(false)
        toggleModal()
    };

    const closeEmailLoginFields = () => {
        setShowEmailLoginFields(false)
    }

    //language
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [searchLanguageTerm, setSearchLanguageTerm] = useState('');


    const toggleLanguageCard = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        toggleLanguageCard(); // Close the card after selecting a language
        // Additional logic for language selection
    };

    const handleSearchLanguageChange = (e) => {
        setSearchLanguageTerm(e.target.value);
    };

    const languages = [
        { name: 'English' },
        { name: 'Spanish' },
        { name: 'French' },
        { name: 'German' },
        { name: 'Italian' },
        { name: 'Portuguese' },
        { name: 'Russian' },
        { name: 'Chinese' },
        { name: 'Japanese' },
        { name: 'Korean' },
        { name: 'Arabic' },
        { name: 'Hindi' },
        { name: 'Bengali' },
        { name: 'Urdu' },
        { name: 'Turkish' },
        { name: 'Dutch' },
        { name: 'Swedish' },
        { name: 'Norwegian' },
        { name: 'Finnish' },
        { name: 'Greek' }
        // Add more languages with their flags
    ];

    // Filter languages based on search term
    const filteredLanguages = languages.filter(language =>
        language.name.toLowerCase().includes(searchLanguageTerm.toLowerCase())
    );

    // GENDER WORK
    const [isGenderModalOpen, setIsGenderModalOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState('Male');
    const [selectedGenderIcon, setSelectedGenderIcon] = useState(null);

    const openModal = () => {
        setIsGenderModalOpen(true);
    };

    const updateGender = (gender) => {
        setSelectedGender(gender);
        setIsGenderModalOpen(false);
        // Set the corresponding icon based on the selected gender
        switch (gender) {
            case 'Male':
                setSelectedGenderIcon(maleIcon);
                break;
            case 'Female':
                setSelectedGenderIcon(femaleIcon);
                break;
            case 'Couple':
                setSelectedGenderIcon(coupleIcon);
                break;
            case 'Everyone':
                setSelectedGenderIcon(groupButtonIcon);
            default:
                setSelectedGenderIcon(null);
        }
    };
    // console.log(RealGender)

    const [Files, setFiles] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [previousUser, setpreviousUser] = useState('');
    const [Reffresh, setReffresh] = useState(false);
    const [Connect, setConnect] = useState('');
    const [Room_id, setRoom_id] = useState('');
    const [Call, setCall] = useState(false);
    const [peerId, setPeerId] = useState('');
    const [Token, setToken] = useState(null);
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);


    const socket = io(apiUrl)
    socket.on('connection', (data) => {
        console.log(data, '<==');
    });

    socket.on('recieve_msg', (data) => {
        console.log(data);
        setMessages(prevConversation => [...prevConversation, { msg: data }]);

        // sendMessage(data)
    });


    // messages.length == 1 && socket.emit('send_msg', { msg: 'from me', room: Room_id });
    const readyToConnect = () => {
        try {
            if (!Token) {
                throw new Error("Token is not available");
            }

            // const base64Url = localstorage.split('.')[1];
            // if (!base64Url) {
            //     throw new Error("Invalid token format");
            // }

            // Replace Base64-url encoded characters
            // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            // const userData = JSON.parse(atob(base64Url));

            peerId != ''&& axios.post(`${apiUrl}/ready_to_connect`, {
                peer_id: peerId,
                gender: 'default',
                location: 'default',
                user_id:  Token.id
            })
                .then(response => {
                    if (response.data == 'you are online') {

                        // console.log(response)
                        axios.get('https://geolocation-db.com/json/')
                            .then(x => {
                                // console.log(x)
                                // x.IPv4, x.country_code;
                                axios.post(`${apiUrl}/getLocation_and_gender`, {
                                    ip: x.data.IPv4,
                                    gender: RealGender,
                                    location: x.data.country_code,
                                    user_id:  Token.id
                                })
                                    .then(y => {
                                        // if(RealGender != null){
                                            setStart_Connect(true)
                                            GetUsers( Token)
                                        // }

                                    })
                            })

                    }
                    console.log(response)
                })
                .catch(error => console.log(error));
        } catch (error) {
            console.error("Error in readyToConnect: ", error);
        }
    }
console.log({peerId})
    useEffect(() => {

        import('peerjs').then(({ default: Peer }) => {
            const peer = new Peer();

            peer.on('open', (id) => {
                setPeerId(id)
            });

            peer.on('call', (call) => {
                var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                getUserMedia({ video: true, audio: true }, (mediaStream) => {
                    currentUserVideoRef.current.srcObject = mediaStream;
                    currentUserVideoRef.current.play();
                    call.answer(mediaStream)
                    call.on('stream', function (remoteStream) {
                        remoteVideoRef.current.srcObject = remoteStream
                        remoteVideoRef.current.play();
                        setConnect(call)
                        // socket.emit('disconnect_room', { room: Room_id })
                        remoteVideoRef.current.style.visibility = 'visible';
                        // ab mien chahta hun agar mien next user ko search karun tuh jis k sathconnected tha us k pass se video black hojaye
                    });
                });

               
                setOnMsg(call.peer)
            })


            peerInstance.current = peer;
        });
    }, [])
    socket.on('recv_disconnect', () => {
        socket.emit('disconnect_room', { room: Room_id }, (response) => {
            console.log(response); // "Room left" or any response from the server
        })
        // alert('Disconnected')
        remoteVideoRef.current.srcObject = null
        // window.location.reload()
    })
    
    useEffect(() => {
        let localstorage = localStorage.getItem('user')
        const token = localstorage && JSON.parse(atob(localstorage.split('.')[1]))
        token && setToken(token)
    }, [])
    const StartNow = (localstorage) => {
        const token = JSON.parse(atob(localstorage.split('.')[1]))
        setToken(token)
        capture()
        readyToConnect(localstorage)

        // setReffresh(!Reffresh)
    }

    const stopVideoStream = () => {
        if (currentUserVideoRef.current && currentUserVideoRef.current.srcObject) {
            currentUserVideoRef.current.srcObject.getTracks().forEach(track => track.stop());

        }
    };

    const call = (remotePeerId) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        getUserMedia({ video: true, audio: true }, (mediaStream) => {
            stopVideoStream()
            currentUserVideoRef.current.srcObject = mediaStream;
            currentUserVideoRef.current.play();

            const call = peerInstance.current.call(remotePeerId, mediaStream)

            call.on('stream', (remoteStream) => {
                remoteVideoRef.current.srcObject = remoteStream
                remoteVideoRef.current.play();
            });
        });

    }

    // REGISTERATION START
    const SubmitFormSignIn = (e) => {
        // alert('Signed in successfully')
        e.preventDefault()
        axios.post(`${apiUrl}/login`, {
            username: username,
            password: password
        })
            .then(x => {
                console.log(x);
                if (x.data.token) {
                    setusername(''),
                        setpassword(''),
                        localStorage.setItem('user', x.data.token),
                        setToken(x.data.token),

                        window.location.href = '/'
                }

            })
    }
    const SubmitFormSignUp = (e) => {
        // alert('Signed up successfully')
        e.preventDefault()
        axios.post(`${apiUrl}/register`, {
            username: username,
            password: password
        })
            .then(x => (console.log(x), setusername(''), setpassword(''), window.location.href = '/'))
    }
    // REGISTERATION STOP



    const DisConnected = (Token) => {
        const token = localStorage.getItem('user');
        // JSON.parse(atob(Token.split('.')[1]))

        const user_id = token ? JSON.parse(atob(token.split('.')[1])) :
            JSON.parse(atob(Token.split('.')[1]))
        axios.post(`${apiUrl}/connection_end`, {
            user_id: user_id.id
        })
            .then(x => (x))
            .catch(x => (console.log(x)))
    }
    const pauseVideo = () => {
        if (currentUserVideoRef.current && currentUserVideoRef.current.srcObject) {
            currentUserVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
            currentUserVideoRef.current.srcObject.getTracks().forEach(track => track.stop());

        }
    }

    // console.log({selectedGender,selectedCountry.country})
    const GetUsers = () => {
       
        pauseVideo()
        Token.id&& axios.post(`${apiUrl}/get_users`, {
            user_id: Token.id,
            gender: selectedGender,
            location: Country_code
        })
            .then(x => (
                console.log(x, '<=== Connection'),
                Token.id&& axios.post(`${apiUrl}/Both_are_connected`, {
                    user1: x.data.users_[0].user_id,
                    user2: user_id.id,
                    previous: previousUser
                })
                    .then(t => {
                        setConnect(!Connect);
                        setuser1(user_id.id)
                        setuser2(x.data.users_[0].user_id)
                        set_after_connect(!after_connect)
                    }),

                setRemotePeerIdValue(x.data.users_[0].peer_id),
                call(x.data.users_[0].peer_id)
            ))
            .catch(x => (console.log(x)))
    }

    console.log({ user1, user2 })
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (Room_id) {
                axios.post(`${apiUrl}/getIntroMsg`, {
                    user_id: user1
                })
                    .then(y => {

                        y?.data?.message?.intro_msg && y?.data?.message?.show_msg == true && socket.emit('send_msg', { msg: `${y.data.message.intro_msg} from ${y.data.message.User.username}`, room: Room_id });
                        console.log(y, '<=======from user')
                    })
                    .catch(y => console.log(y, '<========= error getIntroMsg !!'));

                axios.post(`${apiUrl}/getIntroMsg`, {
                    user_id: user2
                })
                    .then(y => {
                        y?.data?.message?.intro_msg && y?.data?.message?.show_msg == true && socket.emit('send_msg', { msg: `${y.data.message.intro_msg} from ${y.data.message.User.username}`, room: Room_id });
                        console.log(y, '<=======from you')
                    })
                    .catch(y => console.log(y, '<========= error getIntroMsg !!'));
                axios.post(`${apiUrl}/getfollow_msg`, {
                    user_id: user1
                })
                    .then(y => {
                        y?.data?.message?.follow_msg && y?.data?.message?.show_follow == true && socket.emit('send_msg', { msg: `${y.data.message.follow_msg} from ${y.data.message.User.username}`, room: Room_id });
                        console.log(y, '<=======from user')
                    })
                    .catch(y => console.log(y, '<========= error getfollow_msg !!'));

                axios.post(`${apiUrl}/getfollow_msg`, {
                    user_id: user2
                })
                    .then(y => {
                        y?.data?.message?.follow_msg && y?.data?.message?.show_follow == true && socket.emit('send_msg', { msg: `${y.data.message.follow_msg} from ${y.data.message.User.username}`, room: Room_id });
                        console.log(y, '<=======from you')
                    })
                    .catch(y => console.log(y, '<========= error getfollow_msg !!'));
            }

        }, 2000)
        return () => clearTimeout(timeout);
    }, [after_connect, Room_id])

    const get_room = (Tokens) => {
        if (!Tokens) {
            console.log("No token found");
            return;
        }

        const user_id = JSON.parse(atob(Tokens.split('.')[1]));

        axios.post(`${apiUrl}/get_room`, {
            user_id: user_id.id
        })
            .then(response => {
                const lastRoom = response.data[response.data.length - 1]; // Correct

                if (lastRoom) {
                    setpreviousUser(
                        lastRoom.user1 === user_id.id ?
                            lastRoom.user2 : lastRoom.user1
                    );
                    socket.on('connection', (data) => {
                        console.log(data)
                    })

                    setRoom_id(lastRoom.id)
                    socket.emit('join_room', {
                        room: lastRoom.id,
                        msg: 'joined!'
                    })


                } else {
                    console.log("No rooms found.");
                }
            })
            .catch(error => {
                console.error('Error fetching room:', error);
                // Handle errors here
            });
    }
    const [Recv_Joining, setRecv_Joining] = useState(null);
    socket.on('recieve_joining', (room) => {
        setRecv_Joining(room)
    })

    const [after_recv, setafter_recv] = useState(false);


    useEffect(() => {
        // Function to handle the action after users join
        const handleUsersJoined = () => {
            const token = localStorage.getItem('user');
            if (token) {
                get_room(token);
            } else {
                console.log('Token not found. Users might not have joined correctly.');
                // Handle this scenario appropriately
            }
        };

        // Delayed execution after users join
        const timer = setTimeout(handleUsersJoined, 3000);

        // Cleanup
        return () => clearTimeout(timer);

    }, [Connect]); // Ensure previousUser is the correct dependency


    useEffect(() => {
        const timer = setTimeout(() => {
            readyToConnect()
            // console.log("after 2 scnds")
        }, 1000);

        // Cleanup function
        return () => clearTimeout(timer);
    }, [Reffresh]);

    useEffect(() => {
        const token = localStorage.getItem('user');

        // Agar token maujood hai toh 'Disconnected' function ko call karen
        if (token) {
            DisConnected(token);
        }
    }, []);

    let conversation = []

    const SendMsg = () => {
        console.log('click');
        if (Room_id) {
            socket.emit('send_msg', { room: Room_id, msg: 'check it ' });
        } else {
            console.log("Room ID is undefined.");
        }
    };


    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const detectMale = useCallback((imageSrc) => {
        // Convert the imageSrc (base64) to a file/blob
        fetch(imageSrc)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], 'webcam-image.jpg', { type: 'image/jpeg' });
                const formData = new FormData();
                formData.append('file', file);
                const token = localStorage.getItem('user');
                // console.log(JSON.parse(atob(token.split('.')[1])))
                axios.post('https://gender.onrender.com/uploadfile/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then(response => {
                        if (response?.data?.results.length > 0) {
                            setRealGender(response.data.results[0].gender)
                            console.log({face:response})
                        } else {
                            console.log({face:response})
                            alert('no face detected')
                        }
                    })
                    .catch(error => console.error('Error uploading the file:', error));
            });
    }, []);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        detectMale(imageSrc);
    }, [webcamRef, detectMale]);
    // console.log(imgSrc)

    // useEffect(() => {
    //     const token = localStorage.getItem('user');
    //     GetUsers(token)
    //     // console.log('ran')
    // }, [Country_code, Gender])

    useEffect(() => {
        const token = localStorage.getItem('user');
        const user_id = token && JSON.parse(atob(token.split('.')[1]));
        RealGender && user_id &&
            axios.post(`${apiUrl}/getLocation_and_gender`, {
                gender: RealGender,
                user_id: user_id.id
            })
                .then(y => {
                    setStart_Connect(true)
                    GetUsers(token)
                })

    }, [Start_Connect, RealGender])
    useEffect(() => {
        const token = localStorage.getItem('user');
        const user_id = token && JSON.parse(atob(token.split('.')[1]));
        user_id && axios.post(`${apiUrl}/request_badge`, {
            user_id: user_id?.id
        })
            .then(x => setShowverifiedbadge(x.data.user_badge.verified))

        user_id && axios.post(`${apiUrl}/getIntroMsg`, {
            user_id: user_id?.id
        })
            .then(x => {
                x?.data?.message?.show_msg != null && setIsIntroMessage(x.data.message.show_msg)
            })
        user_id && axios.post(`${apiUrl}/follow_bool`, {
            user_id: user_id?.id
        })
            .then(x => {
                // console.log(x)
                setIsGetFollower(x.data.status)
            })
    }, [])


    const [isGetFollower, setIsGetFollower] = useState(false);
    const [Follow_msg, setFollow_msg] = useState("");



    const [isIntroMessage, setIsIntroMessage] = useState(false);
    const [Intro_msg, setIntro_msg] = useState(false);

    const handleCheckboxChange = () => {
        // setIsGetFollower(!isGetFollower);
        axios.post(`${apiUrl}/follow_bool`, {
            user_id: Token.id
        })
            .then(x => {
                console.log(x)
                setIsGetFollower(x.data.status)
            })

    };

    const handleCheckIntroMessage = () => {
        // setIsIntroMessage(!isIntroMessage);
        axios.post(`${apiUrl}/intro_msg_bool`, {
            user_id: Token.id
        })
            .then(x => {
                console.log(x)
                setIsIntroMessage(x.data.status)
            })
    };


    const Follow_msgs = async (req, res) => {
        Token && axios.post(`${apiUrl}/follow_msg`, {
            user_id: Token.id,
            follow_msg: Follow_msg
        })
            .then(x => {
                console.log(x)
            })
    }
    const Intro_Msgs = async (req, res) => {
        Token && axios.post(`${apiUrl}/intro_msg`, {
            user_id: Token.id,
            intro_msg: Intro_msg
        })
            .then(x => {
                console.log(x)
            })
    }
    return (
        <section className='flex  mx-auto justify-center items-start w-full font-inter'>

            {showSubscriptionModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-[#FF5887] p-8 rounded-xl lg:h-[70%] lg:w-[80%] md:h-[80%] md:w-[80%] overflow-y-auto no-scrollbar inset-y-1 h-screen relative">
                        <button onClick={handleSubscriptionModalClose} className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-white text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h1 className="font-semibold mb-4 text-2xl text-white ">Upgrade To CamNyt</h1>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col md:w-1/3'>
                                <div>
                                    <div className='text-lg font-bold text-white flex gap-2'><Image src={Gender} alt="" className='h-10 w-10 mx-2' />Gender Filter<Image src={eye} alt="" className='h-5 w-5' /></div>
                                </div>
                                <span className='my-4 text-lg font-bold text-white  flex gap-2'><Image src={KillAds} alt="" className='h-10 w-10 mx-2' />Kill The Ads<Image src={eye} alt="" className='h-5 w-5' /></span>
                                <span className='mb-10 text-lg font-bold flex gap-2 text-white'><Image src={IntroMessage} alt="" className='h-10 w-10 mx-2' />Intro Message<Image src={eye} alt="" className='h-5 w-5' /></span>
                            </div>
                            <div className='flex flex-col md:w-1/3 md:ml-[12%]'>
                                <span className='text-lg font-bold flex gap-2 text-white'><Image src={VIP} alt="" className='h-10 w-10 mx-2' />VIP Badge<Image src={eye} alt="" className='h-5 w-5' /></span>
                                <span className='my-4 text-base font-bold flex gap-2 text-white '><Image src={GainFollowers} alt="" className='h-10 w-10 mx-2' />Gain Followers
                                    <Image src={eye} alt="" className='h-5 w-5' />
                                </span>
                                <span className='mb-10 text-base font-bold flex gap-2 text-white '><Image src={PrivateChat} alt="" className='h-10 w-10 mx-2' />Private chat <Image src={eye} alt="" className='h-5 w-5' /></span>
                            </div>
                            <div className='flex flex-col md:w-1/3 md:ml-[12%]'>
                                <span className='text-lg font-bold flex gap-2 text-white '><Image src={Location} alt="" className='h-10 w-10 mx-2' />Location Filter
                                    <Image src={eye} alt="" className='h-5 w-5' />
                                </span>
                                <span className='my-4 text-lg font-bold flex gap-2 text-white '>
                                    <Image src={HideLocation} alt="" className='h-10 w-10 mx-2' />
                                    Hide Your Location
                                    <Image src={eye} alt="" className='h-5 w-5 ml-2' />
                                </span>
                                <span className='mb-10 text-lg font-bold flex gap-2 text-white '><Image src={LiveSupport} alt="" className='h-10 w-10 mx-2' />24/7 Live Support<Image src={eye} alt="" className='h-5 w-5 ' /></span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {
                                Product.map((x, i) => (
                                    <div key={i}
                                        onClick={() => (
                                            handlePayNow(x.price, x.month_name),
                                            // set_buy_product(x),
                                            localStorage.setItem('strip_wala', x.price)
                                        )}
                                        className="bg-gray-100 p-4 rounded-xl border hover:bg-gray-200 hover:border-gray-400 shadow-lg">
                                        <h3 className="text-xl font-semibold mb-2 text-[#FF5887] ">{x.month}</h3>
                                        <div className='flex text-[#FF5887] font-bold'>${x.price}/<div className='text-gray-400 font-bold'>{x.month_name}</div></div>
                                        <div className='text-xs mt-2 mb-5 text-[#FF5887] font-bold'>rebills after every {x.month_name} months at {x.price}$</div>
                                        <button className='bg-[#FF5887] rounded-xl py-2 px-12 text-white font-bold'>Continue</button>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
            )}
            <div className='lg:flex lg:flex-row flex-col'>
                {!Start_Connect ?
                    <div className='lg:w-[50%] w-full text-wrap flex-wrap md:flex md:text-center md:justify-center'>
                        <Image src={home1} className='relative w-full 2xl:h-[60vh] max-h-[90vh] lg:h-[70vh] h-[70vh]  flex justify-center items-center' width={1000} height={1000} alt='' />
                        <div className='text-white absolute md:top-10 top-20 lg:left-4 pr-2 md:left-15 max-w-xl lg:h-[85vh] 2xl:h-[70vh] max-h-[950px] h-[65vh] flex justify-center flex-col gap-6 '>
                            <div className='flex justify-between'>
                                <Image src={cam} width={250} height={200} />
                                <Image src={star} width={50} height={10} />
                            </div>
                            <h4 className=' font-semibold lg:text-2xl text-xl '>9,851,548 joined Camsurf</h4>
                            <div className='flex gap-2'>
                                <div className="relative">
                                    <button
                                        className="bg-pink px-7 flex items-center gap-1 text-white text-sm py-2 bg-gradient-to-b from-[#FF5887] to-[#FF0E52] rounded-3xl"
                                    >
                                        I am a male <Image src={maleIcon} alt="maleIcon" width={30} height={10} className="ml-2" />
                                    </button>

                                </div>
                                <div>
                                    <button
                                        className='px-20 py-3 bg-gradient-to-b flex text-white text-sm items-center gap-1 from-[#0197F5] to-[#62C2FF] rounded-3xl'

                                        onClick={() => {
                                            const localstorage = localStorage.getItem('user');

                                            localstorage ?
                                                StartNow(localstorage) :
                                                // toggleModal
                                                setIsUnlockModalOpen(true);
                                            // capture()
                                        }}
                                    >
                                        Start  <Image src={video} width={12} height={12} />
                                    </button>

                                    {isOpen && (
                                        <div className='fixed inset-0 flex items-center justify-center z-50'>
                                            <div className='absolute inset-0 bg-black opacity-50' onClick={handleOverlayClick}></div>
                                            <div className='bg-white p-8 rounded-lg z-10 relative'>

                                                <button className='absolute top-2 right-2 text-gray-500' onClick={closeModal}>
                                                    <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                                    </svg>
                                                </button>

                                                <h2 className='text-xl font-semibold mb-4 text-black'>Login</h2>
                                                <form onSubmit={SubmitFormSignIn} className='text-black'>
                                                    <div className='flex flex-col mb-4'>
                                                        <input
                                                            type='text'
                                                            id='field1'
                                                            className='border rounded-md p-2'
                                                            placeholder='Username'
                                                            value={username}
                                                            onChange={e => setusername(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className='flex flex-col mb-4'>
                                                        <input
                                                            type='text'
                                                            id='field2'
                                                            className='border rounded-md p-2'
                                                            placeholder='Password'
                                                            value={password}
                                                            onChange={e => setpassword(e.target.value)}
                                                        />
                                                    </div>
                                                    <input type='submit' placeholder='Login' className='' />
                                                </form>
                                                <div className='flex '>
                                                    <span className='mr-2 text-black'>Don't have an account?</span>
                                                    <button className='px-4 py-2 mt-[-8px] text-pink'
                                                        onClick={toggleSignUpModal}
                                                    >
                                                        Sign up
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}



                                    {isSignUpOpen && (
                                        <div className='fixed inset-0 flex items-center justify-center z-50'>
                                            <div className='absolute inset-0 bg-black opacity-50' onClick={handleOverlayClick}></div>
                                            <div className='bg-white p-8 rounded-lg z-10 w-96 relative'>

                                                <button className='absolute top-2 right-2 text-gray-500' onClick={closeModal}>
                                                    <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                                    </svg>
                                                </button>

                                                <h2 className='text-xl font-semibold mb-4 text-black'>Sign Up</h2>
                                                <form onSubmit={SubmitFormSignUp} className='text-black'>
                                                    <div className='flex flex-col mb-4'>
                                                        <input
                                                            type='text'
                                                            id='signup_field1'
                                                            className='border rounded-md p-2'
                                                            placeholder='Enter Username'
                                                            value={username}
                                                            onChange={e => setusername(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className='flex flex-col mb-4'>
                                                        <input
                                                            type='text'
                                                            id='signup_field1'
                                                            className='border rounded-md p-2'
                                                            placeholder='Enter Email'
                                                        />
                                                    </div>
                                                    <div className='flex flex-col mb-4'>
                                                        <input
                                                            type='password'
                                                            id='signup_field2'
                                                            className='border rounded-md p-2'
                                                            placeholder='Create Password'
                                                            value={password}
                                                            onChange={e => setpassword(e.target.value)}
                                                        />
                                                    </div>
                                                </form>
                                                <div className='flex justify-end'>
                                                    <button className='px-4 py-2 bg-gradient-to-b from-[#0197F5] to-[#62C2FF] text-white rounded-md'
                                                        // onClick={closeModal}
                                                        onClick={SubmitFormSignUp}
                                                    >
                                                        Sign up
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}



                                </div>
                            </div>
                            <button
                                onClick={openUnlockModal}
                                className='px-3 max-w-[330px] py-3 bg-gradient-to-b flex text-white text-xs   items-center gap-1 from-[#525252] to-[#161616]  rounded-3xl text-center  justify-center '
                            >
                                {User_pkg == true ? "Upgrade Features " : "Unlock All Features "}<Image src={lock} width={10} height={10} />
                            </button>
                            <div className='flex text-sm gap-2 text-wrap'>
                                <div className="flex items-center">
                                    <div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="w-11 h-6 mr-2 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink"></div>
                                        </label>
                                    </div>
                                </div>
                                <p className='lg:text-base text-sm text-wrap lg:text-left lg:max-w-[410px]'>I certify I have read and agree to the Terms of Use and Cookie Notice. I certify I am at least 18-years old and have reached the age of majority where I live.</p>

                            </div>
                            <div className='flex gap-3'>
                                <Image src={google} width={150} height={100} />
                                <Image src={apple} width={150} height={100} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='lg:w-[50%] w-full flex flex-col'>
                        <video ref={remoteVideoRef} className='md:h-[63.4%] md:w-[100%] bg-black' />
                        {/* <div ref={remoteVideoRef} className='md:h-[69.8%] md:w-[100%] bg-blue-300' >

                        </div> */}
                        <div className="absolute space-x-2 right-[50%]">
                            {/* Button to toggle country the card */}
                            <button onClick={toggleCard} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded left-0">
                                Select Country
                            </button>

                            {/* Selected country display */}
                            {selectedCountry && (
                                <div className="absolute left-0 mt-2 flex items-center">
                                    <img src={countries.find(country => country.name === selectedCountry).flag} alt={`${selectedCountry} flag`} className="w-6 h-6 mr-2 " />
                                    <p>{selectedCountry}</p>
                                </div>
                            )}

                            {/* location ends gender starts */}
                            <div className="inline-flex ">
                                <div className="relative">
                                    <button
                                        onClick={openModal}
                                        className="bg-gray-300 hover:bg-gray-400 px-7 flex items-center justify-center gap- text-black text-xs py-3 bg-gradient-to-b  rounded">
                                        <span className="flex items-center justify-start">
                                            {selectedGender ? `Gender: ${selectedGender}` : 'Chat with me'}
                                            {selectedGenderIcon && <img src={selectedGenderIcon} alt="" className='h-10 w-10 ml-1' />}
                                        </span>
                                    </button>
                                    {isGenderModalOpen && (
                                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col" style={{ width: '400px', height: '500px' }}>
                                                <span className='flex items-center justify-center my-4 text-xl font-bold'>Connect me to</span>
                                                <button onClick={() => updateGender('Everyone')} className="my-2 border rounded-md border-gray-400 py- font-bold"><Image src={groupButtonIcon} alt="" className='h-8 w-10 mt-2' />Everyone</button>
                                                <button onClick={() => updateGender('Male')} className="my-2 flex items-center justify-between border rounded-md border-gray-400 py-4 px-6">
                                                    <Image src={maleIcon} alt="" className='h-10 w-10' />
                                                    <span className='font-bold pr-[100px]'>Male</span>
                                                </button>
                                                <button onClick={() => updateGender('Female')} className="my-2 flex items-center justify-between border rounded-md border-gray-400 py-4 px-6">
                                                    <Image src={femaleIcon} alt="" className='h-10 w-10' />
                                                    <span className='font-bold pr-[100px]'>Female</span>
                                                </button>
                                                <button onClick={() => updateGender('Couple')} className="my-2 flex items-center justify-between border rounded-md border-gray-400 py-4 px-6">
                                                    <Image src={coupleIcon} alt="" className='h-10 w-10' />
                                                    <span className='font-bold pr-[100px]'>Couple</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Card content */}
                            {isLocationOpen && (
                                <div className="absolute left-0 mt-10 w-[700px] bg-white rounded-xl shadow-md overflow-hidden z-50">
                                    <div className="px-4 py-2">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Select your country</h3>
                                        <input type="text" name="location" id="location" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full mt-2 sm:text-sm border-gray-300 rounded-md" placeholder="Search for a country" value={searchTerm} onChange={handleSearchChange} />
                                    </div>
                                    <div className="mt-2 grid grid-cols-4 gap-4 px-4 pb-4">
                                        {/* List of countries with flags */}
                                        {filteredCountries.map(country => (
                                            <button key={country.name} onClick={() => { setCountry_code(country.country), handleCountrySelect(country.name) }} className={`flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-9 00 font-semibold py-2 px-4 rounded ${selectedCountry === country.name ? 'bg-blue-500 text-white' : ''}`}>
                                                <img src={country.flag} alt={`${country.name} flag`} className="w-14 h-10 rounded-full mx-2" />
                                                {country.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Subscription modal */}

                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='p-10'><Image src={pauseIcon} alt="" className='h-10 w-10' /></button>
                            <button className='p-10 ' onClick={() => {
                                socket.emit('disconnect_room', { room: Room_id }, (response) => {
                                    console.log(response); // "Room left" or any response from the server
                                })
                                let localstorage = localStorage.getItem('user')
                                const token = JSON.parse(atob(localstorage.split('.')[1]))
                                stopVideoStream();
                                
                                GetUsers(localstorage);
                            }}
                            > <Image src={nextIcon} alt="" className='h-10 w-10' /> </button>

                        </div>

                    </div>
                }

                <div className='lg:w-[50%] w-full '>
                    <Webcam ref={webcamRef} className='bg-black w-auto 2xl:h-[60vh] max-h-[100vh] lg:h-[70vh] h-[65vh]' screenshotFormat="image/jpeg" />
                    {/* <button onClick={capture}>Capture now</button> */}
                    {/* Incoming stream, shown only when there's a stream */}
                    <video ref={currentUserVideoRef} autoPlay playsInline className='remote-video' style={{ visibility: 'hidden' }}></video>
                    <div className=' px-6 py-4 flex gap-3 items-center w-[100%] ' style={{ marginTop: Start_Connect ? '-350px' : '-100px' }}>

                        {/* settings div */}
                        <div>
                            <button onClick={openModalSetting} className='mt-[120px]'> <Image src={setting} width={30} height={30} /></button>
                            {isOpenSetting && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-8 rounded-lg flex flex-col items-center max-w-md md:w-[50vh] w-full relative overflow-y-scroll no-scrollbar inset-y-1" style={{ height: "80%", width: "90%" }}>

                                        <button className="absolute top-2 right-2" onClick={closeModalSetting}>
                                            <svg className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <span className='text-3xl mb-10 font-bold text-blue-400'>Settings</span>
                                        {Token == null && <>
                                            <button className="my-2 border border-gray-300 rounded-xl bg-gray-50  md:text-lg text-base md:w-[45vh] w-[30vh] py-2">Login</button>
                                            <button className="my-2 border border-orange-500 rounded-xl bg-orange-500 py-2 md:text-lg text-base md:w-[45vh] w-[30vh] text-white" >Join Now</button>
                                        </>
                                        }


                                        {/* langauge card div */}
                                        <div className="relative">
                                            {/* Button to toggle language the card */}
                                            <button onClick={toggleLanguageCard} className="my-2 border border-gray-300 rounded-xl bg-gray-50 md:text-lg text-base md:w-[45vh] w-[30vh] py-2 text-black font-bold " >
                                                Language: {selectedLanguage ? selectedLanguage.name : ''}
                                            </button>
                                            {/* language Card content */}
                                            {isLanguageOpen && (
                                                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" onClick={closeModalOnOutsideClick}>
                                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[400px] bg-white rounded-xl shadow-md overflow-hidden z-50 mt-20">
                                                        <div className="px-4 py-2">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Select your language</h3>
                                                            <input type="text" name="language" id="language" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full mt-2 sm:text-sm border-gray-300 rounded-md" placeholder="Search for a language" value={searchLanguageTerm} onChange={handleSearchLanguageChange} />
                                                        </div>
                                                        <div className="mt-2 grid grid-cols-4 gap-4 px-4 pb-4">
                                                            {/* List of languages with flags */}
                                                            {filteredLanguages.map(language => (
                                                                <button key={language.name} onClick={() => handleLanguageSelect(language)} className={`flex items-center justify-center   text-gray-900 font-semibold py-2 px-4 rounded ${selectedLanguage === language ? 'bg-blue-500 text-white' : ''}`}>
                                                                    {language.name}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                        <span className='text-gray-200'>_____________________________________________</span>
                                        <div className='flex justify-start items-start my-4 mr-2'>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" checked={Hideme} onClick={() => {
                                                    const token = localStorage.getItem('user');
                                                    const user_id = token && JSON.parse(atob(token.split('.')[1]));
                                                    axios.post(`${apiUrl}/hide_me`, {
                                                        user_id: user_id.id
                                                    }).then(x => setHideme(x.data.status))
                                                        .catch(x => console.log(x))
                                                }} value="" className="sr-only peer" />
                                                <div className="w-11 h-6 mr-2 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                                                <span className="ms-3 font-base text-gray-900 dark:text-gray-300 text-sm md:text-lg">Hide Your Location</span>
                                                <div>
                                                    <svg className="text-gray-500 mr-[80px] ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onMouseEnter={() => setShowText2(true)}
                                                        onMouseLeave={() => setShowText2(false)}>
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#bfbfbf"></path>
                                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" fill="#bfbfbf"></path>
                                                    </svg>
                                                    <div
                                                        className={`absolute bottom-full left-0 mt-2 ml-2 p-2 bg-yellow-200 border rounded shadow ${showText2 ? 'block' : 'hidden'}`}
                                                    >
                                                        {/*  */}
                                                        <div className='text-xs font-bold'> Your can hide your location if you want to stay more private</div>
                                                    </div>
                                                </div>

                                                <svg className="text-orange-400 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z" fill="#e27f22"></path>
                                                </svg>

                                            </label>
                                        </div>
                                        {User_pkg == true ? <div className='flex justify-start items-start my-4 mr-4'>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" checked={Showverifiedbadge} onClick={() => {
                                                    const token = localStorage.getItem('user');
                                                    const user_id = token && JSON.parse(atob(token.split('.')[1]));
                                                    axios.post(`${apiUrl}/request_badge`, {
                                                        user_id: user_id.id
                                                    })
                                                        .then(x => setShowverifiedbadge(x.data.user_badge.verified))
                                                }} value="" className="sr-only peer" />
                                                <div className="w-11 h-6  bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500">

                                                </div>
                                                <div className="ms-3 font-base mr-6  text-gray-900 dark:text-gray-300 text-sm md:text-lg">
                                                    Show verified badge to others
                                                </div>


                                                <svg className="text-orange-400 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z" fill="#e27f22"></path>
                                                </svg>

                                            </label>
                                        </div> : <div className='flex justify-start items-start my-4 mr-4'>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" checked={false} disabled value="" className="sr-only peer" />
                                                <div className="w-11 h-6  bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500">

                                                </div>
                                                <div className="ms-3 font-base mr-6  text-gray-900 dark:text-gray-300 text-sm md:text-lg">
                                                    Show verified badge to others
                                                </div>


                                                <svg className="text-orange-400 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z" fill="#e27f22"></path>
                                                </svg>

                                            </label>
                                        </div>}

                                        <div>
                                            <span className='text-orange-500'>Get verified</span>
                                            <div className='text-sm text-black'>Upgrading is a signal to us that you're a real person, so we'll mark you as a Verified Member. This gives you more credibility with other CamSurf users.</div>
                                        </div>
                                        <div className='flex justify-start items-start my-4'>
                                            <label className="relative inline-flex ursor-pointer">

                                                <div className="flex flex-col items-start">

                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="sr-only peer"
                                                            onChange={handleCheckboxChange}
                                                            checked={isGetFollower}
                                                        />
                                                        <div className="w-11 h-6 mr-4 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                                                        <span className="font-base text-gray-900 dark:text-gray-300 text-sm md:text-lg">Get Followers</span>
                                                    </div>
                                                    {isGetFollower && (
                                                        <form onSubmit={Follow_msgs}>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter something"
                                                                className="mt-2 text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                                                onChange={(e) => setFollow_msg(e.target.value)}
                                                            />
                                                        </form>
                                                    )}
                                                </div>

                                                <div>
                                                    <svg className="text-gray-700 mr-[120px] ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onMouseEnter={() => setShowText(true)}
                                                        onMouseLeave={() => setShowText(false)}>
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#bfbfbf"></path>
                                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" fill="#bfbfbf"></path>
                                                    </svg>
                                                    <div
                                                        className={`absolute bottom-full left-0 mt-2 ml-2 p-2 bg-yellow-200 border rounded shadow ${showText ? 'block' : 'hidden'}`}
                                                    >
                                                        {/* Your can hide your location if you want to stay more private */}
                                                        <div className='text-xs font-bold'> Grow your social media following and reconnect with friends by adding your Instagram, Snapchat or OnlyFans id to send each time you connect to a new person.</div>
                                                    </div>
                                                </div>

                                                <svg className="text-orange-400 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z" fill="#e27f22"></path>
                                                </svg>
                                            </label>
                                        </div>

                                        <div className='flex justify-start items-start my-4'>
                                            <label className="relative inline-flex  cursor-pointer">
                                                <div className="flex flex-col items-start">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="sr-only peer"
                                                            onChange={handleCheckIntroMessage}
                                                            checked={isIntroMessage}
                                                        />
                                                        <div className="w-11 h-6 mr-2 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                                                        <span className="font-base text-gray-900 dark:text-gray-300 text-sm md:text-lg">Intro Message</span>
                                                    </div>

                                                    {isIntroMessage && (
                                                        <form onSubmit={Intro_Msgs}>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter something"
                                                                className="mt-2 text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                                                onChange={e => setIntro_msg(e.target.value)}
                                                            />
                                                        </form>
                                                    )}

                                                </div>

                                                <div>
                                                    <svg className=" text-gray-500 mr-[130px] ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onMouseEnter={() => setShowText1(true)}
                                                        onMouseLeave={() => setShowText1(false)}>
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#bfbfbf"></path>
                                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" fill="#bfbfbf"></path>
                                                    </svg>
                                                    <div
                                                        className={`absolute bottom-full left-0 mt-2 ml-2 p-2 bg-yellow-200 border rounded shadow ${showText1 ? 'block' : 'hidden'}`}
                                                    >
                                                        {/* Your can hide your location if you want to stay more private */}
                                                        <div className='text-xs font-bold'>Introduce yourself say hello or add intro message you prefer and it will be sent each time you connect to a new person.</div>
                                                    </div>
                                                </div>
                                                <svg className="text-orange-400 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z" fill="#e27f22"></path>
                                                </svg>
                                            </label>
                                        </div>
                                     

                                    </div>

                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-3 w-[90%] h-auto'>
                            <div className={messages.length > 0 ? 'hidden' : ''} >
                                <h2 className='underline text-xl text-dark font-semibold'>Report Bugs and Issue
                                </h2>
                                <p> 9,851,548 joined Camsurf <span>Special Offer, Get Plus Today!</span></p>
                            </div>
                            <div className='overflow-auto' style={{ height: messages.length > 0 ? '100px' : '35px' }}>
                                {messages.map((message, index) => (
                                    <div key={index} className='bg-gray-200 text-black p-2 rounded-md mb-2'>
                                        <div>{message.msg}</div>
                                    </div>
                                ))}
                            </div>


                            <div className='flex '>
                                <InputEmoji
                                    value={text}
                                    onChange={setText}
                                    cleanOnEnter
                                    // onEnter={handleKeyDown}
                                    placeholder="Type Your Message Here and Press Enter"
                                    style={{ width: '600px' }}
                                />
                                <button
                                    onClick={sendMessage}
                                    className=' text-white px-4 py-2 rounded-md'
                                >
                                    <Image src={vectorArrow} alt="" className='h-10 w-10' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {isUnlockModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay' onClick={closeModalOnOutsideClick}>
                    <div className='bg-gradient-to-tr from-[#004b86] to-[#368FC7] p-4 lg:p-10 rounded-lg shadow-md lg:w-[800px] lg:h-[600px] max-w-[800px] w-[400px] h-[750px] flex flex-col lg:flex-row items-center'>
                        <div className="lg:w-1/2 w-[50%] lg:pr-4 h-[300px] lg:h-auto flex justify-center">
                            {/* Left side image */}
                            <Image src={leftGirlImage} alt='Left Image' width={300} height={900} className='h-auto lg:h-[600px] lg:w-[700px] w-full object-cover' />
                        </div>

                        <div className="lg:w-1/2 w-[60%] lg:pl-4 flex flex-col justify-center mt-6 lg:mt-0">
                            <div className='flex flex-col text-center justify-center'>
                                <p className='flex text-white text-center justify-center'>
                                    It’s Easy to Join <span className='font-bold lg:text-xl text-base text-white ml-2 mb-1 pb-1'>CamNyt</span>
                                </p>
                                <p className='font-bold text-base lg:text-2xl text-white lg:mb-4 mb-0'>Get Started Now</p>
                            </div>
                          
                            <GoogleLogin

                                onSuccess={credentialResponse => {
                                    if (credentialResponse) {

                                        const res = JSON.parse(atob(credentialResponse.credential
                                            .split('.')[1]));

                                        axios.post(`${apiUrl}/signinwith`, {
                                            username: res.name,
                                            email: res.email
                                        })
                                            .then(x => {
                                                // console.log(x)
                                                if (x?.data?.token) {

                                                    localStorage.setItem('user', x.data.token);
                                                    window.location.href = '/'
                                                }
                                            })
                                        console.log(res);
                                    }
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />;
                            <button className='bg-facebook border border-gray-900 justify-center bg-white lg:px-4 px-1 py-2 lg:mt-2 mt-1 flex rounded-xl' onClick={() => alert('Login with Facebook clicked')}>
                                <Image src={fbLogoIcon} alt="facebookIcon" className='h-8 w-8 mr-3' /><span className='lg:text-lg text-sm text-black font-bold lg:mt-0 mt-1'>Login with Facebook</span>
                            </button>
                            <button onClick={openEmailLoginFields} className='bg-white border border-gray-900 text-black text-lg font-bold lg:px-4 px-1 py-2 lg:mt-2 mt-1 rounded-xl'>
                                <span className='lg:text-lg text-sm text-black font-bold lg:mt-0 mt-1'> Login with Email</span>
                            </button>
                           
                            <div className='lg:mt-5 mt-4 text-white text-center lg:text-lg font-sm text-base'>
                                <p>10 111 062 joined CamSurf</p>
                                <p className='lg:my-6 my-3'>Already a Member? Log in Here</p>
                                <p>By clicking on one of the above options you hereby certify that you have read and agree to the terms of use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </section>
    );

}

export default HomeOne;