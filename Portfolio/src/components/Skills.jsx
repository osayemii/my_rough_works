import { useEffect, useRef } from 'react';
import CardSwap from './CardSwap';
import './Skills.css';

/* ── skill data ───────────────────────────────────────────────────────── */
const skillCategories = [
    {
        title: 'Frontend',
        icon: '⚡',
        accent: 'var(--primary-color)',
        skills: [
            { name: 'React', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'CSS / SCSS', level: 90 },
            { name: 'HTML5', level: 95 },
            { name: 'PHP', level: 80 },
        ],
    },
    {
        title: 'Software Engineering',
        icon: '🛠️',
        accent: 'var(--secondary-color)',
        skills: [
            { name: 'MongoDB', level: 85 },
            { name: 'Java SE/EE', level: 80 },
            { name: 'C# / .NET', level: 75 },
            { name: 'SQL Server', level: 85 },
            { name: 'Python', level: 80 },
        ],
    },
    {
        title: 'Design & Tools',
        icon: '🎨',
        accent: '#a78bfa',
        skills: [
            { name: 'Docker', level: 90 },
            { name: 'Spline', level: 85 },
            { name: 'Figma', level: 80 },
            { name: 'Graphic Design', level: 90 },
            { name: 'Git & Vite', level: 90 },
        ],
    },
];

/* ── single skill card ───────────────────────────────────────────────── */
const SkillCard = ({ category }) => (
    <div className="skill-card" style={{ '--card-accent': category.accent }}>
        <div className="skill-card__header">
            <span className="skill-card__icon">{category.icon}</span>
            <h3 className="skill-card__title">{category.title}</h3>
        </div>

        <ul className="skill-card__list">
            {category.skills.map((skill) => (
                <li key={skill.name} className="skill-card__item">
                    <div className="skill-card__row">
                        <span className="skill-card__name">{skill.name}</span>
                        <span className="skill-card__pct">{skill.level}%</span>
                    </div>
                    <div className="skill-card__track">
                        <div
                            className="skill-card__fill"
                            style={{ '--fill-w': `${skill.level}%` }}
                        />
                    </div>
                </li>
            ))}
        </ul>

        <p className="skill-card__hint">click to cycle ↻</p>
    </div>
);

/* ── Skills section ──────────────────────────────────────────────────── */
const Skills = () => {
    const sectionRef = useRef(null);

    /* Intersection Observer — triggers CSS animate-in class */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('animate-in');
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <div className="skills__container">
                <h2 className="section-title">Skills &amp; Technologies</h2>

                <div className="skills__deck-wrap">
                    <CardSwap
                        cardDistance={40}
                        verticalDistance={10}
                        delay={3500}
                        skewAmount={5}
                        pauseOnHover
                    >
                        {skillCategories.map((cat) => (
                            <SkillCard key={cat.title} category={cat} />
                        ))}
                    </CardSwap>
                </div>
            </div>
        </section>
    );
};

export default Skills;
