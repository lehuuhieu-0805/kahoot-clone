import React, { useState } from 'react';
import styles from './home.module.scss';

const Home: React.FC = () => {
    const [placeHolder, setPlaceHolder] = useState<string>('Game PIN');
    const [textButton, setTextButton] = useState<string>('Enter')

    const handleInputPin = () => {
        setPlaceHolder('Nickname')
        setTextButton('Ok, go')
    }

    return (
        <div className={styles.body}>
            <div>
                <div className={styles.body__title}>Kahoot!</div>
                <div className={styles.body__form}>
                    <input type="text" placeholder={placeHolder} className='form-control' />
                    <div className='d-grid gap-2'>
                        <button type='submit' className='btn btn-dark' onClick={handleInputPin}>{textButton}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
