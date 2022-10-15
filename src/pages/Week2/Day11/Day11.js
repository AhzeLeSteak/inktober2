import './Day11.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import home from "../../../home.png";
import replay from '../../../replay.png';

export const Day11 = () => {

    const navigate = useNavigate();
    const [frame, setFrame] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => setFrame(f => f === 58 ? 58 : f+1), 80);

        return () => clearInterval(interval);
    });

    return <div id="day11">
        <img src={home} alt="" id="home" width={60} onClick={() => navigate('/')}/>
        <img src={replay} alt="" id="replay" width={60} onClick={() => setFrame(1)}/>
        <div id="container11">
            <img src={`${process.env.PUBLIC_URL}/day11/${frame}.png`} id="logo" alt=""/>
            <div id="space">
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
            </div>

        </div>
    </div>;
}