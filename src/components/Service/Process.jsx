import React from 'react';
import './Process.css'; // Assurez-vous d'inclure le CSS pour le style.

const Process = () => {
    return (
        <div className="process-section">
            <h2 className="process-title">Our Process in Four Steps</h2>
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-number">1</div>
                    <h3 className="step-title">Discovery</h3>
                    <p className="step-description">
                        We dive into your project to understand your needs, target audience, and goals. We conduct research to gather necessary insights.
                    </p>
                </div>
                <div className="process-step">
                    <div className="step-number">2</div>
                    <h3 className="step-title">Planning</h3>
                    <p className="step-description">
                        We define the roadmap and strategy. At this stage, we create wireframes and initial layouts for your project.
                    </p>
                </div>
                <div className="process-step">
                    <div className="step-number">3</div>
                    <h3 className="step-title">Execution</h3>
                    <p className="step-description">
                        This is where the project comes to life. We start developing the product based on the agreed strategy, ensuring top quality.
                    </p>
                </div>
                <div className="process-step">
                    <div className="step-number">4</div>
                    <h3 className="step-title">Delivery</h3>
                    <p className="step-description">
                        After final review and testing, we deliver the product, ensuring you are fully equipped with all the necessary knowledge for ongoing use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Process;
