import {FaTwitter, FaEnvelope, FaTelegram, FaKeybase, FaAngellist, FaLinkedin, FaGithub, FaCamera} from 'react-icons/fa'
import React from 'react'

export var faIconMapper = (type) => {
    let faMap = {
        "twitter": <FaTwitter></FaTwitter>,
        "email": <FaEnvelope></FaEnvelope>,
        "telegram": <FaTelegram></FaTelegram>,
        "keybase": <FaKeybase></FaKeybase>,
        "angellist": <FaAngellist></FaAngellist>,
        "linkedin": <FaLinkedin></FaLinkedin>,
        "github": <FaGithub></FaGithub>,
        "unsplash": <FaCamera></FaCamera>,
    }
    return (type in faMap) ? faMap[type] : <i></i>
}
