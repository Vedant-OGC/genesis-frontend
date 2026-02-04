export default function PhaseTracker({ currentPhase }) {
    const phases = [
        { num: 1, label: 'Research' },
        { num: 2, label: 'Thinking' },
        { num: 3, label: 'Analysis' },
        { num: 4, label: 'Structure' },
        { num: 5, label: 'Paper' }
    ];

    return (
        <div className="phase-tracker" id="phaseTracker">
            {phases.map((phase) => {
                let stateClass = '';
                if (phase.num < currentPhase) stateClass = 'done';
                if (phase.num === currentPhase) stateClass = 'active';

                return (
                    <div
                        key={phase.num}
                        className={`phase-btn-creative ${stateClass}`}
                        data-phase={phase.num}
                    >
                        <span className="phase-btn-text">{phase.label}</span>
                        <div className="phase-btn-hover">
                            <span>{phase.label}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
