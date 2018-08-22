import React, { PureComponent } from "react";
import './Skills.css';

class Skills extends PureComponent {

    
    render() {
        const outCircle = [
            { label: 'react', color: 'rgba(121,100,102,0.8)' },
            { label: 'antd', color: 'rgba(49,65,82,0.8)' },
            { label: 'css', color: 'rgba(76,157,160,0.8)' },
            { label: 'js', color: 'rgba(66,66,66,0.8)' },
            { label: 'lua', color: 'rgba(117,148,179,0.8)' },
            { label: 'C#', color: 'rgba(71,83,94,0.8)' },
            { label: 'java', color: 'rgba(147,147,189,0.8)' },
            { label: 'as', color: 'rgba(121,100,102,0.8)' }
          ];
        return(
            <div className='skill'>
                <p className='title'>Words</p>
                <div className='skills'>
                    <div className='skillCircle'>
                        <div className='circleOut'>
                        {outCircle.map((item, index) => (
                            <div
                            key={index}
                            className={`circle-item circle-item${index}`}
                            style={{ backgroundColor: item.color }}>
                            {item.label}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='info'>
                        <p>111</p>
                        <p>222</p>
                        <p>333</p>
                        <p>444</p>
                        <p>555</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;