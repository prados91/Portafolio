import React from 'react'
import { format } from "@formkit/tempo"
import './Footer.css'

const Footer = () => {


    const date = new Date()
    const now = format(date, { date: "medium", time: "short" })

    return (
        <footer className='footer_container'>
            <p>Copyright {now} - All right reserved.</p>
        </footer>
    )
}

export default Footer