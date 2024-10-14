import React from 'react';
import './Process.css'; // Assurez-vous d'importer le fichier CSS.

const ServiceInfo = () => {
    return (
        <section className="process-container">
            <div className="progress-header">
                <h2 className="process-heading">Notre processus de travail en 4 étapes</h2>
                <p>
                    Chez LCSoft, chaque projet suit un processus structuré en quatre étapes clés, garantissant une solution sur-mesure, performante et alignée avec vos objectifs. De l’analyse initiale à la livraison finale, nous vous accompagnons à chaque phase.
                </p>
            </div>
            <div className="timeline">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content-left">
                        <h3 className="step-title">Analyse approfondie</h3>
                        <p className="step-description">
                            Nous identifions précisément vos besoins et établissons un cahier des charges clair pour orienter chaque décision.
                        </p>
                    </div>
                </div>

                <div className="step-line"></div>

                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content-right">
                        <h3 className="step-title">Conception et planification</h3>
                        <p className="step-description">
                            Nous créons des prototypes et planifions les étapes pour un développement fluide, tout en restant flexibles.
                        </p>
                    </div>
                </div>

                <div className="step-line"></div>

                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content-left">
                        <h3 className="step-title">Développement collaboratif</h3>
                        <p className="step-description">
                            Grâce à une approche agile, nous intégrons les retours en temps réel pour ajuster et améliorer à chaque itération.
                        </p>
                    </div>
                </div>

                <div className="step-line"></div>

                <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content-right">
                        <h3 className="step-title">Tests et déploiement</h3>
                        <p className="step-description">
                            Nous assurons une phase de tests rigoureux avant de déployer la solution finale, tout en restant disponibles pour le suivi et la maintenance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;
