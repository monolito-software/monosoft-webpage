import styles from '../styles/components/Team.module.css';

import TeammateCard from './TeammateCard';

import teammates from '../../team.json';

const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <h1 className="heading-1">Quem somos.</h1>
      <p className="normal-text">
        Conheça um pouco sobre os integrantes do nosso time.
      </p>

      <div className={styles.teammatesContainer}>
        {teammates.map((teammate, index) => {
          return (
            <TeammateCard
              key={teammate.githubUrl}
              firstName={teammate.firstName}
              lastName={teammate.lastName}
              githubUrl={teammate.githubUrl}
              profilePicUrl={teammate.profilePicUrl}
              about={teammate.about}
              index={`teammate-card-${index+1}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Team;
