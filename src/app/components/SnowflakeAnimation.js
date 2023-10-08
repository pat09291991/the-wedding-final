import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import '../../CustomTransition.css'
import SvgMonogram from './SvgMonogram'

const SnowflakeAnimation = ({ loading }) => {
    useEffect(() => {
        if (loading) {
            const createSnowflake = () => {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.style.left = Math.random() * 100 + 'vw';
                snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
                snowflake.style.animationDelay = 1 + 's';
                document.getElementById('snowflakes-container').appendChild(snowflake);
                snowflake.addEventListener('animationend', function () {
                    snowflake.remove();
                });
            };

            const snowflakeInterval = setInterval(createSnowflake, 200);

            return () => {
                clearInterval(snowflakeInterval);
            };
        } else {
            let snowflake = document.getElementById("snowflakes-container");
            snowflake.classList.add("move-up");
            snowflake.classList.add("w-100");
        }
    }, [loading]);

    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div id="snowflakes-container" className='animate-up h-screen w-full flex justify-center items-center'>
                    <SvgMonogram svgHeight={600} svgWidth={600} />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SnowflakeAnimation;