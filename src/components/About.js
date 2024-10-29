import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import field from '../images/rb_3066.png'
import me from '../images/me.png'

export default function About({ mode }) {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Kafkaesque", "Apollonian", "Hikikomori", "Stoyteller", "Machiavellian", "Gamemaker", "Hellinist", ];
    const typingSpeed = 150;
    const pauseDuration = 1000;

    useEffect(() => {
        const handleTyping = setInterval(() => {
            typeWriter();
        }, typingSpeed);

        return () => clearInterval(handleTyping);
    }, [text, isDeleting]);

    const typeWriter = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        // If full text is reached, pause before deleting
        if (!isDeleting && updatedText === fullText) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
        }
        // If deletion is done, move to next word
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    const [accordionClass, setAccordionClass] = useState('');
    const fontStyle ={
            fontFamily: 'Lobster, cursive',
            fontSize: '22px',
            color: '#6400ff',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            padding: '12px',
        }

    useEffect(() => {
        setAccordionClass(mode === 'dark' ? 'dark-mode' : 'light-mode');
    }, [mode]);

    return (
        <Container style={{ justifyItems:'center'}}>
            <Row style={{ width: '100%' }}>
                <h1 className="my-3">README.md</h1>
                <div className={`accordion ${accordionClass}`} id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                            style={fontStyle}>
                                SirenScripts
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            A vibrant showcase of my creative journey, hidden in plain sight, waiting to be explored. <i>It's not just code; it's a treasure trove of art.
                            <a style={{textDecoration:'none'}} href="https://rahules24.github.io/sirenscripts/"> visit xd</a>
                            </i>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={fontStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                RextUtils
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            TextUtils is the first project I craft every time I dive into a new framework. I whipped up this big boy when I started learning React. <i>Fun times, messy code, mucho learning!</i>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={fontStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Ráhul
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <Container className='align-item-center'>
                                    <Row>
                                        <Col sm={6}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img 
                                                    src={me} 
                                                    alt="Profile" 
                                                    style={{ width: '15%', height: 'auto', marginRight: '20px', borderRadius: '10%' }} 
                                                />
                                                <div style={{ lineHeight: '1.5' }}>
                                                    <span>Ráhul</span><br />
                                                    <span>rahul.es2024@gmail.com</span><br />
                                                    <span>Tarragona, Spain</span><br />
                                                    <span className="txt-rotate">
                                                        <span className="wrap">
                                                            <i>#{text}</i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <img src={field} alt='flowers' style={{ height: '180px', width:'auto'}} />
        </Container>
    );
}
