import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb, faAmazon, faAndroid, faApple, faBlogger, faGithub, faGoogleDrive, faInstagram, faInternetExplorer, faJava, faKickstarter, faShopify, faSteam, faStrava, faStripe, faTelegram, faTiktok, faTwitter, faUber, faWikipediaW, faWix, faWordpressSimple, faXbox } from '@fortawesome/free-brands-svg-icons';

const TrustedBy = () => {
    return (
        <section className="py-5 font-sans">
            <div className="max-w-2xl md:py-[80px] mx-auto">
                <h1 className="text-4xl text-center">Trusted By</h1>
                <div className="my-10">
                    <hr className='border-0 h-[2px] bg-gray-200 my-5' />
                    <marquee behavior="scroll" direction="left" loop="-1">
                        <FontAwesomeIcon icon={faAmazon} className="mr-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faWordpressSimple} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faKickstarter} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faApple} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faBlogger} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faGithub} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faTwitter} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faTiktok} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faAndroid} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faShopify} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faWix} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faStripe} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faInternetExplorer} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faAirbnb} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faWikipediaW} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faJava} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faUber} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faStrava} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faSteam} className="mx-20 size-10 text-blue-500" />
                        <FontAwesomeIcon icon={faInstagram} className="mx-20 size-10 text-blue-500" />
                    </marquee>
                    <hr className='border-0 h-[2px] bg-gray-200 my-5' />
                </div>
            </div>
        </section>

    )
}

export default TrustedBy